import styled from 'styled-components'

export const WorkExpContainer = styled.div`
  margin: 6px 0px 44px;
  font-size: 14px;
  color: var(--gray-3);
  line-height: var(--lh-norm);
`

export const WorkExpSubTitle = styled.div`
  font-size: 14px;
  line-height: 1.3;
  padding: 2px 0;
  color: var(--text-heading);
  display: block;
`

export const WorkExpTitle = styled.div`
  display: inline-block;
  line-height: 1.3;
  margin-bottom: 3px;
  font-size: 20px;
  font-weight: 400;
  color: var(--blue-1);
  padding-top: 5px;
`

export const WorkExpCompanyPositionList = styled.div`
  margin-left: 15px;
`

export const WorkExpCompanyPosition = styled.div`
  padding: 8px 6px 8px 0px;

  &:nth-child(1) {
    padding-top: 16px;
  }
`
