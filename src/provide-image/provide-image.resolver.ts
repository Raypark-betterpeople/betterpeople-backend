import { UseGuards } from '@nestjs/common';
import { Context, Mutation, Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { AuthGuard } from 'src/auth/auth.guard';
import {
  CreateProvideImageOutput,
} from './dtos/create-provide-image.dto';
import { ProvideImage } from './entities/provide-image.entity';
import { ProvideImageService } from './provide-image.service';

@Resolver(() => ProvideImage)
export class ProvideImageResolver {
  constructor(private readonly provideImageService: ProvideImageService) {}
  
  @UseGuards(AuthGuard)
  @Mutation(() => CreateProvideImageOutput)
  async createProvideImage(
    //graphql context
    @Context() context,
  ): Promise<CreateProvideImageOutput> {
    try {
      //graphql context header에 있는 유저 가져오기
      const user = context.user;
      const { ok, error } = await this.provideImageService.createProvideImage(
        user,
      );
      if (ok) {
        return { ok: true };
      } else {
        return { ok: false, error };
      }
    } catch (error) {
      return {
        ok: false,
        error: '이미지를 생성할 수 없습니다. 이메일을 통해 문의해주세요.',
      };
    }
  }
}
