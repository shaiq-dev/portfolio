import Image from 'next/image'

import { SearchContainer, SearchInput } from './header.styled'

const Search = () => {
  return (
    <SearchContainer className="search">
      <div className="search__logo">
        <Image
          src="/img/logo.png"
          alt="Google"
          width={92}
          height={33}
          priority
        />
      </div>
      <SearchInput>
        <div className="search__input--container flex"></div>
        <button className="search__btn"></button>
      </SearchInput>
    </SearchContainer>
  )
}

export default Search
