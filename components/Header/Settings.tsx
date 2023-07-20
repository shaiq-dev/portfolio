import Constants from 'constants/index'
import { SettingsContainer, SettingsProfileContainer } from './_styled'

const Settings = () => {
  return (
    <SettingsContainer className="settings d-flex items-center">
      <SettingsProfileContainer>
        <div>
          <img src={Constants.Assets.SettingsProfileAvatar} />
        </div>
      </SettingsProfileContainer>
    </SettingsContainer>
  )
}

export default Settings
