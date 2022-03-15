import { ArgsType, Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { MutationOutput } from 'src/common/dtos/output.dto';
import { ImageContainer } from '../entities/image-container';

@InputType()
@ArgsType()
export class CreateImageInput extends PickType(ImageContainer, [
  'imageUrl',
]) {
  @Field(() => Number)
  donateId: number;
}



@ObjectType()
export class CreateImageOutput extends MutationOutput {}
