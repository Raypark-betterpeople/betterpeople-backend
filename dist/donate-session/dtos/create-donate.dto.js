"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDonateOutput = exports.CreateDonateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const output_dto_1 = require("../../common/dtos/output.dto");
const donate_session_entity_1 = require("../entities/donate-session.entity");
let CreateDonateInput = class CreateDonateInput extends (0, graphql_1.PickType)(donate_session_entity_1.DonateSession, ['title', 'description', 'coverImg', 'durationTime']) {
};
CreateDonateInput = __decorate([
    (0, graphql_1.InputType)()
], CreateDonateInput);
exports.CreateDonateInput = CreateDonateInput;
let CreateDonateOutput = class CreateDonateOutput extends output_dto_1.MutationOutput {
};
CreateDonateOutput = __decorate([
    (0, graphql_1.ObjectType)()
], CreateDonateOutput);
exports.CreateDonateOutput = CreateDonateOutput;
//# sourceMappingURL=create-donate.dto.js.map