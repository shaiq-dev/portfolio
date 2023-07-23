import styled from 'styled-components'

export const TooltipContainer = styled.div`
  background: rgb(45, 45, 45);
  border: 1px solid #fff;
  color: #fff;
  display: block;
  font-size: 11px;
  font-weight: bold;
  height: 29px;
  line-height: 29px;
  padding: 0px 10px;
  position: absolute;
  text-align: center;
  white-space: nowrap;
  visibility: visible;
  z-index: 9999;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px;
  transition: opacity 0.13s ease 0s;
`

export const TooltipArrow = styled.div`
  border-width: 0px 6px 6px;
  border-style: solid;
  border-image: initial;
  content: '';
  position: absolute;
  border-color: #fff transparent;
`

export const TooltipArrowBg = styled(TooltipArrow)`
  border-color: rgb(45, 45, 45) transparent;
  top: 1px;
  left: -6px;
`
