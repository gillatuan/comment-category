import _ from 'lodash';
export declare const transformWithKeyMap: (array: any[], keyMap: {
    [x: string]: any;
}) => _.Dictionary<any>[];
export declare const transformSuggestionToTag: (array: any[], keyMap: {
    [x: string]: any;
}) => {
    categoryId: any;
    comments: any;
}[];
