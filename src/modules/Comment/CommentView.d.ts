import {
  CategoryConfig,
  CommentSuggestionResponse,
} from "model/core-model/Config"

export type CommentProps = {
  onDataChange: (data: any) => void
  categoryConfigData: CategoryConfig[]
  commentSuggestionResponse: CommentSuggestionResponse[]
  errorsConfig?: any
  onCommentPriceTagChange: (data: any) => void
}
