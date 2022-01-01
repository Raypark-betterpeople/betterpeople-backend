import { MutationOutput } from "src/common/dtos/output.dto";
import { DonateSession } from "../entities/donate-session.entity";
export declare class AllDonateOutput extends MutationOutput {
    donateSession?: DonateSession[];
}
