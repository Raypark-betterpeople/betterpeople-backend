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
exports.ProvideImage = void 0;
const graphql_1 = require("@nestjs/graphql");
const core_entity_1 = require("../../common/entities/core.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
let ProvideImage = class ProvideImage extends core_entity_1.CoreEntity {
};
__decorate([
    (0, graphql_1.Field)(() => user_entity_1.User),
    (0, typeorm_1.ManyToOne)((type) => user_entity_1.User, (user) => user.provideImage),
    __metadata("design:type", user_entity_1.User)
], ProvideImage.prototype, "providingUser", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ProvideImage.prototype, "imageUrl", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ProvideImage.prototype, "token", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ProvideImage.prototype, "donateSessionTitle", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ProvideImage.prototype, "donateDurationDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ProvideImage.prototype, "transactionId", void 0);
ProvideImage = __decorate([
    (0, graphql_1.InputType)('ProvideImageInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], ProvideImage);
exports.ProvideImage = ProvideImage;
//# sourceMappingURL=provide-image.entity.js.map