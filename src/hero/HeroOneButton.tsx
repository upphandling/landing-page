import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header >
    <h1 className="text-5xl text-gray-900 font-bold pt-16">
      {props.title}
    </h1>
    <div className="text-2xl mt-4 mb-8">{props.description}</div>

    {props.button}
  </header>
);

export { HeroOneButton };
