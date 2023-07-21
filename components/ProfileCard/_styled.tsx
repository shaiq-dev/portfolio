import styled from 'styled-components'

export const ProfileCardContainer = styled.div`
  background: var(--bg-primary);
  margin: 6px 0 0 1px;
  border-radius: 8px;
  padding-bottom: 16px;
  line-height: var(--lh-norm);
  font-size: 14px;
  border: 1px solid var(--gray-1);

  .profile-card-section {
    padding: 0 15px;

    &-title {
      font-size: 18px;
      line-height: 24px;
      margin-top: 24px;
      font-family: var(--font-heading);
    }
  }
`

export const ProfileCardHeader = styled.div`
  display: flex;
  align-items: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  overflow: hidden;
  border-bottom: 1px solid var(--gray-1);
`

export const ProfileCardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding: 12px 15px;

  span {
    color: var(--gray-2);
    overflow: hidden;
    margin: 4px 0;
    display: inline-block;
  }
`

export const ProfileCardAvatar = styled.div`
  display: flex;
  align-items: center;
  min-height: 160px;
  max-width: 160px;

  .img {
    height: 100%;
    margin: 16px;
  }
`

export const ProfileCardResume = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding: 8px 0px;
  line-height: var(--lh-norm);

  .icon {
    color: var(--gray-2);
    margin-left: 15px;
    margin-right: 24px;
    vertical-align: middle;
    display: inline-block;
    fill: currentColor;
    height: 24px;
    width: 24px;
  }
`

export const ProfileCardBio = styled.div`
  padding: 0 15px;
  overflow: hidden;
  margin: 13px 0 6px;
  color: var(--gray-3);
`

export const SocialsProfileList = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px -8px -10px -8px;
`

export const SocialsProfileListItem = styled.div`
  padding: 0px 8px 10px 8px;
  width: 72px;
  display: inline-block;
  line-height: 1.29;

  .icon > svg {
    width: 32px;
    height: 32px;
  }
`
