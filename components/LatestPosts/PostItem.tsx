import { MediumShortPost } from 'types/index'
import {
  PostItemContainer,
  PostItemContent,
  PostItemImage,
  PostItemTags,
  PostItemTime,
  PostItemTitle,
  PostItemWrapper,
} from './_styled'

type PostItemProps = MediumShortPost

const PostItem = ({
  title,
  link,
  thumbnail,
  pubDate,
  categories,
}: PostItemProps) => {
  return (
    <PostItemContainer>
      <div className="d-flex flex-column h-full">
        <div className="d-flex flex-column flex-grow-1">
          <PostItemWrapper>
            <a
              href={link}
              className="d-flex flex-column flex-grow-1"
              target="_blank"
              rel="noreferrer"
            >
              <PostItemImage>
                <img src={thumbnail} alt="Post Image" />
              </PostItemImage>
              <PostItemContent>
                <PostItemTags>
                  {categories.map((tag, index) => (
                    <span key={index}>#{tag} </span>
                  ))}
                </PostItemTags>
                <PostItemTitle>{title}</PostItemTitle>
                <PostItemTime>{pubDate}</PostItemTime>
              </PostItemContent>
            </a>
          </PostItemWrapper>
        </div>
      </div>
    </PostItemContainer>
  )
}

export default PostItem
