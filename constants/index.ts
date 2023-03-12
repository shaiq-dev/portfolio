import {
  HiOutlineNewspaper,
  HiOutlineHashtag,
  HiOutlineChatBubbleBottomCenterText,
} from 'react-icons/hi2'

import SearchIcon from 'assets/icons/search-mini.svg'
import GitHub from 'assets/icons/github.svg'
import Instagram from 'assets/icons/instagram.svg'
import Twitter from 'assets/icons/twitter.svg'
import LinkedIn from 'assets/icons/linkedin.svg'


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
  Profiles: [
    {
      name: 'GitHub',
      handle: 'https://github.com/shaiq-dev',
      icon: GitHub,
    },
    {
      name: 'Instagram',
      handle: 'https://instagram.com/shaiqkar_',
      icon: Instagram,
    },
    {
      name: 'Twitter',
      handle: 'https://twitter.com/shaiqkar_',
      icon: Twitter,
    },
    {
      name: 'LinkedIn',
      handle: 'https://linkedin.com/in/shaiqkar',
      icon: LinkedIn,
    },
  ],
  Api: {
    Resume:
      'https://wy7uubmcz4.execute-api.ap-south-1.amazonaws.com/default/dresume',
  },
}

export default Constants
