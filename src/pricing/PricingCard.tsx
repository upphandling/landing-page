import { ReactNode } from 'react';

import className from 'classnames';

type IPricingCardProps = {
  name: string;
  price: string;
  description: string;
  popular?: boolean;
  button: ReactNode;
  children: ReactNode;
};

const PricingCard = (props: IPricingCardProps) => {
  const pricingCardClass = className(
    'p-8',
    'border',
    'border-gray-300',
    'rounded-md',
    {
      'bg-primary-100': props.popular,
    }
  );

  return (
    <div className={pricingCardClass}>
      <div className="text-primary-500 text-2xl font-semibold text-center">
        {props.name}
      </div>

      <div className="mt-2 text-gray-900 text-3xl font-bold text-center">
        {props.price}
      </div>

      <div className="mt-4 text-gray-700 text-lg font-medium">
        {props.description}
      </div>

      <ul className="mt-4 mb-8">{props.children}</ul>

      {props.button}
    </div>
  );
};

export { PricingCard };
