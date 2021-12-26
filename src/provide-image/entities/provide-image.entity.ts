import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { User } from 'src/users/entities/user.entity';
import { BeforeInsert, Column, Entity, ManyToOne } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { InternalServerErrorException } from '@nestjs/common';

@InputType('ProvideImageInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class ProvideImage extends CoreEntity {
  @Field(() => User)
  @ManyToOne((type) => User, (user) => user.provideImage)
  providingUser: User;

  @Column()
  @Field(() => String)
  imageUrl: string;

  @Column()
  @Field(() => String)
  token: string;
}
