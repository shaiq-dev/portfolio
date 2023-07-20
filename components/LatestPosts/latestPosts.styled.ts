import styled from 'styled-components'

export const LatestPostsContainer = styled.div`
  .latest-posts {
    &__heading {
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
    }

    &__carousel {
      margin: 0 -4px;
      width: auto;
      position: relative;

      &--rig {
        overflow-x: auto;
        overflow-y: hidden;
        position: relative;
        white-space: nowrap;
        transform: translate3d(0, 0, 0);

        &::-webkit-scrollbar {
          display: none;
        }
      }

      &--control {
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

        button {
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
        }

        &:hover {
          button {
            color: #202124;
            box-shadow: 0 0 0 1px rgb(0 0 0 / 4%), 0 4px 8px 0 rgb(0 0 0 / 20%);
          }
        }

        &.left {
          right: initial;
          left: -14px;
        }
      }
    }
  }
`

export const LatestPostsItem = styled.div`
  border-right: 1px solid #ecedef;
  padding: 0 19px 0 0;
  width: 184px;
  margin-left: 20px;
  box-sizing: content-box;

  .item {
    /* scroll-snap-align: start; */

    &__container {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    &__wrapper {
      min-height: 265px;
      position: relative;
      display: flex;
      flex-direction: column;
      flex-grow: 1;

      &:hover {
        .item__content--title {
          text-decoration: underline;
        }
      }
    }

    &__image {
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
        background-color: rgba(0, 0, 0, 0.03);
        bottom: 0;
        content: '';
        display: block;
        left: 0;
        pointer-events: none;
        position: absolute;
        right: 0;
        top: 0;
      }
    }

    &__content {
      padding-top: 16px;

      &--tags {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 8px;
        color: var(--gray-2);
        pointer-events: none;
        text-decoration: none !important;
      }

      &--title {
        -webkit-line-clamp: 4;
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        white-space: normal;
        color: var(--blue-1);
        font-size: 16px;
        line-height: 24px;
        height: 96px;
      }

      &--time {
        color: var(--gray-2);
        line-height: 16px;
        margin-top: 8px;
      }
    }
  }

  &:first-of-type {
    margin-left: 4px;
  }
`
