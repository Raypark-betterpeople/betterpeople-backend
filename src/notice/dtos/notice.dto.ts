import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { MutationOutput } from 'src/common/dtos/output.dto';
import { Notice } from '../entities/notice.entity';

@InputType()
export class NoticeInput {
  @Field(() => Int)
  noticeId: number;
}

@ObjectType()
export class NoticeOutput extends MutationOutput {
  @Field(() => Notice, { nullable: true })
  notice?: Notice;
}
