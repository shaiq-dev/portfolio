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
    Resume: 'https://960t3mahl7.execute-api.ap-south-1.amazonaws.com/call/',
  },
  Assets: {
    SettingsProfileAvatar: 'https://media.graphassets.com/y7xaSQo5TOybeo6PVmAG',
  },
}

export const AppStrings = {
  ERROR_PAGE_DISPLAY_NAME: 'ErrorPage',
  CONNECT_PAGE_HEADING: 'Talk to a Google specialist',
  CONNECT_PAGE_SUB_HEADING: 'Haha! kidding, say hi to me',
  CONNECT_PAGE_TEXTAREA_PLACEHOLDER:
    'e.g., I want to modernize my app infrastructure by the end of year.',
  CONNECT_PAGE_SUCCESS_MESSAGE:
    'I have received your request keep an eye on you inbox',

  // Errors
  SERVER_ERROR: 'Something went wrong, try again later!',
  EMPTY_FIELD_ERROR: 'This is required',
  INVALID_EMAIL_ERROR: 'Email should be in this format: name@example.com',
}

export const GoogleLogos = {
  x1: '//www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png',
  x2: '//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png',
  robot: '//www.google.com/images/errors/robot.png',
}

export const AppContants = {
  REDIS_TTL: 3600,
  EMAIL_REGEX: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
}

export const VercelKVKeys = {
  HOME_PAGE_STATIC_PROPS: 'homepage_static_props',
}

export default Constants
