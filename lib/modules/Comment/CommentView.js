"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentView = void 0;
var react_1 = __importStar(require("react"));
var lodash_1 = require("lodash");
var InputTags_1 = require("../../components/InputTags");
var ImageItem_1 = require("../../components/ImageItem/ImageItem");
var PriceTags_1 = require("../../components/Pricetags/PriceTags");
var transform_1 = require("../../utils/transform");
var CommentView = function (props) {
    var onDataChange = props.onDataChange, onCommentPriceTagChange = props.onCommentPriceTagChange;
    var _a = (0, react_1.useState)(props.categoryConfigData), dataTransformCategories = _a[0], setDataTransformCategories = _a[1];
    var _b = (0, react_1.useState)([]), requestPriceTag = _b[0], setRequestPriceTag = _b[1];
    var _c = (0, react_1.useState)([]), requestCategories = _c[0], setRequestCategories = _c[1];
    (0, react_1.useEffect)(function () {
        onDataChange(requestCategories);
    }, [requestCategories]);
    (0, react_1.useEffect)(function () {
        onCommentPriceTagChange(requestPriceTag);
    }, [requestPriceTag]);
    (0, react_1.useEffect)(function () {
        if (!(0, lodash_1.isEmpty)(props.commentSuggestionResponse) &&
            !(0, lodash_1.isEmpty)(props.categoryConfigData)) {
            var keyMapSuggestionToTag = {
                id: "id",
                comment: "name",
            };
            var suggestionToTags_1 = (0, transform_1.transformSuggestionToTag)(props.commentSuggestionResponse, keyMapSuggestionToTag);
            var commentWithConfigureAndTags = props.categoryConfigData.map(function (configure) { return (__assign(__assign({}, configure), suggestionToTags_1.find(function (suggestion) { return suggestion.categoryId === configure.categoryId; }))); });
            setDataTransformCategories(commentWithConfigureAndTags);
            var requestCommentTmp_1 = [];
            commentWithConfigureAndTags.forEach(function (category) {
                var categoryTmp = {
                    categoryId: category.categoryId,
                    photos: [],
                    comments: [],
                };
                requestCommentTmp_1.push(categoryTmp);
            });
            setRequestCategories(requestCommentTmp_1);
        }
        else if (!(0, lodash_1.isEmpty)(props.categoryConfigData)) {
            var requestCommentTmp_2 = [];
            props.categoryConfigData.forEach(function (categoryConfigItem) {
                var categoryTmp = {
                    categoryId: categoryConfigItem.categoryId,
                    photos: [],
                    comments: [],
                };
                requestCommentTmp_2.push(categoryTmp);
            });
            setRequestCategories(requestCommentTmp_2);
        }
    }, [props.commentSuggestionResponse, props.categoryConfigData]);
    var onHandleChangeTag = function (tags, categoryId) {
        var keyMap = {
            id: "id",
            name: "comment",
        };
        if (!(0, lodash_1.isEmpty)(requestCategories)) {
            var requestCategoriesTmp = __spreadArray([], requestCategories, true);
            var tagsToSuggestion = (0, transform_1.transformWithKeyMap)(tags, keyMap);
            tagsToSuggestion.map(function (item) {
                if (item.id === "" || !(0, lodash_1.isNumber)(item.id)) {
                    return (item.id = null);
                }
                return item;
            });
            if (categoryId === 28) {
                var tempDataPriceTag_1 = [];
                tagsToSuggestion.map(function (item) {
                    var tempTag = { content: item.comment };
                    tempDataPriceTag_1.push(tempTag);
                });
                setRequestPriceTag(tempDataPriceTag_1);
            }
            requestCategoriesTmp.find(function (item) { return item.categoryId === categoryId; }).comments = tagsToSuggestion;
            setRequestCategories(requestCategoriesTmp);
        }
    };
    var onHandleChangeImage = function (imageList, categoryId) {
        if (!(0, lodash_1.isEmpty)(requestCategories)) {
            var requestCategoriesTmp = __spreadArray([], requestCategories, true);
            requestCategoriesTmp.find(function (item) { return item.categoryId === categoryId; }).photos = imageList;
            setRequestCategories(requestCategoriesTmp);
        }
    };
    return (react_1.default.createElement("div", { className: "comment-container" },
        react_1.default.createElement("div", { className: "comment-container__item" }, dataTransformCategories.map(function (category, index) {
            return category.categoryId === 28 ? (react_1.default.createElement(react_1.default.Fragment, null,
                category.showTextInput && (react_1.default.createElement(PriceTags_1.PriceTags, { id: category.categoryId.toString(), showLimit: true, placeholderText: category.placeHolderTextInput, allowChange: true, tags: [], suggestions: category.comments ? category.comments : [], onHandleChange: onHandleChangeTag, noSuggestionsText: "Kh\u00F4ng c\u00F3 d\u1EEF li\u1EC7u", categoryId: category.categoryId, requiredTextInput: category.requiredTextInput, dataTypeTextInput: category.dataTypeTextInput })),
                props.errorsConfig.length > 0 &&
                    props.errorsConfig[index].errorInput && (react_1.default.createElement("p", { className: "title-red" }, "Vui l\u00F2ng nh\u1EADp n\u1ED9i dung")))) : (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(ImageItem_1.ImageItem, { onHandleChangeImage: onHandleChangeImage, categoryId: category.categoryId, showPhoto: category.showPhoto, requiredTextInput: category.requiredTextInput, categoryName: category.categoryName }),
                props.errorsConfig.length > 0 &&
                    props.errorsConfig[index].errorImage && (react_1.default.createElement("p", { className: "title-red" }, "Vui l\u00F2ng th\u00EAm h\u00ECnh \u1EA3nh")),
                category.showTextInput && (react_1.default.createElement(InputTags_1.InputTags, { id: category.categoryId.toString(), showLimit: true, placeholderText: category.placeHolderTextInput, allowChange: true, tags: [], suggestions: category.comments ? category.comments : [], onHandleChange: onHandleChangeTag, noSuggestionsText: "Kh\u00F4ng c\u00F3 d\u1EEF li\u1EC7u", categoryId: category.categoryId, requiredTextInput: category.requiredTextInput, dataTypeTextInput: category.dataTypeTextInput })),
                props.errorsConfig.length > 0 &&
                    props.errorsConfig[index].errorInput && (react_1.default.createElement("p", { className: "title-red" }, "Vui l\u00F2ng nh\u1EADp n\u1ED9i dung"))));
        }))));
};
exports.CommentView = CommentView;
//# sourceMappingURL=CommentView.js.map