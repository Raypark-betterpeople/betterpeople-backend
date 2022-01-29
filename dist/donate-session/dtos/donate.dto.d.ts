import { MutationOutput } from 'src/common/dtos/output.dto';
import { DonateSession } from '../entities/donate-session.entity';
export declare class DonateInput {
    donateId: number;
}
export declare class DonateOutput extends MutationOutput {
    donate?: DonateSession;
}
