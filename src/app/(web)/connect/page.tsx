import Input from '@/components/ui/Input'

export default function ConnectPage() {
  return (
    <div className="_page">
      <div className="_page-center">
        <div className="mb-3 mt-9">
          <h2 className="_gradient-text font-heading text-[60px] font-bold leading-[72px] -tracking-[0.5px]">
            Talk to a Google specialist
          </h2>
          <div className="mb-9 mt-6 font-heading text-lg font-light text-ash-200">
            Haha! kidding, say hi to me
          </div>
          <form className="w-[517px] pb-9">
            <div className="flex flex-wrap items-center gap-x-6">
              <div className="flex-1">
                <Input label="Name" />
              </div>
              <div className="flex-1">
                {' '}
                <Input label="Email" />
              </div>
            </div>
            <Input label="Phone" required={false} />
            <Input label="Subject" />
          </form>
        </div>
      </div>
    </div>
  )
}
