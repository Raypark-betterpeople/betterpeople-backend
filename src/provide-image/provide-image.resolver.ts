import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { AuthGuard } from 'src/auth/auth.guard';
import {
  CreateProvideImageInput,
  CreateProvideImageOutput,
} from './dtos/create-provide-image.dto';
import { MyImagesOutput } from './dtos/myImages.dto';
import {
  VerifyImageSearchInput,
  VerifyImageSearchOutput,
} from './dtos/verify-image-search.dto';
import { ProvideImage } from './entities/provide-image.entity';
import { ProvideImageService } from './provide-image.service';

@Resolver(() => ProvideImage)
export class ProvideImageResolver {
  constructor(private readonly provideImageService: ProvideImageService) {}

  @UseGuards(AuthGuard)
  @Mutation(() => CreateProvideImageOutput)
  async createProvideImage(
    //graphql context
    @Args('input') createProvideImageInput: CreateProvideImageInput,
    @Context() context,
  ): Promise<CreateProvideImageOutput> {
    try {
      //graphql context header에 있는 유저 가져오기
      const user = context.user;
      const { ok, error } = await this.provideImageService.createProvideImage(
        user,
        createProvideImageInput,
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

  //인증 토큰을 통해, 인증된 이미지를 찾는 mutation
  @UseGuards(AuthGuard)
  @Query(() => VerifyImageSearchOutput)
  async searchVerifyImage(
    @Args('input') verifyImageSearchInput: VerifyImageSearchInput,
  ): Promise<VerifyImageSearchOutput> {
    try {
      const verifyImage = await this.provideImageService.findByToken(
        verifyImageSearchInput.token,
      );
      return {
        ok: true,
        verifyImage,
      };
    } catch (error) {
      return {
        ok: false,
        error: '인증된 이미지를 찾을 수 없습니다.',
      };
    }
  }

  @UseGuards(AuthGuard)
  @Query(() => MyImagesOutput)
  async myImages(@Context() context) {
    try {
      const user = context.user;
      const myImages = await this.provideImageService.myImages(user);
      return {
        ok: true,
        myImages,
      }
    } catch (error) {
      return {
        ok: false,
        error: '일러스트를 불러올 수 없습니다.',
      };
    }
  }
}
