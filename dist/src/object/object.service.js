"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const neo4j_driver_1 = require("neo4j-driver");
const driver = neo4j_driver_1.default.driver('bolt://localhost', neo4j_driver_1.default.auth.basic('neo4j', 'root'));
const session = driver.session();
let ObjectService = class ObjectService {
    getHello() {
        session.run('MATCH (u:User) return u').then(result => {
            session.close();
            result.records.map(value => {
                console.log(value.get(0));
            });
            driver.close();
        });
        return 'Hello World!';
    }
};
ObjectService = __decorate([
    common_1.Injectable()
], ObjectService);
exports.ObjectService = ObjectService;
//# sourceMappingURL=object.service.js.map