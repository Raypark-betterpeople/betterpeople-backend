import { Injectable } from '@nestjs/common';
import { PickType } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AllDonateOutput } from './dtos/all-donate.dto';
import { CreateDonateInput } from './dtos/create-donate.dto';
import { DonateSession } from './entities/donate-session.entity';

@Injectable()
export class DonateSessionService {
  constructor(
    @InjectRepository(DonateSession)
    private readonly donations: Repository<DonateSession>,
  ) {}

  async createDonate({
    title,
    description,
    coverImg,
    durationTime
  }: CreateDonateInput): Promise<{ ok: boolean; error?: string }> {
    try {
      await this.donations.save(
        this.donations.create({title, description, coverImg, durationTime})
      )
      return {ok: true}
    } catch (error) {
      return {
        ok: false,
        error: '도네이션 섹션을 저장할 수 없습니다.'
      }
    }
  }
  async allDonate(): Promise<AllDonateOutput> {
    try {
      const donates = await this.donations.find();
      return {
        donates,
        ok: true,
      }
    } catch (error) {
      return {
        ok: false,
        error
      }
    }
  }
}
