import { ArgsType, Field, InputType, ObjectType, OmitType, PickType } from "@nestjs/graphql";
import { MutationOutput } from "src/common/dtos/output.dto";
import { ProvideImage } from "../entities/provide-image.entity";

@ArgsType()
@InputType()
export class CreateProvideImageInput {
    @Field(() => Number)
    donateId: number

    @Field(() => String)
    transactionId: string
}


@ObjectType()
export class CreateProvideImageOutput extends MutationOutput {}