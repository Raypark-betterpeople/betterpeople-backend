import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { MutationOutput } from 'src/common/dtos/output.dto';
import { ImageContainer } from '../entities/image-container';

@InputType()
export class CreateImageInput extends PickType(ImageContainer, [
  'diceNumber',
  'imageUrl',
]) {}

@ObjectType()
export class CreateImageOutput extends MutationOutput {}
