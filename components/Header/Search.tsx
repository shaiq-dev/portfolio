import Image from 'next/image'

import { SearchContainer, SearchInput } from './header.styled'
import SearchIcon from 'assets/icons/search.svg'

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
        <div className="search__input--container d-flex f-1">
          <div className="d-flex f-1 f-wrap">
            <input type="text" value="Shaiq Kar" />
          </div>
        </div>
        <button className="search__btn">
          <div className="icon">
            <SearchIcon />
          </div>
        </button>
      </SearchInput>
    </SearchContainer>
  )
}

export default Search
