import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  max-width: calc(
    var(--center-abs-margin) + var(--center-width) + var(--r-margin) +
      var(--r-width)
  );
`

export const PageCenterColumn = styled.div`
  width: var(--center-width);
  position: relative;
  margin-left: var(--center-abs-margin);
  flex: 0 auto;
`

export const PageRightColumn = styled.div`
  margin-left: var(--r-margin);
  flex: 0 auto;
  width: 369px;
  position: relative;
  padding-bottom: 15px;
  transition: opacity 0.3s;
`
