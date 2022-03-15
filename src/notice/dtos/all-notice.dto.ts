import { Field, ObjectType } from "@nestjs/graphql";
import { MutationOutput } from "src/common/dtos/output.dto";
import { Notice } from "../entities/notice.entity";

@ObjectType()
export class AllNoticeOutput extends MutationOutput {
    @Field(() => [Notice], {nullable: true})
    notices?: Notice[]
}