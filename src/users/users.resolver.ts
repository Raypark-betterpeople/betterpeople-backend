import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from 'src/auth/auth.guard';
import {
  CreateAccountInput,
  CreateAccountOutput,
} from './dtos/create-account.dto';
import { EditProfileInput, EditProfileOutput } from './dtos/edit-profile.dto';
import { LoginInput, LoginOutput } from './dtos/login.dto';
import { UserProfileInput, UserProfileOutput } from './dtos/user-profile.dto';
import { VerifyEmailInput, VerifyEmailOutput } from './dtos/verify-email.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UsersService) {}

  @Mutation(() => CreateAccountOutput)
  async createAccount(
    @Args('input') createAccountInput: CreateAccountInput,
  ): Promise<CreateAccountOutput> {
    try {
      const { ok, error } = await this.userService.createAccount(
        createAccountInput,
      );
      if (error) {
        return {
          ok,
          error,
        };
      }
      return {
        ok,
      };
    } catch (error) {
      return {
        ok: false,
        error,
      };
    }
  }

  @Mutation(() => LoginOutput)
  async Login(@Args('input') loginInput: LoginInput): Promise<LoginOutput> {
    try {
      const { ok, error, token } = await this.userService.login(loginInput);
      return {
        ok,
        error,
        token,
      };
    } catch (error) {
      return {
        ok: false,
        error: '로그인 할 수 없습니다.',
      };
    }
  }

  @Query(() => User)
  @UseGuards(AuthGuard)
  me(@Context() context) {
    if (!context.user) {
      return;
    } else {
      return context.user;
    }
  }

  @UseGuards(AuthGuard)
  @Query(() => UserProfileOutput)
  async userProfile(
    @Context() context,
    @Args() userProfileInput: UserProfileInput,
  ): Promise<UserProfileOutput> {
    if (!context.user) {
      return;
    } else {
      try {
        const user = await this.userService.findById(userProfileInput.userId);
        console.log(user);
        if (!user) {
          throw Error;
        }
        return {
          ok: true,
          user,
        };
      } catch (error) {
        return {
          error: '유저를 찾을 수 없습니다.',
          ok: false,
        };
      }
    }
  }

  @UseGuards(AuthGuard)
  @Mutation(() => EditProfileOutput)
  async editProfile(
    @Context() context,
    @Args('input') editProfileInput: EditProfileInput,
  ): Promise<EditProfileOutput> {
    if (!context.user) {
      return;
    } else {
      try {
        const user = context.user;
        await this.userService.editProfile(user['id'], editProfileInput);
        return {
          ok: true,
        };
      } catch (error) {
        return {
          ok: false,
          error: '업데이트 할 수 없습니다.',
        };
      }
    }
  }

  @Mutation(() => VerifyEmailOutput)
  verifyEmail(
    @Args('input') verifyEmailInput: VerifyEmailInput,
  ): Promise<VerifyEmailOutput> {
    return this.userService.verifyEmail(verifyEmailInput.code);
  }
}
