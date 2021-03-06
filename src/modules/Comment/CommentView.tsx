import React, { memo, useEffect, useState } from "react"
import { isEmpty, isNumber } from "lodash"

import { InputTags } from "../../components/InputTags"
import { ImageItem } from "../../components/ImageItem/ImageItem"
import { PriceTags } from "../../components/Pricetags/PriceTags"

import { Category } from "../../model/core-model/Config"

import {
  transformWithKeyMap,
  transformSuggestionToTag,
} from "../../utils/transform"

import { CommentProps } from './CommentView.d'
// import "./comment.scss"

export const CommentView = (props: CommentProps) => {
  const { onDataChange, onCommentPriceTagChange } = props
  const [dataTransformCategories, setDataTransformCategories] = useState<any[]>(
    props.categoryConfigData
  )

  const [requestPriceTag, setRequestPriceTag] = useState<any[]>([])
  const [requestCategories, setRequestCategories] = useState<any[]>([])
  useEffect(() => {
    onDataChange(requestCategories)
  }, [requestCategories])

  useEffect(() => {
    onCommentPriceTagChange(requestPriceTag)
  }, [requestPriceTag])

  useEffect(() => {
    if (
      !isEmpty(props.commentSuggestionResponse) &&
      !isEmpty(props.categoryConfigData)
    ) {
      //Transform data: from suggestion format to tag format
      const keyMapSuggestionToTag = {
        id: "id",
        comment: "name",
      }
      const suggestionToTags = transformSuggestionToTag(
        props.commentSuggestionResponse,
        keyMapSuggestionToTag
      )

      // Merge suggestion to configure
      const commentWithConfigureAndTags = props.categoryConfigData.map(
        (configure) => ({
          ...configure,
          ...suggestionToTags.find(
            (suggestion) => suggestion.categoryId === configure.categoryId
          ),
        })
      )
      setDataTransformCategories(commentWithConfigureAndTags)

      // Set default request comment (categoryId and tags)
      let requestCommentTmp: Category[] = []
      commentWithConfigureAndTags.forEach((category: any) => {
        let categoryTmp: Category = {
          categoryId: category.categoryId,
          photos: [],
          comments: [],
        }
        requestCommentTmp.push(categoryTmp)
      })

      setRequestCategories(requestCommentTmp)
    } else if (!isEmpty(props.categoryConfigData)) {
      // Set default request comment (categoryId and tags)
      let requestCommentTmp: Category[] = []
      props.categoryConfigData.forEach((categoryConfigItem: any) => {
        let categoryTmp: Category = {
          categoryId: categoryConfigItem.categoryId,
          photos: [],
          comments: [],
        }
        requestCommentTmp.push(categoryTmp)
      })

      setRequestCategories(requestCommentTmp)
    }
  }, [props.commentSuggestionResponse, props.categoryConfigData])

  const onHandleChangeTag = (tags: any, categoryId: number) => {
    const keyMap = {
      id: "id",
      name: "comment",
    }
    if (!isEmpty(requestCategories)) {
      const requestCategoriesTmp = [...requestCategories]
      const tagsToSuggestion = transformWithKeyMap(tags, keyMap)

      tagsToSuggestion.map((item) => {
        if (item.id === "" || !isNumber(item.id)) {
          return (item.id = null)
        }

        return item
      })

      if (categoryId === 28) {
        const tempDataPriceTag: any[] = []

        tagsToSuggestion.map((item) => {
          const tempTag = { content: item.comment }
          tempDataPriceTag.push(tempTag)
        })

        setRequestPriceTag(tempDataPriceTag)
      }

      requestCategoriesTmp.find(
        (item) => item.categoryId === categoryId
      ).comments = tagsToSuggestion
      setRequestCategories(requestCategoriesTmp)
    }
  }

  const onHandleChangeImage = (imageList: any, categoryId: number) => {
    if (!isEmpty(requestCategories)) {
      const requestCategoriesTmp = [...requestCategories]
      requestCategoriesTmp.find(
        (item) => item.categoryId === categoryId
      ).photos = imageList
      setRequestCategories(requestCategoriesTmp)
    }
  }

  return (
    <div className="comment-container">
      <div className="comment-container__item">
        {dataTransformCategories.map((category, index) => {
          return category.categoryId === 28 ? (
            <>
              {category.showTextInput && (
                <PriceTags
                  id={category.categoryId.toString()}
                  showLimit={true}
                  placeholderText={category.placeHolderTextInput}
                  allowChange={true}
                  tags={[]}
                  suggestions={category.comments ? category.comments : []}
                  onHandleChange={onHandleChangeTag}
                  noSuggestionsText="Kh??ng c?? d??? li???u"
                  categoryId={category.categoryId}
                  requiredTextInput={category.requiredTextInput}
                  dataTypeTextInput={category.dataTypeTextInput}
                />
              )}
              {props.errorsConfig.length > 0 &&
                props.errorsConfig[index].errorInput && (
                  <p className="title-red">Vui l??ng nh???p n???i dung</p>
                )}
            </>
          ) : (
            <>
              <ImageItem
                onHandleChangeImage={onHandleChangeImage}
                categoryId={category.categoryId}
                showPhoto={category.showPhoto}
                requiredTextInput={category.requiredTextInput}
                categoryName={category.categoryName}
              />
              {props.errorsConfig.length > 0 &&
                props.errorsConfig[index].errorImage && (
                  <p className="title-red">Vui l??ng th??m h??nh ???nh</p>
                )}
              {category.showTextInput && (
                <InputTags
                  id={category.categoryId.toString()}
                  showLimit={true}
                  placeholderText={category.placeHolderTextInput}
                  allowChange={true}
                  tags={[]}
                  suggestions={category.comments ? category.comments : []}
                  onHandleChange={onHandleChangeTag}
                  noSuggestionsText="Kh??ng c?? d??? li???u"
                  categoryId={category.categoryId}
                  requiredTextInput={category.requiredTextInput}
                  dataTypeTextInput={category.dataTypeTextInput}
                />
              )}
              {props.errorsConfig.length > 0 &&
                props.errorsConfig[index].errorInput && (
                  <p className="title-red">Vui l??ng nh???p n???i dung</p>
                )}
            </>
          )
        })}
      </div>
    </div>
  )
}
