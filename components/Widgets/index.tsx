import { AppBarContainer } from './widgets.styled'

type AppBarProps = {
  commits: number
}

export const AppBar = ({ commits }: AppBarProps) => {
  return (
    <AppBarContainer>
      <span>About {commits} commits</span>
    </AppBarContainer>
  )
}
