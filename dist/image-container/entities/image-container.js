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
exports.ImageContainer = void 0;
const graphql_1 = require("@nestjs/graphql");
const core_entity_1 = require("../../common/entities/core.entity");
const donate_session_entity_1 = require("../../donate-session/entities/donate-session.entity");
const typeorm_1 = require("typeorm");
let ImageContainer = class ImageContainer extends core_entity_1.CoreEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ImageContainer.prototype, "imageUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => donate_session_entity_1.DonateSession),
    (0, typeorm_1.ManyToOne)((type) => donate_session_entity_1.DonateSession, (donateSession) => donateSession.donateImage),
    __metadata("design:type", donate_session_entity_1.DonateSession)
], ImageContainer.prototype, "donate", void 0);
ImageContainer = __decorate([
    (0, graphql_1.InputType)('ImageContainerInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], ImageContainer);
exports.ImageContainer = ImageContainer;
//# sourceMappingURL=image-container.js.map