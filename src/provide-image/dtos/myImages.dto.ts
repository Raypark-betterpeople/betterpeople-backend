import { Field, ObjectType } from "@nestjs/graphql";
import { MutationOutput } from "src/common/dtos/output.dto";
import { ProvideImage } from "../entities/provide-image.entity";

@ObjectType()
export class MyImagesOutput extends MutationOutput {
    @Field(() => ProvideImage, {nullable: true})
    myImage?: ProvideImage[]
}