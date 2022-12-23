import styled from 'styled-components'

export const FooterContainer = styled.div`
  height: 106px;
  padding-top: 12px;

  .footer {
    &__wrapper {
      padding: 12px 0px;
      background: #f2f2f2;
      line-height: 40px;
    }

    &__bar {
      border-bottom: 1px solid #dadce0;
      margin-left: -27px;

      &--content {
        margin-left: var(--center-abs-margin);
        color: #70757a;
        padding-left: 27px;
      }

      &--copyright {
        display: inline-block;
        margin-left: 13px;
        padding-left: 16px;
        border-left: 1px solid #dadce0;
        font-weight: 600;
        color: #4d5156;
      }
    }
  }
`
