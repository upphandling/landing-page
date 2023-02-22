import Link from 'next/link'

import {Background} from '../background/Background'
import {Button} from '../button/Button'
import {HeroOneButton} from '../hero/HeroOneButton'
import {Section} from '../layout/Section'
import {NavbarTwoColumns} from '../navigation/NavbarTwoColumns'
import {Logo} from './Logo'

const Hero = () => (
  <Background color="bg-primary-500" dark>
    <Section yPadding="py-6" dark>
      <NavbarTwoColumns logo={<Logo />}>
        <li>
          <Link href="https://github.com/upphandling/upphandling-app">
            <a className="text-primary-100">❤️ Öppen källkod</a>
          </Link>
        </li>
        <li>
          <Link href="https://api.happylou.se">
            <a className="text-primary-100">API</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32" dark>
      <div className="md:flex">
        <img
          width={500}
          height={500}
          className=" h-80 object-contain md:w-1/3 md:h-full md:self-center"
          src="/assets/images/LaunchScreen.png"
          alt="Thumbs up"
        />
        <div className="p-6">
          <HeroOneButton
            title={
              <>
                {'Bästa sättet att upphandla\n'}
                <span className="text-primary-900">öppen källkod</span>
              </>
            }
            description="Ökar konkurrens och innovation med hjälp av öppenhet"
            button={
              <Link href="/">
                <a>
                  <Button xl dark>
                    Testa idag!
                  </Button>
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
