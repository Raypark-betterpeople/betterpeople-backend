import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { CoreEntity } from "src/common/entities/core.entity";
import { DonateSession } from "src/donate-session/entities/donate-session.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@InputType('ImageContainerInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class ImageContainer extends CoreEntity {
    @Column()
    @Field(() => String)
    imageUrl: string;

    @Field(() => DonateSession)
    @ManyToOne((type) => DonateSession, (donateSession) => donateSession.donateImage)
    donate: DonateSession;
}