/// <reference types="react" />
import "bootstrap/dist/css/bootstrap.min.css";
import "components/Pricetags/Pricetags.scss";
interface ITag {
    id: string | number;
    name: string;
}
interface ISuggestion {
    id: string | number;
    name: string;
}
declare type PriceTagsProps = {
    className?: string | null;
    id: string;
    allowChange: boolean;
    placeholderText?: string;
    showLimit: boolean;
    tags: ITag[];
    suggestions: ISuggestion[];
    noSuggestionsText?: string;
    categoryId: number;
    requiredTextInput?: boolean;
    dataTypeTextInput: string;
    onHandleChange: (tags: ITag[], categoryId: number) => void;
};
export declare const PriceTags: (props: PriceTagsProps) => JSX.Element;
export {};
