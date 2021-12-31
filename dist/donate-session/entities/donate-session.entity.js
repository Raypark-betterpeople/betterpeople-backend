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
exports.DonateSession = void 0;
const graphql_1 = require("@nestjs/graphql");
const core_entity_1 = require("../../common/entities/core.entity");
const image_container_1 = require("../../image-container/entities/image-container");
const typeorm_1 = require("typeorm");
let DonateSession = class DonateSession extends core_entity_1.CoreEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], DonateSession.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], DonateSession.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], DonateSession.prototype, "coverImg", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], DonateSession.prototype, "durationTime", void 0);
__decorate([
    (0, graphql_1.Field)(() => [image_container_1.ImageContainer], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => image_container_1.ImageContainer, (imageContainer) => imageContainer.donate, { eager: true }),
    __metadata("design:type", Array)
], DonateSession.prototype, "donateImage", void 0);
DonateSession = __decorate([
    (0, graphql_1.InputType)('donateSessionInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], DonateSession);
exports.DonateSession = DonateSession;
//# sourceMappingURL=donate-session.entity.js.map