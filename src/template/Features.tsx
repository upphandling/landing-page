import Image from 'next/image'

import {FeatureElement} from '../feature/FeatureElement'
import {Section} from '../layout/Section'

const Features = () => (
  <Section>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-8">
      <FeatureElement
        title="Effektivt"
        icon={
          <Image
            alt="Illustration Tumme upp"
            width={500}
            height={500}
            src="/assets/images/thumb-up-dynamic-gradient.png"
          />
        }>
        Det är enkelt och snabbt både för dig som upphandlar och för
        leverantörerna
      </FeatureElement>
      <FeatureElement
        title="Säkert"
        icon={
          <Image
            alt="Illustration Kassaskåp"
            width={500}
            height={500}
            src="/assets/images/locker-dynamic-gradient.png"
          />
        }>
        Vi använder oss av DIS/DPS som är en godkänd metod för dynamisk
        inköpssystem.
      </FeatureElement>
      <FeatureElement
        title="Bästa kompetensen"
        icon={
          <Image
            alt="Illustration Anteckningsbok"
            width={500}
            height={500}
            src="/assets/images/notebook-dynamic-gradient.png"
          />
        }>
        Du får tillgång till de bästa leverantörerna för ditt projekt.
      </FeatureElement>
    </div>
  </Section>
)

export {Features}
