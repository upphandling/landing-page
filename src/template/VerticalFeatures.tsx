import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Se hur tjänsten fungerar"
    subtitle="Exempel"
    description="Följ den enkla processen nedan för att lära dig hur du skapar en upphandling på tre minuter"
  >
    <VerticalFeatureRow
      title="1. Skapa ett DIS*"
      description="Här skapar du grunden för upphandlingen: ett DIS. Du anger vilka krav du har på företagen som ska kunna ansöka samt pekar på ett GIT repository där koden ligger / kommer ligga."
      note="* DIS står för Dynamiskt Inköpssystem vilket möjliggör ett enklare förfarande för upphandling. Läs mer nedan."
      image="/assets/images/create-dis.png"
      imageAlt="Skapa DIS"
    />
    <VerticalFeatureRow
      title="2. Leverantörerna hittar din DIS-upphandling"
      description="Du kan både annonsera din DIS i traditionella upphandlingssystem eller bara förlita dig på vår app. Företagen hittar alla tillgängliga DIS-upphandlingar här."
      image="/assets/images/show-dis.png"
      imageAlt="Hitta DIS"
      reverse
    />
    <VerticalFeatureRow
      title="3. Leverantörerna ansöker om att bli leverantörer"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/apply-dis.png"
      imageAlt="Ansöka"
    />
    <VerticalFeatureRow
      title="4. Du lägger upp uppgifter direkt i Github"
      description="Nu kan du och dina leverantörer jobba fritt i Github. Varje issue blir en anbudsförfrågan och du och dina leverantörer kommunicerar enkelt via pushnotiser i era mobiler."
      image="/assets/images/github.png"
      imageAlt="Github"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
