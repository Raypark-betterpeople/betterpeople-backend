"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyImageSearchOutput = exports.VerifyImageSearchInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const output_dto_1 = require("../../common/dtos/output.dto");
const provide_image_entity_1 = require("../entities/provide-image.entity");
let VerifyImageSearchInput = class VerifyImageSearchInput extends (0, graphql_1.PickType)(provide_image_entity_1.ProvideImage, ['token']) {
};
VerifyImageSearchInput = __decorate([
    (0, graphql_1.InputType)()
], VerifyImageSearchInput);
exports.VerifyImageSearchInput = VerifyImageSearchInput;
let VerifyImageSearchOutput = class VerifyImageSearchOutput extends output_dto_1.MutationOutput {
};
__decorate([
    (0, graphql_1.Field)(() => provide_image_entity_1.ProvideImage, { nullable: true }),
    __metadata("design:type", provide_image_entity_1.ProvideImage)
], VerifyImageSearchOutput.prototype, "verifyImage", void 0);
VerifyImageSearchOutput = __decorate([
    (0, graphql_1.ObjectType)()
], VerifyImageSearchOutput);
exports.VerifyImageSearchOutput = VerifyImageSearchOutput;
//# sourceMappingURL=verify-image-search.dto.js.map