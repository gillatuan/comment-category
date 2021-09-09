"use strict";
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
exports.ImageItem = void 0;
var react_1 = __importStar(require("react"));
var react_image_lightbox_1 = __importDefault(require("react-image-lightbox"));
var axios_1 = __importDefault(require("axios"));
var index_1 = require("../../constants/index");
require("react-image-lightbox/style.css");
var _window = window.window;
var ImageItem = function (props) {
    var _a = (0, react_1.useState)([]), imageList = _a[0], setImageList = _a[1];
    var _b = (0, react_1.useState)(0), photoIndex = _b[0], setPhotoIndex = _b[1];
    var _c = (0, react_1.useState)(false), isOpenLightBox = _c[0], setIsOpenLightBox = _c[1];
    var _d = (0, react_1.useState)([]), imageListLightBox = _d[0], setImageListLightBox = _d[1];
    var nameInput = (0, react_1.useState)("inputFile" + props.categoryId)[0];
    var onClickUpload = function () {
        if (imageList.length >= index_1.IMAGE_LIMIT) {
            _window.showPropzyAlertPopupGeneral("\u0110\u00E3 \u0111\u1EA1t gi\u1EDBi h\u1EA1n 122 " + index_1.IMAGE_LIMIT + " h\u00ECnh \u1EA3nh");
            return;
        }
        _window.document.getElementById(nameInput).click();
    };
    var onFileChange = function (e) {
        var filesData = e.target.files;
        var promiseUpload = [];
        var lengthImageList = imageList ? imageList.length : 0;
        var lengthImageRemain = index_1.IMAGE_LIMIT - lengthImageList;
        var lengthFilesData = filesData.length;
        var filesDataToUpload = filesData;
        if (lengthFilesData > lengthImageRemain) {
            filesDataToUpload = __spreadArray([], filesData, true).splice(0, lengthImageRemain);
        }
        ;
        __spreadArray([], filesDataToUpload, true).forEach(function (itemFile) { return __awaiter(void 0, void 0, void 0, function () {
            var dataPost;
            return __generator(this, function (_a) {
                dataPost = new FormData();
                dataPost.append("file", itemFile);
                dataPost.append("type", "listing");
                dataPost.append("source", "dashboard");
                promiseUpload.push(axios_1.default.post(_window.baseUploadApiPublic + "upload", dataPost));
                return [2];
            });
        }); });
        _window.showPropzyLoadingBPO();
        try {
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
                    _window.document.getElementById(nameInput).value = "";
                });
                setImageList(newListImage);
                setImageListLightBox(newListImageLightBox);
                _window.hidePropzyLoadingBPO();
                if (isErrUpload) {
                    _window.showPropzyAlertPopupGeneral("Đã có lỗi trong khi upload hình. Xin vui lòng thử lại");
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
    (0, react_1.useEffect)(function () {
        props.onHandleChangeImage(imageList, props.categoryId);
    }, [imageList]);
    var renderLightBox = function (index) {
        setPhotoIndex(index);
        setIsOpenLightBox(true);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "image-item-container" },
            react_1.default.createElement("div", { className: "block-upload" },
                react_1.default.createElement("div", null,
                    props.categoryName,
                    " ",
                    props.requiredTextInput && react_1.default.createElement("span", { className: "red" }, "*")),
                props.showPhoto && (react_1.default.createElement("a", { className: "add-images-files", onClick: onClickUpload },
                    react_1.default.createElement("i", { className: "fa fa-camera", "aria-hidden": "true" }),
                    "Th\u00EAm \u1EA3nh",
                    react_1.default.createElement("input", { type: "file", className: "hidden", id: nameInput, multiple: true, name: "files[]", onChange: function (e) {
                            onFileChange(e);
                        } })))),
            react_1.default.createElement("div", { className: "block-image" }, imageList.map(function (item, index) {
                return (react_1.default.createElement("div", { onClick: function () { return renderLightBox(index); }, className: "image", key: item.link || "" },
                    react_1.default.createElement("img", { src: item.link || "", alt: "" }),
                    react_1.default.createElement("span", { onClick: function (e) { return removeImage(e, item); } }, "X")));
            }))),
        isOpenLightBox && (react_1.default.createElement(react_image_lightbox_1.default, { mainSrc: imageListLightBox[photoIndex], nextSrc: imageListLightBox[(photoIndex + 1) % imageListLightBox.length], prevSrc: imageListLightBox[(photoIndex + imageListLightBox.length - 1) %
                imageListLightBox.length], onCloseRequest: function () { return setIsOpenLightBox(false); }, onMovePrevRequest: function () {
                return setPhotoIndex((photoIndex + imageListLightBox.length - 1) %
                    imageListLightBox.length);
            }, onMoveNextRequest: function () {
                return setPhotoIndex((photoIndex + 1) % imageListLightBox.length);
            } }))));
};
exports.ImageItem = ImageItem;
//# sourceMappingURL=ImageItem.js.map