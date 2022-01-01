import { Field, ObjectType } from "@nestjs/graphql";
import { MutationOutput } from "src/common/dtos/output.dto";
import { DonateSession } from "../entities/donate-session.entity";

@ObjectType()
export class AllDonateOutput extends MutationOutput {
    @Field(() => [DonateSession], {nullable: true})
    donates?: DonateSession[]
}