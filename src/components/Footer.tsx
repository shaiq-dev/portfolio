import { useText } from '@/hooks'

export const Footer = () => {
  const { t } = useText()

  return (
    <div className="box-content h-[106px] pt-3">
      <div className="bg-dawn p-[12px_0px] text-sm leading-10">
        <div className="-ml-[27px] border-b border-solid border-ash-100">
          <div className="ml-[--center-abs-margin] pl-[27px] text-ash-200">
            <span>{t('footer.country')}</span>
            <div className="ml-[13px] inline-block border-l border-solid border-ash-100 pl-4 font-semibold text-ash-300">
              <span>
                © {new Date().getFullYear()} - {t('footer.copyright.name')}
              </span>
            </div>
          </div>
        </div>
        <div className="-ml-[27px]">
          <div className="ml-[--center-abs-margin] pl-[27px] text-ash-200">
            {t('footer.copyright.content')}
          </div>
        </div>
      </div>
    </div>
  )
}
