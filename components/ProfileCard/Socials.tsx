import Constants from 'constants/index'

import { ProfileCardSocials } from './profileCard.styled'

const Socials = () => {
  return (
    <ProfileCardSocials className="socials">
      <div className="socials__heading">Profiles</div>
      <div className="socials__list d-flex jsb">
        {Constants.Profiles.map(({ name, handle, icon: Icon }, index) => {
          return (
            <div className="socials__item" key={index}>
              <a
                href={handle}
                className="d-flex flex-column ac link"
                target="_blank"
                rel="noreferrer"
              >
                <div className="socials__item--icon">
                  <Icon />
                </div>
                <span>{name}</span>
              </a>
            </div>
          )
        })}
      </div>
    </ProfileCardSocials>
  )
}

export default Socials
