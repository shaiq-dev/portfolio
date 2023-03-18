import Constants from 'constants/index'
import { SettingsContainer, SettingsProfileContainer } from './header.styled'

const Settings = () => {
  return (
    <SettingsContainer className="settings d-flex ac">
      <SettingsProfileContainer>
        <div>
          <img src={Constants.Assets.SettingsProfileAvatar} />
        </div>
      </SettingsProfileContainer>
    </SettingsContainer>
  )
}

export default Settings
