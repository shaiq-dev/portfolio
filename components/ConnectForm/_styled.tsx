import styled, { css } from 'styled-components'

export const ConnectFormContainer = styled.form`
  width: 517px;
  padding-bottom: 36px;
`

export const ConnectFormFieldGroup = styled.div`
  display: flex;
  column-gap: 24px;
  flex-wrap: wrap;
  align-items: center;
`

export const ConnectFormApiMessage = styled.div<{ $isError?: boolean }>`
  display: flex;
  align-items: center;
  column-gap: 4px;
  color: var(--green-1);

  ${(props) =>
    props.$isError &&
    css`
      color: var(--red-1);
    `}
`
