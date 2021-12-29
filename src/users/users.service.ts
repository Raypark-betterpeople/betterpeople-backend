import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountInput } from './dtos/create-account.dto';
import { LoginInput } from './dtos/login.dto';
import { User } from './entities/user.entity';
import { JwtService } from 'src/jwt/jwt.service';
import { EditProfileInput, EditProfileOutput } from './dtos/edit-profile.dto';
import { Verification } from './entities/verification.entity';
import { VerifyEmailOutput } from './dtos/verify-email.dto';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
    @InjectRepository(Verification)
    private readonly verifications: Repository<Verification>,
    private readonly jwtService: JwtService,
    private readonly mailService: MailService,
  ) {}

  async createAccount({
    email,
    password,
    nickname,
    profileImg,
  }: CreateAccountInput): Promise<{ ok: boolean; error?: string }> {
    try {
      const existNickname = await this.users.findOne({ nickname });
      const existEmail = await this.users.findOne({ email });
      if (existNickname) {
        return { ok: false, error: '이미 같은 닉네임의 유저가 존재합니다.' };
      }
      if (existEmail) {
        return { ok: false, error: '이미 같은 이메일이 존재합니다.' };
      }
      const user = await this.users.save(
        this.users.create({ email, nickname, password, profileImg }),
      );
      const verification = await this.verifications.save(
        this.verifications.create({ user }),
      );
      this.mailService.sendVerificationEmail(
        user.email,
        verification.code,
        user.nickname,
      );
      return { ok: true };
    } catch (error) {
      return { ok: false, error: '계정을 생성할 수 없습니다.' };
    }
  }

  async login({
    email,
    password,
  }: LoginInput): Promise<{ ok: boolean; error?: string; token?: string }> {
    try {
      const user = await this.users.findOne(
        { email },
        { select: ['id', 'password'] },
      );
      if (!user) {
        return {
          ok: false,
          error: '존재하지 않는 이메일입니다.',
        };
      }
      console.log(user.password);
      const passwordCorrect = await (await user).checkPassword(password);
      if (!passwordCorrect) {
        return {
          ok: false,
          error: '비밀번호가 일치하지 않습니다.',
        };
      }
      const token = this.jwtService.signToken({
        id: (await user).id,
        nickname: (await user).nickname,
        check: 'copyright of better-man Inc.',
      });
      return {
        ok: true,
        token,
      };
    } catch (error) {
      return {
        ok: false,
        error,
      };
    }
  }
  async findById(id: number): Promise<User> {
    return this.users.findOne({ id });
  }

  async editProfile(
    id: number,
    editProfileInput: EditProfileInput,
  ): Promise<EditProfileOutput> {
    try {
      const user = await this.users.findOne(id);
      if (editProfileInput.email && editProfileInput.email !== user.email) {
        user.email = editProfileInput.email;
        user.emailVerified = false;
        await this.verifications.delete({ user: { id: user.id } });
        const verification = await this.verifications.save(
          this.verifications.create({ user }),
        );
        this.mailService.sendVerificationEmail(
          user.email,
          verification.code,
          user.nickname,
        );
      }
      if (editProfileInput.password) {
        user.password = editProfileInput.password;
      }
      if (editProfileInput.nickname) {
        user.nickname = editProfileInput.nickname;
      }
      await this.users.save(user);
      return {
        ok: true,
      };
    } catch (error) {
      return { ok: false, error: '업데이트를 할 수 없습니다.' };
    }
  }

  async verifyEmail(code: string): Promise<VerifyEmailOutput> {
    try {
      const verification = await this.verifications.findOne(
        { code },
        { relations: ['user'] },
      );
      if (verification) {
        verification.user.emailVerified = true;
        await this.users.save(verification.user);
        await this.verifications.delete(verification.id);
        return { ok: true };
      }
    } catch (error) {
      return { ok: false, error: '메일을 인증할 수 없습니다.' };
    }
  }
}
