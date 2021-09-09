"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformSuggestionToTag = exports.transformWithKeyMap = void 0;
var lodash_1 = __importDefault(require("lodash"));
var transformWithKeyMap = function (array, keyMap) {
    return array.map(function (obj) {
        return lodash_1.default.mapKeys(obj, function (_value, key) {
            return keyMap[key];
        });
    });
};
exports.transformWithKeyMap = transformWithKeyMap;
var transformSuggestionToTag = function (array, keyMap) {
    return array.map(function (obj) {
        return {
            categoryId: obj.categoryId,
            comments: obj.comments.map(function (obj2) {
                delete obj2.commentUsed;
                delete obj2.createdDate;
                delete obj2.unsignedComment;
                return lodash_1.default.mapKeys(obj2, function (_value, key) {
                    return keyMap[key];
                });
            }),
        };
    });
};
exports.transformSuggestionToTag = transformSuggestionToTag;
//# sourceMappingURL=transform.js.map