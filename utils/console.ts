import { isSSR } from './index'

export const doodleInformation = () => {
  if (!isSSR) {
    console.log(
      '%c  Did you know?  \n%cThe Google logo I have used is from Dec 1st 2022 (The day I started this project) Google Doodle - Gerald "Jerry" Lawson\'s 82nd Birthday, one of the fathers of modern gaming.',
      'color:#fff;background:#447CFF',
      'color:unset;background:unset'
    )
  }
}
