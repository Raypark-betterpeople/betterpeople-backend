import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { CoreEntity } from "src/common/entities/core.entity";
import { ImageContainer } from "src/image-container/entities/image-container";
import { Column, Entity, OneToMany } from "typeorm";

@InputType('donateSessionInputType', {isAbstract: true})
@ObjectType()
@Entity()
export class DonateSession extends CoreEntity {
    @Column()
    @Field(() => String)
    title: string;

    @Column()
    @Field(() => String)
    description: string

    @Column()
    @Field(() => String)
    coverImg?: string;

    @Column()
    @Field(() => String)
    descriptionImg?: string;

    @Column()
    @Field(() => String)
    durationTime: string

    @Field(() => [ImageContainer], {nullable: true})
    @OneToMany(() => ImageContainer, (imageContainer) => imageContainer.donate, {eager: true})
    donateImage?: ImageContainer[];
}