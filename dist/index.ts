

function ___$insertStyle(css) {
    if (!css || !window) {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var _ = require('lodash');
var ___default = _interopDefault(_);
var ReactTags = _interopDefault(require('react-tag-autocomplete'));
var reactFontawesome = require('@fortawesome/react-fontawesome');
var freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');
require('components/InputTags/index.scss');
require('bootstrap/dist/css/bootstrap.min.css');
var Lightbox = _interopDefault(require('react-image-lightbox'));
var axios = _interopDefault(require('axios'));
require('components/ImageItem/ImageItem.scss');
require('react-image-lightbox/style.css');
require('components/Pricetags/Pricetags.scss');
require('Comment/comment.css');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

var removeAccents = function (str) {
    var AccentsMap = [
        "aàảãáạăằẳẵắặâầẩẫấậ",
        "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
        "dđ",
        "DĐ",
        "eèẻẽéẹêềểễếệ",
        "EÈẺẼÉẸÊỀỂỄẾỆ",
        "iìỉĩíị",
        "IÌỈĨÍỊ",
        "oòỏõóọôồổỗốộơờởỡớợ",
        "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
        "uùủũúụưừửữứự",
        "UÙỦŨÚỤƯỪỬỮỨỰ",
        "yỳỷỹýỵ",
        "YỲỶỸÝỴ",
    ];
    for (var i = 0; i < AccentsMap.length; i++) {
        var re = new RegExp("[" + AccentsMap[i].substr(1) + "]", "g");
        var char = AccentsMap[i][0];
        str = str.replace(re, char);
    }
    return str;
};

var _window = window.window;
var InputTags = function (props) {
    var _a = react.useState(props.tags), tags = _a[0], setTags = _a[1];
    var _b = react.useState(props.suggestions), suggestions = _b[0], setSuggestions = _b[1];
    var _c = react.useState(tags.length | 0), setTotal = _c[1];
    react.useEffect(function () {
        setTotal(tags.length);
        props.onHandleChange(tags, props.categoryId);
    }, []);
    react.useEffect(function () {
        setTotal(tags.length);
        props.onHandleChange(tags, props.categoryId);
    }, [tags, suggestions]);
    react.useEffect(function () {
        if (!___default.isEmpty(props.suggestions)) {
            setSuggestions(props.suggestions);
        }
    }, [props.suggestions]);
    var onAddTag = function (tag) {
        var tagIsTrim = __assign(__assign({}, tag), { name: tag.name.trim() });
        if (tags.length >= 50) {
            return;
        }
        if (!___default.find(tags, tagIsTrim) && !___default.isEmpty(tagIsTrim.name)) {
            setTags(__spreadArray(__spreadArray([], tags), [tagIsTrim]));
            ___default.remove(suggestions, function (element) {
                return element.name == tag.name;
            });
        }
    };
    var onDeleteTag = function (i) {
        var tagsTmp = tags.slice(0);
        console.log("i", i);
        if (___default.isNumber(i) && i >= 0 && ___default.isNumber(tagsTmp[i].id)) {
            setSuggestions(__spreadArray(__spreadArray([], suggestions), [tagsTmp[i]]));
        }
        tagsTmp.splice(i, 1);
        setTags(tagsTmp);
    };
    var inputAttributes = {
        maxLength: 500,
        disabled: !props.allowChange,
    };
    var tagComponent = function (props) {
        return (jsxRuntime.jsxs("button", __assign({ disabled: true, className: "tag-comment" }, { children: [jsxRuntime.jsx("span", __assign({ className: "tag-comment__title" }, { children: props.tag.name }), void 0), jsxRuntime.jsx("span", __assign({ className: "tag-comment__icon", onClick: props.onDelete }, { children: jsxRuntime.jsx(reactFontawesome.FontAwesomeIcon, { icon: freeSolidSvgIcons.faTimes }, void 0) }), void 0)] }), void 0));
    };
    var onHandChangeTextArea = function (e) {
        console.log("e", e.target.value);
        var tags = [
            {
                id: "",
                name: e.target.value,
            },
        ];
        if (___default.isEmpty(e.target.value)) {
            tags = [];
        }
        setTags(tags);
        props.onHandleChange(tags, props.categoryId);
    };
    var onHandleSuggestionsTransform = function (query, suggestions) {
        var filteredSuggestions = ___default.filter(suggestions, function (item) {
            return (removeAccents(item.name).toLowerCase().includes(query.toLowerCase()) ||
                item.name.toLowerCase().includes(query.toLowerCase()));
        });
        return filteredSuggestions;
    };
    react.useEffect(function () {
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
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.dataTypeTextInput === "Tag" ? (jsxRuntime.jsx("div", __assign({ className: "input-tags-comment", id: props.id, style: { pointerEvents: props.allowChange ? "auto" : "none" } }, { children: jsxRuntime.jsx(ReactTags, { addOnBlur: true, allowBackspace: true, allowNew: true, delimiters: ["Enter", "Tab", "."], onAddition: onAddTag, onDelete: onDeleteTag, inputAttributes: inputAttributes, minQueryLength: 1, 
                // noSuggestionsText={props.noSuggestionsText}
                placeholderText: ___default.isEmpty(tags) ? props.placeholderText : "", suggestions: suggestions, tagComponent: tagComponent, tags: tags, maxSuggestionsLength: 100, suggestionsTransform: onHandleSuggestionsTransform }, void 0) }), void 0)) : (jsxRuntime.jsx("textarea", { className: "text-area-comment", placeholder: ___default.isEmpty(tags) ? props.placeholderText : "", id: props.id, rows: 4, onChange: function (e) { return onHandChangeTextArea(e); } }, void 0)) }, void 0));
};

// Image limit
var IMAGE_LIMIT = 10;

var _window$1 = window.window;
var ImageItem = function (props) {
    var _a = react.useState([]), imageList = _a[0], setImageList = _a[1];
    var _b = react.useState(0), photoIndex = _b[0], setPhotoIndex = _b[1];
    var _c = react.useState(false), isOpenLightBox = _c[0], setIsOpenLightBox = _c[1];
    var _d = react.useState([]), imageListLightBox = _d[0], setImageListLightBox = _d[1];
    var nameInput = react.useState("inputFile" + props.categoryId)[0];
    var onClickUpload = function () {
        if (imageList.length >= IMAGE_LIMIT) {
            _window$1.showPropzyAlertPopupGeneral("\u0110\u00E3 \u0111\u1EA1t gi\u1EDBi h\u1EA1n " + IMAGE_LIMIT + " h\u00ECnh \u1EA3nh");
            return;
        }
        _window$1.document.getElementById(nameInput).click();
    };
    var onFileChange = function (e) {
        var filesData = e.target.files;
        var promiseUpload = [];
        var lengthImageList = imageList ? imageList.length : 0;
        var lengthImageRemain = IMAGE_LIMIT - lengthImageList;
        var lengthFilesData = filesData.length;
        var filesDataToUpload = filesData;
        if (lengthFilesData > lengthImageRemain) {
            filesDataToUpload = __spreadArray([], filesData).splice(0, lengthImageRemain);
        }
        __spreadArray([], filesDataToUpload).forEach(function (itemFile) { return __awaiter(void 0, void 0, void 0, function () {
            var dataPost;
            return __generator(this, function (_a) {
                dataPost = new FormData();
                dataPost.append("file", itemFile);
                dataPost.append("type", "listing");
                dataPost.append("source", "dashboard");
                promiseUpload.push(axios.post(_window$1.baseUploadApiPublic + "upload", dataPost));
                return [2 /*return*/];
            });
        }); });
        _window$1.showPropzyLoadingBPO();
        try {
            // get promise all image upload
            Promise.all(promiseUpload).then(function (values) {
                var isErrUpload = false;
                var newListImage = __spreadArray([], imageList, true);
                var newListImageLightBox = __spreadArray([], imageListLightBox, true);
                values.forEach(function (itemFile) {
                    if (itemFile && itemFile.data.result) {
                        var largeLinkArr = itemFile.data.data.link.split("large");
                        var originLargeLink_1 = "";
                        largeLinkArr.forEach(function (itemLink, indexLink) {
                            if (indexLink == 0) {
                                originLargeLink_1 = itemLink + "origin";
                            }
                            else
                                originLargeLink_1 += itemLink;
                        });
                        newListImage = __spreadArray(__spreadArray([], newListImage, true), [
                            {
                                link: originLargeLink_1,
                                isPrivate: false,
                                source: "dashboard",
                                isApproved: true,
                            },
                        ], false);
                        newListImageLightBox = __spreadArray(__spreadArray([], newListImageLightBox, true), [originLargeLink_1], false);
                    }
                    else {
                        isErrUpload = true;
                    }
                    // reset cache upload image
                    _window$1.document.getElementById(nameInput).value = "";
                });
                setImageList(newListImage);
                setImageListLightBox(newListImageLightBox);
                _window$1.hidePropzyLoadingBPO();
                if (isErrUpload) {
                    _window$1.showPropzyAlertPopupGeneral("Đã có lỗi trong khi upload hình. Xin vui lòng thử lại");
                }
            });
        }
        catch (e) {
            console.error(e);
        }
    };
    var removeImage = function (e, item) {
        e.stopPropagation();
        setImageList(imageList.filter(function (itemList) { return itemList.link != item.link; }));
        setImageListLightBox(imageListLightBox.filter(function (itemListLighBox) { return itemListLighBox != item.link; }));
    };
    react.useEffect(function () {
        props.onHandleChangeImage(imageList, props.categoryId);
    }, [imageList]);
    var renderLightBox = function (index) {
        setPhotoIndex(index);
        setIsOpenLightBox(true);
    };
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("div", __assign({ className: "image-item-container" }, { children: [jsxRuntime.jsxs("div", __assign({ className: "block-upload" }, { children: [jsxRuntime.jsxs("div", { children: [props.categoryName, " ", props.requiredTextInput && jsxRuntime.jsx("span", __assign({ className: "red" }, { children: "*" }), void 0)] }, void 0), props.showPhoto && (jsxRuntime.jsxs("a", __assign({ className: "add-images-files", onClick: onClickUpload }, { children: [jsxRuntime.jsx("i", { className: "fa fa-camera", "aria-hidden": "true" }, void 0), "Th\u00EAm \u1EA3nh", jsxRuntime.jsx("input", { type: "file", className: "hidden", id: nameInput, multiple: true, name: "files[]", onChange: function (e) {
                                            onFileChange(e);
                                        } }, void 0)] }), void 0))] }), void 0), jsxRuntime.jsx("div", __assign({ className: "block-image" }, { children: imageList.map(function (item, index) {
                            return (jsxRuntime.jsxs("div", __assign({ onClick: function () { return renderLightBox(index); }, className: "image" }, { children: [jsxRuntime.jsx("img", { src: item.link || "", alt: "" }, void 0), jsxRuntime.jsx("span", __assign({ onClick: function (e) { return removeImage(e, item); } }, { children: "X" }), void 0)] }), item.link || ""));
                        }) }), void 0)] }), void 0), isOpenLightBox && (jsxRuntime.jsx(Lightbox, { mainSrc: imageListLightBox[photoIndex], nextSrc: imageListLightBox[(photoIndex + 1) % imageListLightBox.length], prevSrc: imageListLightBox[(photoIndex + imageListLightBox.length - 1) %
                    imageListLightBox.length], onCloseRequest: function () { return setIsOpenLightBox(false); }, onMovePrevRequest: function () {
                    return setPhotoIndex((photoIndex + imageListLightBox.length - 1) %
                        imageListLightBox.length);
                }, onMoveNextRequest: function () {
                    return setPhotoIndex((photoIndex + 1) % imageListLightBox.length);
                } }, void 0))] }, void 0));
};

var _window$2 = window.window;
var PriceTags = function (props) {
    var _a = react.useState(props.tags), tags = _a[0], setTags = _a[1];
    var _b = react.useState(props.suggestions), suggestions = _b[0], setSuggestions = _b[1];
    var _c = react.useState(tags.length | 0), setTotal = _c[1];
    var _d = react.useState([]), defaultTags = _d[0], setDefaultTags = _d[1];
    react.useEffect(function () {
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
                        return [4 /*yield*/, axios(configDefaultTag)];
                    case 1:
                        res = _a.sent();
                        tagsTemp_1 = __spreadArray([], defaultTags);
                        res.data.data.forEach(function (item) {
                            var temp = { id: "", name: item.displayContent };
                            tagsTemp_1.push(temp);
                        });
                        setDefaultTags(tagsTemp_1);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log("error", error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        fetchData();
    }, []);
    react.useEffect(function () {
        setTotal(tags.length);
        props.onHandleChange(tags, props.categoryId);
    }, []);
    react.useEffect(function () {
        setTotal(tags.length);
        props.onHandleChange(tags, props.categoryId);
    }, [tags, suggestions]);
    react.useEffect(function () {
        if (!___default.isEmpty(props.suggestions)) {
            setSuggestions(props.suggestions);
        }
    }, [props.suggestions]);
    var onAddTag = function (tag) {
        var tagIsTrim = __assign(__assign({}, tag), { name: tag.name.trim() });
        if (tags.length >= 50) {
            return;
        }
        if (!___default.find(tags, tagIsTrim) && !___default.isEmpty(tagIsTrim.name)) {
            setTags(__spreadArray(__spreadArray([], tags), [tagIsTrim]));
            ___default.remove(suggestions, function (element) {
                return element.name == tag.name;
            });
        }
    };
    var onDeleteTag = function (i) {
        var tagsTmp = tags.slice(0);
        console.log("i", i);
        if (___default.isNumber(i) && i >= 0 && ___default.isNumber(tagsTmp[i].id)) {
            setSuggestions(__spreadArray(__spreadArray([], suggestions), [tagsTmp[i]]));
        }
        tagsTmp.splice(i, 1);
        setTags(tagsTmp);
    };
    var inputAttributes = {
        maxLength: 500,
        disabled: !props.allowChange,
    };
    var tagComponent = function (props) {
        return (jsxRuntime.jsxs("button", __assign({ disabled: true, className: "tag-comment" }, { children: [jsxRuntime.jsx("span", __assign({ className: "tag-comment__title" }, { children: props.tag.name }), void 0), jsxRuntime.jsx("span", __assign({ className: "tag-comment__icon", onClick: props.onDelete }, { children: jsxRuntime.jsx(reactFontawesome.FontAwesomeIcon, { icon: freeSolidSvgIcons.faTimes }, void 0) }), void 0)] }), void 0));
    };
    var onHandChangeTextArea = function (e) {
        console.log("e", e.target.value);
        var tags = [
            {
                id: "",
                name: e.target.value,
            },
        ];
        if (___default.isEmpty(e.target.value)) {
            tags = [];
        }
        setTags(tags);
        props.onHandleChange(tags, props.categoryId);
    };
    var onHandleSuggestionsTransform = function (query, suggestions) {
        var filteredSuggestions = ___default.filter(suggestions, function (item) {
            return (removeAccents(item.name).toLowerCase().includes(query.toLowerCase()) ||
                item.name.toLowerCase().includes(query.toLowerCase()));
        });
        return filteredSuggestions;
    };
    react.useEffect(function () {
        $(".react-tags__search-input").on("keyup", function (e) {
            if ((e.which == 40 || e.which == 38) &&
                _window$2.document.getElementById("ReactTags") != undefined) {
                _window$2.document.getElementById("ReactTags").scrollTop = 0;
                var offsetItem = _window$2.document.getElementsByClassName("is-active")[0].offsetTop +
                    _window$2.document.getElementsByClassName("is-active")[0].offsetHeight;
                _window$2.document.getElementById("ReactTags").scrollTop =
                    offsetItem - _window$2.document.getElementById("ReactTags").offsetHeight;
            }
        });
    }, []);
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("div", __assign({ className: "pricetag" }, { children: [jsxRuntime.jsx("div", __assign({ className: "pricetag__header" }, { children: jsxRuntime.jsxs("div", { children: ["Gi\u00E1 ", props.requiredTextInput && jsxRuntime.jsx("span", __assign({ className: "red" }, { children: "*" }), void 0)] }, void 0) }), void 0), jsxRuntime.jsx("div", __assign({ className: "pricetag__tags" }, { children: props.dataTypeTextInput === "Tag" ? (jsxRuntime.jsx("div", __assign({ className: "input-tags-comment", id: props.id, style: { pointerEvents: props.allowChange ? "auto" : "none" } }, { children: jsxRuntime.jsx(ReactTags, { addOnBlur: true, allowBackspace: true, allowNew: true, delimiters: ["Enter", "Tab", "."], onAddition: onAddTag, onDelete: onDeleteTag, inputAttributes: inputAttributes, minQueryLength: 1, 
                            // noSuggestionsText={props.noSuggestionsText}
                            placeholderText: ___default.isEmpty(tags) ? props.placeholderText : "", suggestions: suggestions, tagComponent: tagComponent, tags: tags, maxSuggestionsLength: 100, suggestionsTransform: onHandleSuggestionsTransform }, void 0) }), void 0)) : (jsxRuntime.jsx("textarea", { className: "text-area-comment", placeholder: ___default.isEmpty(tags) ? props.placeholderText : "", id: props.id, rows: 4, onChange: function (e) { return onHandChangeTextArea(e); } }, void 0)) }), void 0), jsxRuntime.jsx("div", __assign({ className: "pricetag__defaultTags" }, { children: defaultTags.map(function (val) { return (jsxRuntime.jsx("button", __assign({ type: "button", className: tags.find(function (tag) { return tag.name === val.name; })
                            ? "pricetag__btn active"
                            : "pricetag__btn", onClick: function () { return onAddTag(val); } }, { children: val.name }), void 0)); }) }), void 0)] }), void 0) }, void 0));
};

var transformWithKeyMap = function (array, keyMap) {
    return array.map(function (obj) {
        return ___default.mapKeys(obj, function (_value, key) {
            return keyMap[key];
        });
    });
};
var transformSuggestionToTag = function (array, keyMap) {
    return array.map(function (obj) {
        return {
            categoryId: obj.categoryId,
            comments: obj.comments.map(function (obj2) {
                delete obj2.commentUsed;
                delete obj2.createdDate;
                delete obj2.unsignedComment;
                return ___default.mapKeys(obj2, function (_value, key) {
                    return keyMap[key];
                });
            }),
        };
    });
};

var CommentView = function (props) {
    var onDataChange = props.onDataChange, onCommentPriceTagChange = props.onCommentPriceTagChange;
    var _a = react.useState(props.categoryConfigData), dataTransformCategories = _a[0], setDataTransformCategories = _a[1];
    var _b = react.useState([]), requestPriceTag = _b[0], setRequestPriceTag = _b[1];
    var _c = react.useState([]), requestCategories = _c[0], setRequestCategories = _c[1];
    react.useEffect(function () {
        onDataChange(requestCategories);
    }, [requestCategories]);
    react.useEffect(function () {
        onCommentPriceTagChange(requestPriceTag);
    }, [requestPriceTag]);
    react.useEffect(function () {
        if (!_.isEmpty(props.commentSuggestionResponse) &&
            !_.isEmpty(props.categoryConfigData)) {
            //Transform data: from suggestion format to tag format
            var keyMapSuggestionToTag = {
                id: "id",
                comment: "name",
            };
            var suggestionToTags_1 = transformSuggestionToTag(props.commentSuggestionResponse, keyMapSuggestionToTag);
            // Merge suggestion to configure
            var commentWithConfigureAndTags = props.categoryConfigData.map(function (configure) { return (__assign(__assign({}, configure), suggestionToTags_1.find(function (suggestion) { return suggestion.categoryId === configure.categoryId; }))); });
            setDataTransformCategories(commentWithConfigureAndTags);
            // Set default request comment (categoryId and tags)
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
        else if (!_.isEmpty(props.categoryConfigData)) {
            // Set default request comment (categoryId and tags)
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
        if (!_.isEmpty(requestCategories)) {
            var requestCategoriesTmp = __spreadArray([], requestCategories);
            var tagsToSuggestion = transformWithKeyMap(tags, keyMap);
            tagsToSuggestion.map(function (item) {
                if (item.id === "" || !_.isNumber(item.id)) {
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
        if (!_.isEmpty(requestCategories)) {
            var requestCategoriesTmp = __spreadArray([], requestCategories);
            requestCategoriesTmp.find(function (item) { return item.categoryId === categoryId; }).photos = imageList;
            setRequestCategories(requestCategoriesTmp);
        }
    };
    return (jsxRuntime.jsx("div", __assign({ className: "comment-container" }, { children: jsxRuntime.jsx("div", __assign({ className: "comment-container__item" }, { children: dataTransformCategories.map(function (category, index) {
                return category.categoryId === 28 ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [category.showTextInput && (jsxRuntime.jsx(PriceTags, { id: category.categoryId.toString(), showLimit: true, placeholderText: category.placeHolderTextInput, allowChange: true, tags: [], suggestions: category.comments ? category.comments : [], onHandleChange: onHandleChangeTag, noSuggestionsText: "Kh\u00F4ng c\u00F3 d\u1EEF li\u1EC7u", categoryId: category.categoryId, requiredTextInput: category.requiredTextInput, dataTypeTextInput: category.dataTypeTextInput }, void 0)), props.errorsConfig.length > 0 &&
                            props.errorsConfig[index].errorInput && (jsxRuntime.jsx("p", __assign({ className: "title-red" }, { children: "Vui l\u00F2ng nh\u1EADp n\u1ED9i dung" }), void 0))] }, void 0)) : (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(ImageItem, { onHandleChangeImage: onHandleChangeImage, categoryId: category.categoryId, showPhoto: category.showPhoto, requiredTextInput: category.requiredTextInput, categoryName: category.categoryName }, void 0), props.errorsConfig.length > 0 &&
                            props.errorsConfig[index].errorImage && (jsxRuntime.jsx("p", __assign({ className: "title-red" }, { children: "Vui l\u00F2ng th\u00EAm h\u00ECnh \u1EA3nh" }), void 0)), category.showTextInput && (jsxRuntime.jsx(InputTags, { id: category.categoryId.toString(), showLimit: true, placeholderText: category.placeHolderTextInput, allowChange: true, tags: [], suggestions: category.comments ? category.comments : [], onHandleChange: onHandleChangeTag, noSuggestionsText: "Kh\u00F4ng c\u00F3 d\u1EEF li\u1EC7u", categoryId: category.categoryId, requiredTextInput: category.requiredTextInput, dataTypeTextInput: category.dataTypeTextInput }, void 0)), props.errorsConfig.length > 0 &&
                            props.errorsConfig[index].errorInput && (jsxRuntime.jsx("p", __assign({ className: "title-red" }, { children: "Vui l\u00F2ng nh\u1EADp n\u1ED9i dung" }), void 0))] }, void 0));
            }) }), void 0) }), void 0));
};
var CommentView$1 = react.memo(CommentView);

exports.CommentView = CommentView$1;
//# sourceMappingURL=index.ts.map
