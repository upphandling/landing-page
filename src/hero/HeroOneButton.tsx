import {ReactNode} from 'react'

type IHeroOneButtonProps = {
  title: ReactNode
  description: string
  button: ReactNode
}

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header>
    <h1 className="text-6xl text-gray-100 font-bold pt-16 leading-none tracking-tight">
      {props.title}
    </h1>
    <div className="text-3xl mt-4 mb-8">{props.description}</div>

    <div className="flex flex-row-reverse">{props.button}</div>
  </header>
)

export {HeroOneButton}
