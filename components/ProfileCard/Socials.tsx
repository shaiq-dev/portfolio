import Constants from 'constants/index'

import { SocialsProfileList, SocialsProfileListItem } from './_styled'

const Socials = () => {
  return (
    <div className="profile-card-section">
      <div className="profile-card-section-title">Profiles</div>
      <SocialsProfileList>
        {Constants.Profiles.map(({ name, handle, icon: Icon }, index) => {
          return (
            <SocialsProfileListItem key={index}>
              <a
                href={handle}
                className="d-flex flex-column items-center link"
                target="_blank"
                rel="noreferrer"
              >
                <div className="icon">
                  <Icon />
                </div>
                <span>{name}</span>
              </a>
            </SocialsProfileListItem>
          )
        })}
      </SocialsProfileList>
    </div>
  )
}

export default Socials
