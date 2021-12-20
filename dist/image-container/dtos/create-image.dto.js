"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateImageOutput = exports.CreateImageInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const output_dto_1 = require("../../common/dtos/output.dto");
const image_container_1 = require("../entities/image-container");
let CreateImageInput = class CreateImageInput extends (0, graphql_1.PickType)(image_container_1.ImageContainer, [
    'diceNumber',
    'imageUrl',
]) {
};
CreateImageInput = __decorate([
    (0, graphql_1.InputType)()
], CreateImageInput);
exports.CreateImageInput = CreateImageInput;
let CreateImageOutput = class CreateImageOutput extends output_dto_1.MutationOutput {
};
CreateImageOutput = __decorate([
    (0, graphql_1.ObjectType)()
], CreateImageOutput);
exports.CreateImageOutput = CreateImageOutput;
//# sourceMappingURL=create-image.dto.js.map