import styled from 'styled-components'

export type CommitCountProps = {
  count: number
  info: string
}

const CommitCount = ({ count, info }: CommitCountProps) => {
  return (
    <CommitCountLabel>
      <span data-info={info}>About {count} commits</span>
    </CommitCountLabel>
  )
}

export default CommitCount

export const CommitCountLabel = styled.div`
  margin-left: var(--center-abs-margin);
  display: flex;
  align-items: center;
  height: 43px;
  color: var(--gray-2);
  font-family: var(--font-heading);
  transition: all 220ms ease-in-out;
`
