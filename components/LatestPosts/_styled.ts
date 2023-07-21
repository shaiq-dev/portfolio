import styled, { css } from 'styled-components'

export const LatestPostsTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px 12px;
  margin: 0 -16px;

  h2 {
    font-size: 22px;
    line-height: 28px;
    display: block;
  }

  > div {
    margin-top: 4px;
    line-height: 20px;
    font-size: 14px;
    color: var(--gray-2);
  }
`

export const Carousel = styled.div`
  margin: 0 -4px;
  width: auto;
  position: relative;
`

export const CarouselRig = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  position: relative;
  white-space: nowrap;
  transform: translate3d(0, 0, 0);

  &::-webkit-scrollbar {
    display: none;
  }
`

export const CarouselButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #70757a;
  outline: 0;
  border: 0;
  cursor: pointer;
  height: 38px;
  width: 38px;
  border-radius: 999rem;
  position: relative;
  border: 1px solid #dadce0;
  z-index: 0;
`

export const CarouselControl = styled.div<{ $left?: boolean }>`
  position: absolute;
  cursor: pointer;
  display: block;
  bottom: 0;
  z-index: 101;
  height: 36px;
  width: 36px;
  top: -48px;
  right: -14px;
  margin: auto 0;

  ${(props) =>
    props.$left &&
    css`
      right: initial;
      left: -14px;
    `}

  &:hover {
    ${CarouselButton} {
      color: #202124;
      box-shadow: 0 0 0 1px rgb(0 0 0 / 4%), 0 4px 8px 0 rgb(0 0 0 / 20%);
    }
  }
`

export const PostItemContainer = styled.div`
  border-right: 1px solid #ecedef;
  padding: 0 19px 0 0;
  width: 184px;
  margin-left: 20px;
  box-sizing: content-box;

  &:first-of-type {
    margin-left: 4px;
  }
`

export const PostItemTitle = styled.div`
  -webkit-line-clamp: 4;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  white-space: normal;
  color: var(--blue-1);
  font-size: 16px;
  line-height: 24px;
  height: 96px;
`

export const PostItemWrapper = styled.div`
  min-height: 265px;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  &:hover {
    ${PostItemTitle} {
      text-decoration: underline;
    }
  }
`

export const PostItemImage = styled.div`
  height: 119px;
  width: 184px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.03);
    pointer-events: none;
  }
`

export const PostItemContent = styled.div`
  padding-top: 16px;
`

export const PostItemTags = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 8px;
  color: var(--gray-2);
  pointer-events: none;
  text-decoration: none !important;
`

export const PostItemTime = styled.div`
  color: var(--gray-2);
  line-height: 16px;
  margin-top: 8px;
`
