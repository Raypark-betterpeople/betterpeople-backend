import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { CoreEntity } from "src/common/entities/core.entity";
import { Column, Entity } from "typeorm";

@InputType('ImageContainerInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class ImageContainer extends CoreEntity {

    @Column()
    @Field(() => Number)
    diceNumber: number;

    @Column()
    @Field(() => String)
    imageUrl: string;
}