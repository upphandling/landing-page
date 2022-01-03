import Link from 'next/link'

import {Button} from '../button/Button'
import {Section} from '../layout/Section'
import {PricingCard} from '../pricing/PricingCard'
import {PricingFeature} from '../pricing/PricingFeature'

const Pricing = () => (
  <Section title="Enkla priser" subtitle="Prissättning">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <PricingCard
        name="Leverantörer"
        price="0kr / mån"
        description="Alltid gratis"
        button={
          <Link href="https://www.apple.com/se/app-store/">
            <a>
              <Button full>Ladda ner appen</Button>
            </a>
          </Link>
        }>
        <PricingFeature text="Obegränsat antal medlemmar i ditt team" />
        <PricingFeature text="Obegränsat antal ramavtal per företag" />
        <PricingFeature text="Obegränsat antal anbud" />
        <PricingFeature text="Prenumerera på upphandlingar med din profil" />
        <PricingFeature text="Notiser till Slack / Discord" />
        <PricingFeature text="Pushnotiser med anbud/förfarande" />
      </PricingCard>
      <PricingCard
        name="Upphandlare per DIS"
        price="2000kr / mån"
        description="Första DIS är gratis"
        popular
        button={
          <Link href="https://www.apple.com/se/app-store/">
            <a>
              <Button full>Ladda ner appen</Button>
            </a>
          </Link>
        }>
        <PricingFeature text="Inloggning via BankID" />
        <PricingFeature text="Obegränsat antal godkända företag" />
        <PricingFeature text="Pushnotiser" />
        <PricingFeature text="Email notifieringar" />
        <PricingFeature text="PDF avtal" />
        <PricingFeature text="Elektronisk signering av avtal" />
      </PricingCard>
    </div>
  </Section>
)

export {Pricing}
