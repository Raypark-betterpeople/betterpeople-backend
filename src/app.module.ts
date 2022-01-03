import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { CommonModule } from './common/common.module';
import { User } from './users/entities/user.entity';
import { ImageContainerModule } from './image-container/image-container.module';
import { ImageContainer } from './image-container/entities/image-container';
import { JwtModule } from './jwt/jwt.module';
import { JwtMiddleWare } from './jwt/jwt.middleware';
import { AuthModule } from './auth/auth.module';
import { ProvideImageModule } from './provide-image/provide-image.module';
import { ProvideImage } from './provide-image/entities/provide-image.entity';
import { Verification } from './users/entities/verification.entity';
import { MailModule } from './mail/mail.module';
import { DonateSessionModule } from './donate-session/donate-session.module';
import { DonateSession } from './donate-session/entities/donate-session.entity';
import { NoticeModule } from './notice/notice.module';
import { Notice } from './notice/entities/notice.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.prod',
      ignoreEnvFile: process.env.NODE_ENV === 'prod',
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      context: ({ req }) => ({ user: req['user'] }),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: process.env.NODE_ENV !== 'prod',
      logging: process.env.NODE_ENV !== 'prod',
      entities: [User, ImageContainer, ProvideImage, Verification, DonateSession, Notice],
    }),
    JwtModule.forRoot({
      privateKey: process.env.TOKEN_SECRET,
    }),
    MailModule.forRoot({
      apiKey: process.env.MAILGUN_API_KEY,
      fromEmail: process.env.MAILGUN_FROM_EMAIL,
      domain: process.env.MAILGUN_DOMAIN_NAME,
    }),
    UsersModule,
    CommonModule,
    ImageContainerModule,
    AuthModule,
    ProvideImageModule,
    MailModule,
    DonateSessionModule,
    NoticeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtMiddleWare).forRoutes({
      path: '/graphql',
      method: RequestMethod.ALL,
    });
  }
}
