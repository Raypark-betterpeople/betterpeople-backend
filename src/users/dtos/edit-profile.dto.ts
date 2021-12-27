import { ArgsType, InputType, ObjectType, PartialType, PickType } from '@nestjs/graphql';
import { MutationOutput } from 'src/common/dtos/output.dto';
import { User } from '../entities/user.entity';

@InputType()
export class EditProfileInput extends PartialType(
  PickType(User, ['nickname', 'password', 'email']),
) {}

@ObjectType()
export class EditProfileOutput extends MutationOutput {}
