import Link from 'next/link'

import {Button} from '../button/Button'
import {Section} from '../layout/Section'
import {PricingCard} from '../pricing/PricingCard'
import {PricingFeature} from '../pricing/PricingFeature'

const Pricing = () => (
  <Section title="Enkla priser" subtitle="Prissättning">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <PricingCard
        name="Startup / SMB"
        price="0kr / mån"
        description="Gratis för småföretagare"
        button={
          <Link href="https://www.apple.com/se/app-store/">
            <a>
              <Button full secondary>
                Ladda ner appen
              </Button>
            </a>
          </Link>
        }>
        <PricingFeature text="<25 medlemmar i ditt team" />
        <PricingFeature text="<10 ramavtal per företag" />
        <PricingFeature text="Obegränsat antal specifika upphandlingar" />
        <PricingFeature text="Prenumerera på upphandlingar med din kompetens" />
        <PricingFeature text="Pushnotiser med anbud/förfarande" />
      </PricingCard>
      <PricingCard
        name="UPPHANDLARE"
        price="2000kr / DIS / mån"
        description="Första DIS är gratis"
        popular
        button={
          <Link href="/">
            <a>
              <Button full>Get Started</Button>
            </a>
          </Link>
        }>
        <PricingFeature text="Obegränsat antal godkända företag" />
        <PricingFeature text="Pushnotiser" />
        <PricingFeature text="Email notifieringar" />
        <PricingFeature text="PDF avtal" />
      </PricingCard>
      <PricingCard
        name="ANVÄNDARLICENS"
        price="1000kr / användare / mån"
        description="Bäst för större företag"
        button={
          <Link href="/">
            <a>
              <Button full secondary>
                Get Started
              </Button>
            </a>
          </Link>
        }>
        <PricingFeature text="Obegränsat antal teammedlemmar" />
        <PricingFeature text="Obegränsat antal ramavtal" />
        <PricingFeature text="Pushnotifieringar" />
        <PricingFeature text="Email-notifieringar" />
        <PricingFeature text="PDF avtal" />
      </PricingCard>
    </div>
  </Section>
)

export {Pricing}
