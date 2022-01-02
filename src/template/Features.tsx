import { FeatureElement } from '../feature/FeatureElement';
import { Section } from '../layout/Section';

const Features = () => (
  <Section>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-8">
      <FeatureElement
        title="Effektivt"
        icon={
                   <img src="/assets/images/notebook-dynamic-gradient.png"/>

        }
      >
        Det är enkelt och snabbt både för dig som upphandlar och för leverantörerna
      </FeatureElement>
       <FeatureElement
        title="Säkert"
        icon={
          <img src="/assets/images/notebook-dynamic-gradient.png"/>
        }
      >
        Vi använder oss av DIS/DPS som är en godkänd metod för dynamisk inköpssystem.
      </FeatureElement>
      <FeatureElement
        title="Bästa kompetensen"
        icon={
                    <img src="/assets/images/notebook-dynamic-gradient.png"/>

        }
      >
        Du får tillgång till de bästa leverantörerna för ditt projekt.
      </FeatureElement>
     
    </div>
  </Section>
);

export { Features };
