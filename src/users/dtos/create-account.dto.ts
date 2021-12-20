import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { MutationOutput } from 'src/common/dtos/output.dto';
import { User } from '../entities/user.entity';

@InputType()
export class CreateAccountInput extends PickType(User, [
  'nickname',
  'email',
  'password',
  'profileImg'
]) {}

@ObjectType()
export class CreateAccountOutput extends MutationOutput {}
