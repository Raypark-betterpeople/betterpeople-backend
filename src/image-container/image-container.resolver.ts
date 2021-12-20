import { Args, Mutation } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { CreateImageInput, CreateImageOutput } from './dtos/create-image.dto';
import { ImageContainer } from './entities/image-container';
import { ImageContainerService } from './image-container.service';

@Resolver(() => ImageContainer)
export class ImageContainerResolver {
  constructor(private readonly imageContainerService: ImageContainerService) {}
  @Mutation(() => CreateImageOutput)
  async createImage(
    @Args('input') createImageInput: CreateImageInput,
  ): Promise<CreateImageOutput> {
    try {
      const { ok, error } = await this.imageContainerService.createImage(
        createImageInput,
      );
      if (error) {
        return {
          ok: false,
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
}
