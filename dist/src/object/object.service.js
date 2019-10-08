"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const Config_1 = require("../../config/current/Config");
const Neo4j_query_1 = require("../../domain/enum/Neo4j-query");
const neo4j_driver_1 = require("neo4j-driver");
const driver = neo4j_driver_1.default.driver(`${Config_1.Config.neo4jUrl}`, neo4j_driver_1.default.auth.basic(`${Config_1.Config.neo4jUserName}`, `${Config_1.Config.neo4jPass}`));
const session = driver.session();
let ObjectService = class ObjectService {
    getAllObjects() {
        let data = [];
        return session.run(Neo4j_query_1.Neo4jAPI.GET_ALL_OBJECTS)
            .then(result => {
            session.close();
            result.records.map(value => {
                const node = value.get(0);
                data.push({
                    id: node.identity.low,
                    properties: node.properties
                });
            });
            driver.close();
            return data;
        });
    }
};
ObjectService = __decorate([
    common_1.Injectable()
], ObjectService);
exports.ObjectService = ObjectService;
//# sourceMappingURL=object.service.js.map