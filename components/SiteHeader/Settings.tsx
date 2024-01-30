import { LinkedAssets } from 'constants/index'
import { SettingsContainer, SettingsProfileContainer } from './_styled'

const Settings = () => {
  return (
    <SettingsContainer>
      <SettingsProfileContainer>
        <div>
          <img src={LinkedAssets.SETTINGS_PROFILE_AVATAR} />
        </div>
      </SettingsProfileContainer>
    </SettingsContainer>
  )
}

export default Settings
