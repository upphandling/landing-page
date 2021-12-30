import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Se hur tjänsten fungerar"
    subtitle="Exempel"
    description="Följ den enkla processen nedan för att lära dig hur du skapar en upphandling på tre minuter"
  >
    <VerticalFeatureRow
      title="Skapa ett DIS"
      description="Här skapar du grunden för upphandlingen: ett DIS. Du anger vilka krav du har på företagen som ska kunna ansöka samt pekar på ett GIT repository där koden ligger / kommer ligga."
      image="/assets/images/create-dis.png"
      imageAlt="Skapa DIS"
    />
    <VerticalFeatureRow
      title="Företagen hittar din DIS-upphandling"
      description="Du kan både annonsera din DIS i traditionella upphandlingssystem eller bara förlita dig på vår app. Företagen hittar alla tillgängliga DIS-upphandlingar här."
      image="/assets/images/find-dis.png"
      imageAlt="Hitta DIS"
      reverse
    />
    <VerticalFeatureRow
      title="Företagen ansöker om att bli leverantörer"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/apply-dis.png"
      imageAlt="Ansöka"
    />
  </Section>
);

export { VerticalFeatures };
