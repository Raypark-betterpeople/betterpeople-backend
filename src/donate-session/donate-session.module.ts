import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonateSessionResolver } from './donate-session.resolver';
import { DonateSessionService } from './donate-session.service';
import { DonateSession } from './entities/donate-session.entity';

@Module({
    imports: [TypeOrmModule.forFeature([DonateSession])] ,
    providers: [DonateSessionResolver, DonateSessionService],
})
export class DonateSessionModule {}
