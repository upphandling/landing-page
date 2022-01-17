import Link from 'next/link'

import {QuestionAnswer} from '../faq/QuestionAnswer'
import {Section} from '../layout/Section'

const FAQ = () => (
  <Section
    title="Frågor?"
    subtitle="FAQ"
    description="Här kommer lite svar på vanliga frågor om DIS och om vår tjänst">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
      <QuestionAnswer question="Vad är DIS?">
        <p>
          DIS står för Dynamiskt inköpssystem eller (DPS - Dynamic Purchasing
          System) och är ett relativt nytt tillägg till LOU som möjliggör för
          fler leverantörer att vara del av en upphandling för att erbjuda
          specifika tjänster löpande. DIS är alltid helt elektroniskt och kan
          användas bland annat till att upphandla materiel till sjukvården
          löpande och fördelen jämfört med en traditionell upphandling är att
          fler leverantörer kan läggas till dynamiskt.
          <Link href="https://www.upphandlingsmyndigheten.se/inkopsprocessen/forbered-upphandling/valja-upphandlingsforfarande/dynamiskt-inkopssystem/">
            <a>Läs mer om DIS hos Upphandlingsmyndigheten</a>
          </Link>
          .
        </p>
      </QuestionAnswer>
      <QuestionAnswer question="Varför kan man bara upphandla öppen källkod via er app?">
        <p>
          Vi tror att DIS lämpar sig utmärkt för utveckling av öppen källkod så
          det är där vi har börjat. Framöver kommer vi säkerligen lägga till
          andra områden. Håll utkik.
        </p>
      </QuestionAnswer>
      <QuestionAnswer question="Finns det tidigare exempel på användning av DIS för mjukvaruutveckling?">
        <p>
          Etiam malesuada massa id sapien eleifend congue. Curabitur tempus urna
          molestie lacus dictum faucibus.
        </p>
      </QuestionAnswer>
      <QuestionAnswer question="Varför en app och inte en hemsida?">
        <p>
          Vi som utvecklar denna tjänst tycker att de befintliga systemen för
          upphandling är för krångliga och därför ville vi visa att det inte
          behöver vara så svårt. Därför började vi med en app. Det är en
          designprincip som kallas mobile-first som tvingar oss som utvecklar
          appen att göra den så enkel som möjligt för mobil, det ger oftast även
          fördelar för större skärmar.
        </p>
      </QuestionAnswer>
      <QuestionAnswer question="Vad kostar det?">
        <p>
          Vi är än så länge i betastadie i vår utveckling så än så länge är
          appen helt gratis för alla men vi planerar att ta betalt för någon del
          av tjänsten för att möjliggöra en hållbar utveckling av tjänsten och
          appen. Troligtvis kommer det vara gratis för dig som utvecklar öppen
          källkod att lämna anbud och sedan en månadskostnad för dig som
          publicerar en DIS.
        </p>
      </QuestionAnswer>
      <QuestionAnswer question="Vilka är ni som ligger bakom tjänsten och varför startade ni den?">
        <p>
          Vi är ett antal utvecklare, forskare och tidigare tjänstemän i
          offentlig sektor som bestämde oss för att försöka göra något åt det
          faktum att offentlig digitalisering går så långsamt. Vi ligger sist i
          OECD:s mätningar just i offentlig digitalisering och vi tror att en av
          anledningarna till det är för att det är för krångligt och dyrt att
          upphandla agila, användarstyrda och öppna tjänster. Därför startade vi
          detta initiativ.
        </p>
      </QuestionAnswer>
    </div>
  </Section>
)

export {FAQ}
