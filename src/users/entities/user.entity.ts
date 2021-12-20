import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { BeforeInsert, Column, Entity, OneToMany } from 'typeorm';
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

  @Column()
  @Field(() => String)
  @IsString()
  password: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  @IsString()
  profileImg?: string;

  @Field((type) => ProvideImage, {nullable: true})
  @OneToMany((type) => ProvideImage, (provideImage) => provideImage.providingUser)
  provideImage: ProvideImage[];

  @BeforeInsert()
  async hashPassword(): Promise<void> {
    try {
      this.password = await bcrypt.hash(this.password, 10);
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
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
