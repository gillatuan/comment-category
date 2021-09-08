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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceTags = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_tag_autocomplete_1 = __importDefault(require("react-tag-autocomplete"));
var axios_1 = __importDefault(require("axios"));
var lodash_1 = __importDefault(require("lodash"));
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var removeAccents_1 = require("../../utils/removeAccents");
require("bootstrap/dist/css/bootstrap.min.css");
require("./Pricetags.scss");
var _window = window.window;
var PriceTags = function (props) {
    var _a = (0, react_1.useState)(props.tags), tags = _a[0], setTags = _a[1];
    var _b = (0, react_1.useState)(props.suggestions), suggestions = _b[0], setSuggestions = _b[1];
    var _c = (0, react_1.useState)(tags.length | 0), setTotal = _c[1];
    var _d = (0, react_1.useState)([]), defaultTags = _d[0], setDefaultTags = _d[1];
    (0, react_1.useEffect)(function () {
        var configDefaultTag = {
            method: "get",
            url: "/price-tag/tag-display/list/default",
        };
        var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
            var res, tagsTemp_1, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, (0, axios_1.default)(configDefaultTag)];
                    case 1:
                        res = _a.sent();
                        tagsTemp_1 = __spreadArray([], defaultTags, true);
                        res.data.data.forEach(function (item) {
                            var temp = { id: "", name: item.displayContent };
                            tagsTemp_1.push(temp);
                        });
                        setDefaultTags(tagsTemp_1);
                        return [3, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log("error", error_1);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        }); };
        fetchData();
    }, []);
    (0, react_1.useEffect)(function () {
        setTotal(tags.length);
        props.onHandleChange(tags, props.categoryId);
    }, []);
    (0, react_1.useEffect)(function () {
        setTotal(tags.length);
        props.onHandleChange(tags, props.categoryId);
    }, [tags, suggestions]);
    (0, react_1.useEffect)(function () {
        if (!lodash_1.default.isEmpty(props.suggestions)) {
            setSuggestions(props.suggestions);
        }
    }, [props.suggestions]);
    var onAddTag = function (tag) {
        var tagIsTrim = __assign(__assign({}, tag), { name: tag.name.trim() });
        if (tags.length >= 50) {
            return;
        }
        if (!lodash_1.default.find(tags, tagIsTrim) && !lodash_1.default.isEmpty(tagIsTrim.name)) {
            setTags(__spreadArray(__spreadArray([], tags, true), [tagIsTrim], false));
            lodash_1.default.remove(suggestions, function (element) {
                return element.name == tag.name;
            });
        }
    };
    var onDeleteTag = function (i) {
        var tagsTmp = tags.slice(0);
        console.log("i", i);
        if (lodash_1.default.isNumber(i) && i >= 0 && lodash_1.default.isNumber(tagsTmp[i].id)) {
            setSuggestions(__spreadArray(__spreadArray([], suggestions, true), [tagsTmp[i]], false));
        }
        tagsTmp.splice(i, 1);
        setTags(tagsTmp);
    };
    var inputAttributes = {
        maxLength: 500,
        disabled: !props.allowChange,
    };
    var tagComponent = function (props) {
        return ((0, jsx_runtime_1.jsxs)("button", __assign({ disabled: true, className: "tag-comment" }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "tag-comment__title" }, { children: props.tag.name }), void 0), (0, jsx_runtime_1.jsx)("span", __assign({ className: "tag-comment__icon", onClick: props.onDelete }, { children: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faTimes }, void 0) }), void 0)] }), void 0));
    };
    var onHandChangeTextArea = function (e) {
        console.log("e", e.target.value);
        var tags = [
            {
                id: "",
                name: e.target.value,
            },
        ];
        if (lodash_1.default.isEmpty(e.target.value)) {
            tags = [];
        }
        setTags(tags);
        props.onHandleChange(tags, props.categoryId);
    };
    var onHandleSuggestionsTransform = function (query, suggestions) {
        var filteredSuggestions = lodash_1.default.filter(suggestions, function (item) {
            return ((0, removeAccents_1.removeAccents)(item.name).toLowerCase().includes(query.toLowerCase()) ||
                item.name.toLowerCase().includes(query.toLowerCase()));
        });
        return filteredSuggestions;
    };
    (0, react_1.useEffect)(function () {
        $(".react-tags__search-input").on("keyup", function (e) {
            if ((e.which == 40 || e.which == 38) &&
                _window.document.getElementById("ReactTags") != undefined) {
                _window.document.getElementById("ReactTags").scrollTop = 0;
                var offsetItem = _window.document.getElementsByClassName("is-active")[0].offsetTop +
                    _window.document.getElementsByClassName("is-active")[0].offsetHeight;
                _window.document.getElementById("ReactTags").scrollTop =
                    offsetItem - _window.document.getElementById("ReactTags").offsetHeight;
            }
        });
    }, []);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "pricetag" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "pricetag__header" }, { children: (0, jsx_runtime_1.jsxs)("div", { children: ["Gi\u00E1 ", props.requiredTextInput && (0, jsx_runtime_1.jsx)("span", __assign({ className: "red" }, { children: "*" }), void 0)] }, void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "pricetag__tags" }, { children: props.dataTypeTextInput === "Tag" ? ((0, jsx_runtime_1.jsx)("div", __assign({ className: "input-tags-comment", id: props.id, style: { pointerEvents: props.allowChange ? "auto" : "none" } }, { children: (0, jsx_runtime_1.jsx)(react_tag_autocomplete_1.default, { addOnBlur: true, allowBackspace: true, allowNew: true, delimiters: ["Enter", "Tab", "."], onAddition: onAddTag, onDelete: onDeleteTag, inputAttributes: inputAttributes, minQueryLength: 1, placeholderText: lodash_1.default.isEmpty(tags) ? props.placeholderText : "", suggestions: suggestions, tagComponent: tagComponent, tags: tags, maxSuggestionsLength: 100, suggestionsTransform: onHandleSuggestionsTransform }, void 0) }), void 0)) : ((0, jsx_runtime_1.jsx)("textarea", { className: "text-area-comment", placeholder: lodash_1.default.isEmpty(tags) ? props.placeholderText : "", id: props.id, rows: 4, onChange: function (e) { return onHandChangeTextArea(e); } }, void 0)) }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "pricetag__defaultTags" }, { children: defaultTags.map(function (val) { return ((0, jsx_runtime_1.jsx)("button", __assign({ type: "button", className: tags.find(function (tag) { return tag.name === val.name; })
                            ? "pricetag__btn active"
                            : "pricetag__btn", onClick: function () { return onAddTag(val); } }, { children: val.name }), void 0)); }) }), void 0)] }), void 0) }, void 0));
};
exports.PriceTags = PriceTags;
//# sourceMappingURL=PriceTags.js.map