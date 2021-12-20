import { InputType, ObjectType, OmitType, PickType } from "@nestjs/graphql";
import { MutationOutput } from "src/common/dtos/output.dto";
import { ProvideImage } from "../entities/provide-image.entity";

@InputType()
export class CreateProvideImageInput extends OmitType(ProvideImage, ['id', 'providingUser','imageUrl','createAt', 'updateAt','token']) {}

@ObjectType()
export class CreateProvideImageOutput extends MutationOutput {}