import Image from 'next/image'

import { cn } from '@/util'
import SearchIcon from '@/assets/icons/search.svg'

export interface Props {
  sticky: boolean
}

const SearchBar = ({ sticky }: Props) => {
  return (
    <div className="z-50 flex" data-sticky={sticky}>
      <div className="mt-1 pl-6 pr-7 pt-1">
        <Image
          src="https://media.graphassets.com/7IukRSXPTUiCdgqEj2DR"
          alt="Google"
          width={92}
          height={33}
          priority
        />
      </div>
      <div
        className={cn(
          '_border-transparent m-[0_auto_0_16px] flex h-[46px] w-[692px] rounded-3xl bg-white shadow-search-bar-rest hover:shadow-search-bar-rest-hover',
          {
            'm-[10px_0_0_14px] h-[34px] rounded-2xl border-[#dfe1e5] shadow-none hover:shadow-search-bar-sticky-hover':
              sticky,
          }
        )}
      >
        <div
          className={cn('flex flex-1 p-[5px_4px_0_20px]', {
            'pt-0': sticky,
          })}
        >
          <div className="flex flex-1 flex-wrap">
            <input
              className={cn(
                'm-0 -mt-[3px] box-content flex h-[39px] flex-1 break-words border-none bg-transparent text-base leading-[39px] text-[rgba(0,0,0,.87)] outline-0',
                {
                  'mt-0 h-8 p-0 text-sm leading-8': sticky,
                }
              )}
              defaultValue="Shaiq Kar"
            />
          </div>
        </div>
        <button
          className={cn(
            'w-11 flex-[0_0_auto] cursor-pointer border-none bg-transparent pr-[13px] outline-0',
            {
              // 'h-11': !sticky,
              'h-8 leading-8': sticky,
            }
          )}
        >
          <div
            className={cn('m-auto size-6 bg-none', {
              '!size-5': sticky,
            })}
          >
            <SearchIcon className={cn({ 'size-5': sticky })} />
          </div>
        </button>
      </div>
    </div>
  )
}

export default SearchBar
