import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity } from 'typeorm';

@InputType('NoticeInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class Notice extends CoreEntity {
  @Column()
  @Field(() => String)
  mainTitle: string;

  @Column()
  @Field(() => String)
  subTitle: string;

  @Column()
  @Field(() => String)
  description: string;

  @Column()
  @Field(() => String)
  image: string;
}
