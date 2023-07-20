import Image from 'next/image'

import {
  SearchButton,
  SearchContainer,
  SearchInputContainer,
  SearchInputWrapper,
  SearchLogo,
} from './_styled'
import SearchIcon from 'assets/icons/search.svg'

const Search = () => {
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {}

  return (
    <SearchContainer className="search">
      <SearchLogo>
        <Image
          src="/img/logo.png"
          alt="Google"
          width={92}
          height={33}
          priority
        />
      </SearchLogo>
      <SearchInputContainer>
        <SearchInputWrapper>
          <div className="d-flex flex-1 flex-wrap">
            <input type="text" value="Shaiq Kar" onChange={handleInput} />
          </div>
        </SearchInputWrapper>
        <SearchButton>
          <div className="icon">
            <SearchIcon />
          </div>
        </SearchButton>
      </SearchInputContainer>
    </SearchContainer>
  )
}

export default Search
