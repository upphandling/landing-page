import Link from 'next/link'

import {Button} from '../button/Button'
import {CTABanner} from '../cta/CTABanner'
import {Section} from '../layout/Section'

const Banner = () => (
  <Section>
    <CTABanner
      title="Orkade du scrolla hela vägen hit?! Vill du veta mer om projektet?"
      subtitle="Vi finns på Twitter!"
      button={
        <Link href="https://twitter.com/UpphandlingApp">
          <a>
            <Button>Följ oss</Button>
          </a>
        </Link>
      }
    />
  </Section>
)

export {Banner}
