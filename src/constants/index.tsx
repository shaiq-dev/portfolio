import GitHub from '@/assets/icons/github.svg'
import Instagram from '@/assets/icons/instagram.svg'
import LinkedIn from '@/assets/icons/linkedin.svg'
import Twitter from '@/assets/icons/twitter.svg'
import type { SocialProfile } from '@/types'

export const SOCIAL_PROFILES: SocialProfile[] = [
  {
    name: 'GitHub',
    handle: 'https://github.com/shaiq-dev',
    icon: <GitHub />,
  },
  {
    name: 'Instagram',
    handle: 'https://instagram.com/shaiqkar_',
    icon: <Instagram />,
  },
  {
    name: 'Twitter',
    handle: 'https://twitter.com/shaiqkar_',
    icon: <Twitter />,
  },
  {
    name: 'LinkedIn',
    handle: 'https://linkedin.com/in/shaiqkar',
    icon: <LinkedIn />,
  },
]

export const GOOGLE_ASSETS = {
  Images: {
    Logo1X: '//www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png',
    Logo2X: '//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png',
    Robot: '//www.google.com/images/errors/robot.png',
  },
}
