import Image from 'next/image'

import { cn } from '@/util'
import SearchIcon from '@/assets/icons/search.svg'

export interface Props {
  sticky: boolean
}

const SearchBar = ({ sticky }: Props) => {
  return (
    <div className="z-50 flex" data-sticky={sticky}>
      <div className="mt-1 pt-1 pr-7 pl-6">
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
          'hover:shadow-search-bar-hover shadow-search-bar border-ash-100 m-[0_auto_0_16px] flex h-[52px] w-[692px] rounded-[26px] border border-solid bg-white',
          {
            'm-[9px_0_0_14px] h-[34px] rounded-2xl': sticky,
          }
        )}
      >
        <div
          className={cn('flex flex-1 pl-5', {
            'pt-0': sticky,
          })}
        >
          <div className="flex flex-1 flex-wrap">
            <input
              className={cn(
                'box-content flex flex-1 border-none bg-transparent pt-[14px] pb-[11px] text-base leading-[22px] break-words text-[rgba(0,0,0,.87)] outline-0',
                {
                  'p-0 text-sm': sticky,
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
            <SearchIcon className={cn('text-ash-400', { 'size-5': sticky })} />
          </div>
        </button>
      </div>
    </div>
  )
}

export default SearchBar
