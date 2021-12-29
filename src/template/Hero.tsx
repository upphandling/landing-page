import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

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
      <HeroOneButton
        title={
          <>
            {'Enkel och dynamisk upphandling av programvaruutvecklng\n'}
            <span className="text-primary-500">baserat på öppen källkod</span>
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
    </Section>
  </Background>
);

export { Hero };
