import styled, { css } from 'styled-components'

// Input
export const InputContainer = styled.div`
  --c-error: rgb(217, 48, 37);
  --c-text: rgb(95, 99, 104);

  display: flex;
  flex-direction: column;
  position: relative;
  vertical-align: top;
  margin-bottom: 24px;
`

export const InputLabel = styled.div<{
  $hasError: boolean
  $hasFocus: boolean
}>`
  color: var(--c-text);
  background-color: #fff;
  padding: 0px 5px;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.2px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(100% - 32px);
  position: absolute;
  left: 16px;
  top: -10px;
  z-index: 1;
  pointer-events: auto;
  user-select: none;

  ${(props) =>
    props.$hasFocus &&
    css`
      color: var(--blue-2);
    `}

  ${(props) =>
    props.$hasError &&
    css`
      color: var(--c-error);
    `}
`

export const InputField = styled.input<{ $hasError: boolean }>`
  font-size: 16px;
  letter-spacing: 0.1px;
  line-height: 24px;
  appearance: none;
  color: var(--c-text);
  outline: 0;
  height: 56px;
  -webkit-tap-highlight-color: transparent;
  display: block;
  padding: 16px 14px;
  border-style: solid;
  border-width: 1px;
  border-color: #80868b;
  border-radius: 4px;

  &:hover {
    border-color: rgb(32, 33, 36);
  }

  &:focus {
    border-width: 2px;
    ${(props) =>
      props.$hasError
        ? css`
            border-color: var(--c-error);
          `
        : css`
            border-color: var(--blue-2);
          `}

    ${InputLabel} {
      color: red;
    }
  }

  ${(props) =>
    props.$hasError &&
    css`
      color: var(--c-error);
      border-color: var(--c-error);

      &:hover {
        border-color: var(--c-error);
      }
    `}
`

export const InputError = styled.span`
  display: block;
  margin-top: 4px;
  color: var(--c-error);
  font-size: 12px;
  letter-spacing: 0.2px;
  line-height: 16px;
  padding-left: 21px;
`

// Button
export const ButtonContainer = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-family: var(--font-heading);
  font-weight: 400;
  line-height: 20px;
  border-radius: 4px;
  min-height: 48px;
  padding: 13px 24px 12px;
  transition: background-color 0.2s, box-shadow 0.2s, color 0.2s;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  cursor: pointer;
  color: #fff;
  background-color: var(--blue-2);
  outline: 0;

  &:hover {
    border-color: var(--blue-2);
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
      0 1px 3px 1px rgba(60, 64, 67, 0.15);
  }
`
