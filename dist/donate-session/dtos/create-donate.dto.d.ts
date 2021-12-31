import { MutationOutput } from "src/common/dtos/output.dto";
import { DonateSession } from "../entities/donate-session.entity";
declare const CreateDonateInput_base: import("@nestjs/common").Type<Pick<DonateSession, "title" | "description" | "coverImg" | "durationTime">>;
export declare class CreateDonateInput extends CreateDonateInput_base {
}
export declare class CreateDonateOutput extends MutationOutput {
}
export {};
