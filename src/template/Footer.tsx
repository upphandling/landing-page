import Link from 'next/link'

import {Background} from '../background/Background'
import {FooterCompanyInfo} from '../footer/FooterCompanyInfo'
import {FooterLinks} from '../footer/FooterLinks'
import {FooterTwoRowsCopyright} from '../footer/FooterTwoRowsCopyright'
import {Section} from '../layout/Section'
import {AppConfig} from '../utils/AppConfig'
import {Logo} from './Logo'

const Footer = () => (
  <Background color="bg-primary-500">
    <Section dark>
      <FooterTwoRowsCopyright siteName={AppConfig.site_name}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6">
          <div className="col-span-1 sm:col-span-2">
            <FooterCompanyInfo
              logo={<Logo />}
              description={AppConfig.description}
            />
          </div>

          <FooterLinks title="Sponsorer">
            <li>
              <Link href="https://iteam.se">
                <a>Iteam</a>
              </Link>
            </li>
            <li>
              <Link href="https://safespring.se">
                <a>Safespring</a>
              </Link>
            </li>
            <li>
              <Link href="https://skolplattformen.org">
                <a>Öppna skolplattformen / Not Free Beer AB</a>
              </Link>
            </li>
            <li>
              <Link href="mailto:christian@landgren.nu">
                <a>Vill ditt företag synas här?</a>
              </Link>
            </li>
          </FooterLinks>
          <FooterLinks title="För utvecklare">
            <li>
              <Link href="https://github.com/upphandling/upphandling-app">
                <a>Källkod för appen</a>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/upphandling/landing-page">
                <a>Källkod för denna hemsida</a>
              </Link>
            </li>
            <li>
              <Link href="https://api.upphandling.app">
                <a>Öppet API (under utveckling)</a>
              </Link>
            </li>
          </FooterLinks>
          <FooterLinks title="Kontakta oss">
            <li>
              <Link href="mailto:christian.landgren@iteam.se">
                <a>Christian Landgren, utveckling och PR</a>
              </Link>
            </li>
            <li>
              <Link href="mailto:ted@staltec.se">
                <a>Ted Stalte, juridik och upphandling</a>
              </Link>
            </li>
            <li>
              <Link href="mailto:johan.linaker@ri.se">
                <a>Johan Linåker, öppen källkod</a>
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/Stefan_Wallin">
                <a>Stefan Wallin, utveckling</a>
              </Link>
            </li>
          </FooterLinks>
          <FooterLinks title="Legal (under utveckling)">
            <li>
              <Link href="/">
                <a>Säkerhet</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Personuppgifter</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Legala frågor</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Presskit</a>
              </Link>
            </li>
          </FooterLinks>
        </div>
      </FooterTwoRowsCopyright>
    </Section>
  </Background>
)

export {Footer}
