import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { extend } from '@nestjs/graphql/dist/utils';
import { MutationOutput } from 'src/common/dtos/output.dto';
import { DonateSession } from '../entities/donate-session.entity';

@InputType()
export class DonateInput {
  @Field(() => Int)
  donateId: number;
}

@ObjectType()
export class DonateOutput extends MutationOutput {
  @Field(() => DonateSession, { nullable: true })
  donate?: DonateSession;
}
