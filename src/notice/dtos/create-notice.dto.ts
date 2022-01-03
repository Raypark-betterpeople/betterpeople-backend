import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { MutationOutput } from 'src/common/dtos/output.dto';
import { Notice } from '../entities/notice.entity';

@InputType()
export class CreateNoticeInput extends PickType(Notice, [
  'mainTitle',
  'subTitle',
  'description',
  'image',
]) {}

@ObjectType()
export class CreateNoticeOutput extends MutationOutput {}
