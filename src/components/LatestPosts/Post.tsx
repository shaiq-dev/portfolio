import type { ShortPost } from '@/types'
import { xTimeAgo } from '@/util/date-time'

export interface Props extends ShortPost {}

export const Post = ({ title, link, thumbnail, pubDate, categories }: Props) => {
  return (
    <div className="ml-5 box-content w-[184px] border-r border-solid border-[#ecedef] p-[0px_19px_0px_0px] first:ml-1">
      <div className="flex h-full flex-col">
        <div className="flex grow flex-col">
          <div className="group relative flex min-h-[265px] grow flex-col">
            <a href={link} className="flex grow flex-col" target="_blank" rel="noreferrer">
              <div className="after:content-[' '] relative h-[119px] w-[184px] overflow-hidden rounded-lg after:pointer-events-none after:absolute after:inset-0 after:block after:bg-[rgba(0,0,0,0.03)]">
                <img src={thumbnail} alt={title} className="block size-full" />
              </div>
              <div className="pt-4">
                <div className="text-ash-200 pointer-events-none mb-2 truncate text-sm !no-underline">
                  {categories.map((tag, index) => (
                    <span key={index}>#{tag} </span>
                  ))}
                </div>
                <div className="text-ocean-100 line-clamp-4 h-24 text-base whitespace-normal group-hover:underline">
                  {title}
                </div>
                <div className="text-ash-200 mt-2 text-sm leading-4">
                  {xTimeAgo(new Date(pubDate))}
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
