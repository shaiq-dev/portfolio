import { css } from 'styled-components'

import {
  ConnectCenterColumn,
  ConnectContainer,
  ConnectSubHeading,
} from 'styles/_pages.styled'
import Heading from 'components/Heading'
import { AppStrings } from 'constants/index'
import ConnectForm from 'components/ConnectForm'

export default function Connect() {
  return (
    <ConnectContainer>
      <ConnectCenterColumn>
        <Heading
          gradient={{ from: 'var(--green-1)', to: 'var(--blue-2)' }}
          extraCss={css`
            margin: 36px 0px 24px;
          `}
        >
          {AppStrings.CONNECT_PAGE_HEADING}
        </Heading>
        <ConnectSubHeading>
          {AppStrings.CONNECT_PAGE_SUB_HEADING}
        </ConnectSubHeading>
        <ConnectForm />
      </ConnectCenterColumn>
    </ConnectContainer>
  )
}
