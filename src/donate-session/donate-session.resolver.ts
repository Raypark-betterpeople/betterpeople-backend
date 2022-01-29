import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { DonateSessionService } from './donate-session.service';
import { AllDonateOutput } from './dtos/all-donate.dto';
import {
  CreateDonateInput,
  CreateDonateOutput,
} from './dtos/create-donate.dto';
import { DonateInput, DonateOutput } from './dtos/donate.dto';
import { DonateSession } from './entities/donate-session.entity';

@Resolver(() => DonateSession)
export class DonateSessionResolver {
  constructor(private readonly donateSessionService: DonateSessionService) {}
  @Mutation(() => CreateDonateOutput)
  async createDonate(
    @Args('input') createDonateInput: CreateDonateInput,
  ): Promise<CreateDonateOutput> {
    try {
      const { ok, error } = await this.donateSessionService.createDonate(
        createDonateInput,
      );
      if (error) {
        return {
          ok,
          error,
        };
      }
      return { ok };
    } catch (error) {
      return { ok: false, error: '도네이션 섹션을 만들 수 없습니다.' };
    }
  }

  @Query(() => AllDonateOutput)
  allDonate(): Promise<AllDonateOutput> {
      return this.donateSessionService.allDonate();
  }

  @Query(() => DonateOutput)
  donate(@Args('input') donateInput: DonateInput): Promise<DonateOutput> {
    return this.donateSessionService.findDonateById(donateInput);
  }
}
