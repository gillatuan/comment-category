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
exports.InputTags = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_tag_autocomplete_1 = __importDefault(require("react-tag-autocomplete"));
var lodash_1 = __importDefault(require("lodash"));
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
require("./index.scss");
require("bootstrap/dist/css/bootstrap.min.css");
var removeAccents_1 = require("../../utils/removeAccents");
var _window = window.window;
var InputTags = function (props) {
    var _a = (0, react_1.useState)(props.tags), tags = _a[0], setTags = _a[1];
    var _b = (0, react_1.useState)(props.suggestions), suggestions = _b[0], setSuggestions = _b[1];
    var _c = (0, react_1.useState)(tags.length | 0), setTotal = _c[1];
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
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: props.dataTypeTextInput === "Tag" ? ((0, jsx_runtime_1.jsx)("div", __assign({ className: "input-tags-comment", id: props.id, style: { pointerEvents: props.allowChange ? "auto" : "none" } }, { children: (0, jsx_runtime_1.jsx)(react_tag_autocomplete_1.default, { addOnBlur: true, allowBackspace: true, allowNew: true, delimiters: ["Enter", "Tab", "."], onAddition: onAddTag, onDelete: onDeleteTag, inputAttributes: inputAttributes, minQueryLength: 1, placeholderText: lodash_1.default.isEmpty(tags) ? props.placeholderText : "", suggestions: suggestions, tagComponent: tagComponent, tags: tags, maxSuggestionsLength: 100, suggestionsTransform: onHandleSuggestionsTransform }, void 0) }), void 0)) : ((0, jsx_runtime_1.jsx)("textarea", { className: "text-area-comment", placeholder: lodash_1.default.isEmpty(tags) ? props.placeholderText : "", id: props.id, rows: 4, onChange: function (e) { return onHandChangeTextArea(e); } }, void 0)) }, void 0));
};
exports.InputTags = InputTags;
//# sourceMappingURL=index.js.map