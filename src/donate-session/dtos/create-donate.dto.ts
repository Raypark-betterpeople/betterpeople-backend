import { InputType, ObjectType, PickType } from "@nestjs/graphql";
import { MutationOutput } from "src/common/dtos/output.dto";
import { DonateSession } from "../entities/donate-session.entity";

@InputType()
export class CreateDonateInput extends PickType(DonateSession, ['title', 'description', 'coverImg', 'durationTime']) {}

@ObjectType()
export class CreateDonateOutput extends MutationOutput {}