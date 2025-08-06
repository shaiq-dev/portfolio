import { useMemo } from 'react'

import { useText } from '@/hooks'
import CameraIcon from '@/assets/icons/camera.svg'
import SendIcon from '@/assets/icons/send.svg'

// Exact colors taken from Google's AI generated search results / Follow up's
const GOOGLE_AI_COLOR_PAIRS = [
  ['#fff7f9', '#fface8', '#950084', '#231820'],
  ['#f0fdf0', '#a6d0b3', '#006d42', '#002110'],
  ['#f9f9ff', '#adc8f5', '#005097', '#001c3b'],
  ['#fff8f5', '#f1bc90', '#8e4e00', '#2e1500'],
  ['#fff8f7', '#ffb3b0', '#a30621', '#410007'],
  ['#fef7ff', '#d0bcff', '#6018d6', '#1e1928'],
  ['#fafbe4', '#c3cc92', '#566500', '#181e00'],
]

const getRandomPair = () => {
  return GOOGLE_AI_COLOR_PAIRS[Math.floor(Math.random() * GOOGLE_AI_COLOR_PAIRS.length)]
}

export const FollowUp = () => {
  const { t } = useText()
  const [bg, border, camera, send] = useMemo(() => getRandomPair(), [])

  return (
    <div className="mb-11">
      <div className="w-auto max-w-[632px] p-[14px_0px_10px]">
        <div
          className="flex flex-1 items-center overflow-hidden rounded-3xl rounded-tr border border-solid p-[0px_16px]"
          style={{
            transition: 'max-width 450ms cubic-bezier(0.05, 0.7, 0.1, 1)',
            borderColor: border,
            background: bg,
          }}
        >
          <input
            placeholder={t('peopleAlsoAsk.followUp.placeholder')}
            className="font-heading h-[46px] grow border-0 bg-inherit p-[10px_0px] text-base leading-5 font-normal text-[#001d35] outline-0"
          />
          <div className="flex h-full items-center">
            <div className="m-[0px_8px] inline-block size-5 leading-6">
              <CameraIcon className="size-full" fill={camera} />
            </div>
            <div className="m-[0px_8px] inline-block size-5 leading-6">
              <SendIcon className="size-[18px]" fill={send} />
            </div>
          </div>
        </div>
      </div>
      <div className="text-ash-200 flex h-4 items-center text-[12px]">
        <div className="bg-ash-100 h-px w-full" />
        <span className="ml-3.5">{t('peopleAlsoAsk.followUp.feedback.title')}</span>
      </div>
    </div>
  )
}
