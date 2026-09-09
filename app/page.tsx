import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { SocialProof } from '@/components/social-proof'
import { Features } from '@/components/features'
import { Testimonials } from '@/components/testimonials'
import { Pricing } from '@/components/pricing'
import { Faq } from '@/components/faq'
import { Cta } from '@/components/cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1">
        <div className="bg-gradient-to-b from-slate-50 to-white">
          <Hero />
        </div>
        <SocialProof />
        <div className="bg-gradient-to-b from-white to-slate-50">
          <Features />
        </div>
        <Testimonials />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <SiteFooter />
    </div>
  )
}
