"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProvideImageOutput = exports.CreateProvideImageInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const output_dto_1 = require("../../common/dtos/output.dto");
const provide_image_entity_1 = require("../entities/provide-image.entity");
let CreateProvideImageInput = class CreateProvideImageInput extends (0, graphql_1.OmitType)(provide_image_entity_1.ProvideImage, ['id', 'providingUser', 'imageUrl', 'createAt', 'updateAt', 'token']) {
};
CreateProvideImageInput = __decorate([
    (0, graphql_1.InputType)()
], CreateProvideImageInput);
exports.CreateProvideImageInput = CreateProvideImageInput;
let CreateProvideImageOutput = class CreateProvideImageOutput extends output_dto_1.MutationOutput {
};
CreateProvideImageOutput = __decorate([
    (0, graphql_1.ObjectType)()
], CreateProvideImageOutput);
exports.CreateProvideImageOutput = CreateProvideImageOutput;
//# sourceMappingURL=create-provide-image.dto.js.map