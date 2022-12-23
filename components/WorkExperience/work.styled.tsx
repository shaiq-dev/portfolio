import styled from 'styled-components'

export const WorkExpContainer = styled.div`
  margin: 6px 0px 44px;
  font-size: 14px;
  color: var(--gray-3);
  line-height: var(--lh-norm);

  .experience {
    &__sub {
      font-size: 14px;
      line-height: 1.3;
      padding: 2px 0;
      color: #202124;
      display: block;
    }

    &__heading {
      display: inline-block;
      line-height: 1.3;
      margin-bottom: 3px;
      font-size: 20px;
      font-weight: 400;
      color: var(--blue);
      padding-top: 5px;
    }

    &__list {
      margin-left: 15px;

      &--position {
        padding: 8px 6px 8px 0px;
        &:nth-child(1) {
          padding-top: 16px;
        }
      }
    }
  }
`
