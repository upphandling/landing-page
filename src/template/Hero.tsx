import Image from 'next/image'
import Link from 'next/link'

import {Background} from '../background/Background'
import {Button} from '../button/Button'
import {HeroOneButton} from '../hero/HeroOneButton'
import {Section} from '../layout/Section'
import {NavbarTwoColumns} from '../navigation/NavbarTwoColumns'
import {Logo} from './Logo'

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">
            <a>Dokumentation</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <Button>Testa idag!</Button>
            </a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <div className="md:flex">
        <Image
          width={500}
          height={500}
          className=" h-80 object-contain md:w-1/3 md:h-full md:self-center"
          src="/assets/images/thumb-up-dynamic-color.png"
          alt="Thumbs up"
        />
        <div className="p-8">
          <HeroOneButton
            title={
              <>
                {'Bästa sättet att upphandla\n'}
                <span className="text-primary-500">öppen källkod</span>
              </>
            }
            description="Ökar konkurrens och innovation med hjälp av öppenhet"
            button={
              <Link href="/">
                <a>
                  <Button xl>Testa idag!</Button>
                </a>
              </Link>
            }
          />
        </div>
      </div>
    </Section>
  </Background>
)

export {Hero}
