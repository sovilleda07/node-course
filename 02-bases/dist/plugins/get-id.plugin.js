"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUUID = void 0;
const uuid_1 = require("uuid");
// import * as uuidv4 from 'uuid/v4';
const getUUID = () => {
    return (0, uuid_1.v4)();
};
exports.getUUID = getUUID;
//# sourceMappingURL=get-id.plugin.js.map