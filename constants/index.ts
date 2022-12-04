import {
  HiOutlineNewspaper,
  HiOutlineHashtag,
  HiOutlineChatBubbleBottomCenterText,
} from 'react-icons/hi2'

import SearchIcon from 'assets/icons/search-mini.svg'

const Constants = {
  Nav: [
    {
      name: 'All',
      path: '/',
      icon: SearchIcon,
    },
    {
      name: 'Blog',
      path: '/blog',
      icon: HiOutlineNewspaper,
    },
    {
      name: 'Open Source',
      path: '/open-source',
      icon: HiOutlineHashtag,
    },
    {
      name: 'Connect',
      path: '/connect',
      icon: HiOutlineChatBubbleBottomCenterText,
    },
  ],
  Api: {
    Resume:
      'https://wy7uubmcz4.execute-api.ap-south-1.amazonaws.com/default/dresume',
  },
}

export default Constants
