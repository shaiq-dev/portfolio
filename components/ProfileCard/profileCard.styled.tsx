import styled from 'styled-components'

export const ProfileCardContainer = styled.div`
  background: var(--bg-primary);
  margin: 6px 0 0 1px;
  border-radius: 8px;
  padding-bottom: 16px;
  line-height: var(--lh-norm);
  font-size: 14px;
  border: 1px solid var(--gray-1);

  .profile {
    &__header {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      overflow: hidden;
      border-bottom: 1px solid var(--gray-1);

      &--name {
        padding: 12px 15px;

        span {
          color: var(--gray-2);
          overflow: hidden;
          margin: 4px 0;
          display: inline-block;
        }
      }

      &--avatar {
        min-height: 160px;
        max-width: 160px;

        .img {
          height: 100%;
          margin: 16px;
        }
      }
    }

    &__resume {
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);
      padding: 8px 0px;
      line-height: var(--lh-norm);

      &--icon {
        color: var(--gray-2);
        margin-left: 15px;
        margin-right: 24px;
        vertical-align: middle;
        display: inline-block;
        fill: currentColor;
        height: 24px;
        width: 24px;
      }
    }
  }
`

export const ProfileCardSocials = styled.div`
  padding: 0 15px;

  .socials {
    &__heading {
      font-size: 18px;
      line-height: 24px;
      margin-top: 24px;
      font-family: var(--font-heading);
    }

    &__list {
      margin: 10px -8px -10px -8px;
    }

    &__item {
      padding: 0px 8px 10px 8px;
      width: 72px;
      display: inline-block;
      line-height: 1.29;

      &--icon {
        svg {
          width: 32px;
          height: 32px;
        }
      }
    }
  }
`
