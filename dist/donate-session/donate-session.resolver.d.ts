import { DonateSessionService } from './donate-session.service';
import { AllDonateOutput } from './dtos/all-donate.dto';
import { CreateDonateInput, CreateDonateOutput } from './dtos/create-donate.dto';
import { DonateInput, DonateOutput } from './dtos/donate.dto';
export declare class DonateSessionResolver {
    private readonly donateSessionService;
    constructor(donateSessionService: DonateSessionService);
    createDonate(createDonateInput: CreateDonateInput): Promise<CreateDonateOutput>;
    allDonate(): Promise<AllDonateOutput>;
    donate(donateInput: DonateInput): Promise<DonateOutput>;
}
