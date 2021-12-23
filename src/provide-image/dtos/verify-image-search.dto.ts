import { Field, InputType, ObjectType, PickType } from "@nestjs/graphql";
import { MutationOutput } from "src/common/dtos/output.dto";
import { ProvideImage } from "../entities/provide-image.entity";

@InputType()
export class VerifyImageSearchInput extends PickType(ProvideImage, ['token']) {}

@ObjectType()
export class VerifyImageSearchOutput extends MutationOutput {
    @Field(() => ProvideImage, {nullable: true})
    verifyImage?: ProvideImage
}