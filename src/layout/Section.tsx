import {ReactNode} from 'react'

type ISectionProps = {
  title?: string
  subtitle?: string
  description?: string
  yPadding?: string
  dark?: boolean
  children: ReactNode
}

const Section = (props: ISectionProps) => (
  <div
    className={`max-w-screen-lg mx-auto px-3
      ${props.yPadding ? props.yPadding : 'py-16'}
      ${props.dark ? 'text-primary-100' : ''}
    `}>
    {(props.title || props.subtitle || props.description) && (
      <div className="mb-12 text-center">
        {props.subtitle && (
          <div className="text-primary-500 text-sm font-bold">
            {props.subtitle}
          </div>
        )}
        {props.title && (
          <h2 className="text-4xl text-gray-900 font-bold">{props.title}</h2>
        )}
        {props.description && (
          <div className="mt-4 text-xl md:px-20">{props.description}</div>
        )}
      </div>
    )}

    {props.children}
  </div>
)

export {Section}
