/// <reference types="react" />
import "components/InputTags/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
interface ITag {
    id: string | number;
    name: string;
}
interface ISuggestion {
    id: string | number;
    name: string;
}
declare type InputTagsProps = {
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
export declare const InputTags: (props: InputTagsProps) => JSX.Element;
export {};
