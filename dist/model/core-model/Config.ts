export interface Photo {
  link: string;
  isPrivate: boolean;
  source: string;
  isApproved: boolean;
}

export interface Comment {
  suggestionId: number;
  comment: string;
}

export interface CommentSuggestionResponse {
  categoryId: number;
  comments: Comment[];
}

export interface Category {
  categoryId: number;
  photos: Photo[];
  comments: Comment[];
}

export enum DataTypeTextInput {
  TAG = "Tag",
  TEXT = "Text",
}
export interface CategoryConfig {
  categoryId: number;
  categoryName: string;
  description: string;
  platform: string;
  placeHolderTextInput: string;
  dataTypeTextInput: DataTypeTextInput;
  parentId: number;
  createdBy: string;
  createdDate: number;
  updatedDate: string;
  lsoDraftListingCommentId: number;
  dataTextInputs: string;
  dataPhotos: Photo[] | null;
  comments: Comment[] | null;
  requiredTextInput: boolean;
  requiredTakePhoto: boolean;
  requiredPhoto: boolean;
  showTextInput: boolean;
  showPhoto: boolean;
}