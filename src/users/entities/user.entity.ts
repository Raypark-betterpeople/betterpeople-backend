import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { InternalServerErrorException } from '@nestjs/common';
import { IsEmail, IsString } from 'class-validator';
import { ProvideImage } from 'src/provide-image/entities/provide-image.entity';

@InputType('UserInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class User extends CoreEntity {
  @Column()
  @Field(() => String)
  @IsString()
  nickname: string;

  @Column()
  @Field(() => String)
  @IsEmail()
  email: string;

  @Column({ select: false })
  @Field(() => String)
  password: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  @IsString()
  profileImg?: string;

  @Column({ default: false })
  @Field(() => Boolean)
  emailVerified: boolean;

  @Field((type) => [ProvideImage], { nullable: true })
  @OneToMany(
    (type) => ProvideImage,
    (provideImage) => provideImage.providingUser,
    { eager: true },
  )
  provideImage?: ProvideImage[];

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    if (this.password) {
      try {
        this.password = await bcrypt.hash(this.password, 10);
      } catch (error) {
        console.log(error);
        throw new InternalServerErrorException();
      }
    }
  }

  async checkPassword(notSaltPassword: string): Promise<boolean> {
    try {
      const compareOk = await bcrypt.compare(notSaltPassword, this.password);
      return compareOk;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }
}
