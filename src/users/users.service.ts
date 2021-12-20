import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountInput } from './dtos/create-account.dto';
import { LoginInput } from './dtos/login.dto';
import { User } from './entities/user.entity';
import { JwtService } from 'src/jwt/jwt.service';
import { EditProfileInput } from './dtos/edit-profile.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
    private readonly jwtService: JwtService,
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
      await this.users.save(
        this.users.create({ email, nickname, password, profileImg }),
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
      const user = this.users.findOne({ email });
      if (!user) {
        return {
          ok: false,
          error: '존재하지 않는 이메일입니다.',
        };
      }
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

  async editProfile(id: number, editProfileInput :EditProfileInput) {
     console.log({...editProfileInput})
     return this.users.update(id, {...editProfileInput})
  }
}
