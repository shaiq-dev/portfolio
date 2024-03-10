import React from 'react'
import styled from 'styled-components'

import CameraIcon from 'assets/icons/camera.svg'
import SendIcon from 'assets/icons/send.svg'
import { AppStrings } from '../constants'

const Followup = () => {
  return (
    <div className="with-section-gap">
      <FollowUpContainer>
        <FormWrapper>
          <Input placeholder={AppStrings.FOLLOW_UP_INPUT_PLACEHOLDER} />
          <div className="d-flex items-center h-full">
            <IconWrapper $size="100%" $color="#0b57d0">
              <CameraIcon />
            </IconWrapper>
            <IconWrapper $size="18px" $color="#7d8b9a">
              <SendIcon />
            </IconWrapper>
          </div>
        </FormWrapper>
      </FollowUpContainer>
      <Feedback>
        <div />
        <span>Feedback</span>
      </Feedback>
    </div>
  )
}

export default Followup

const FollowUpContainer = styled.div`
  width: auto;
  max-width: 632px;
  padding: 14px 0 10px;
`

const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  flex: 1;
  background: rgba(245, 248, 255, 0.5);
  border: 1px solid var(--blue-4);
  border-radius: 24px 4px 24px 24px;
  overflow: hidden;
  padding: 0 16px;
  transition: max-width 450ms cubic-bezier(0.05, 0.7, 0.1, 1);
`

const Input = styled.input`
  flex-grow: 1;
  height: 46px;
  border: 0;
  outline: 0;
  background-color: inherit;
  padding: 10px 0;
  font-size: 16px;
  line-height: 20px;
  font-family: var(--font-heading);
  color: #001d35;
  font-weight: 400;
`

const IconWrapper = styled.div<{ $size: string; $color: string }>`
  height: 20px;
  width: 20px;
  /* color: #0b57d0; */
  color: ${(props) => props.$color};
  fill: currentColor;
  line-height: 24px;
  display: inline-block;
  margin: 0px 8px;

  > svg {
    width: ${(props) => props.$size};
    height: ${(props) => props.$size};
  }
`

// const SendIconWrapper = styled(CameraIconWrapper)`
//   color: #7d8b9a;

//   > svg {
//     width: 18px;
//     height: 18px;
//   }
// `

const Feedback = styled.div`
  display: flex;
  align-items: center;
  height: 16px;
  color: var(--gray-2);
  font-size: 12px;

  > div {
    background: #dadce0;
    height: 1px;
    width: 100%;
  }

  > span {
    margin-left: 14px;
  }
`
