import { OpenSourceContainer } from 'styles/open-source.styled'

// import ProjectsAnim from 'assets/img/projects.gif'
import Image from 'next/image'

export default function OpenSource() {
  return (
    <>
      <OpenSourceContainer>
        <div className="hero">
          <div className="d-flex justify-between hero-inner">
            <div>
              <h2>Projects</h2>
              <p>Not ready</p>
            </div>
            <div className="hero-inner-image">
              <img
                src="https://media.graphassets.com/djXsKOGsTjOXx8nqgoJh"
                alt="Projects"
                srcSet=""
                sizes="(max-width: 600px) 100vw, (max-width: 840px) 50vw, 464px"
                // unoptimized={true}
              />
            </div>
          </div>
        </div>
      </OpenSourceContainer>
      <div style={{ height: '600px' }}></div>
    </>
  )
}
