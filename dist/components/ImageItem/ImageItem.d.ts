/// <reference types="react" />
import "components/ImageItem/ImageItem.scss";
import "react-image-lightbox/style.css";
declare type ImageItemProp = {
    categoryId: string | number;
    showPhoto: boolean;
    requiredTextInput: boolean;
    onHandleChangeImage: Function;
    categoryName: string;
};
export declare const ImageItem: (props: ImageItemProp) => JSX.Element;
export {};
