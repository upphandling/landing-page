import {ReactNode} from 'react'

type IBackgroundProps = {
  children: ReactNode
  color: string
  dark?: boolean
}

const Background = (props: IBackgroundProps) => (
  <div
    className={`
    ${props.color}
    ${props.dark ? 'text-primary-100' : ''}
  `}>
    {props.children}
  </div>
)

export {Background}
