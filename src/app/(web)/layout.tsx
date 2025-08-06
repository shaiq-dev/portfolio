import { SiteHeader } from '@/components/SiteHeader'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SiteHeader />
      <div className="w-full">
        <div className="pt-5">
          <div className="m-[6px_0px_4px] h-[65px]" />
          <Navigation />
          {children}
        </div>
        <Footer />
      </div>
    </div>
  )
}
