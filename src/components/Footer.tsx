import { useText } from '@/hooks'

export const Footer = () => {
  const { t } = useText()

  return (
    <div className="box-content h-[106px] pt-3">
      <div className="bg-dawn p-[12px_0px] text-sm leading-10">
        <div className="border-ash-100 -ml-[27px] border-b border-solid">
          <div className="text-ash-200 ml-[--center-abs-margin] pl-[27px]">
            <span>{t('footer.country')}</span>
            <div className="border-ash-100 text-ash-300 ml-[13px] inline-block border-l border-solid pl-4 font-semibold">
              <span>
                © {new Date().getFullYear()} - {t('footer.copyright.name')}
              </span>
            </div>
          </div>
        </div>
        <div className="-ml-[27px]">
          <div className="text-ash-200 ml-[--center-abs-margin] pl-[27px]">
            {t('footer.copyright.content')}
          </div>
        </div>
      </div>
    </div>
  )
}
