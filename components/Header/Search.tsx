import Image from 'next/image'
import { useState } from 'react'

import {
  SearchButton,
  SearchContainer,
  SearchInputContainer,
  SearchInputWrapper,
  SearchLogo,
} from './_styled'
import SearchIcon from 'assets/icons/search.svg'

const Search = () => {
  const [value, setValue] = useState('Shaiq Kar')

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

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
            <input type="text" value={value} onChange={handleInput} />
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
