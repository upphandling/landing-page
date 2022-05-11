import {ReactNode} from 'react'

type IFooterTwoRowsCopyrightProps = {
  siteName: string
  children: ReactNode
}

const FooterTwoRowsCopyright = (props: IFooterTwoRowsCopyrightProps) => (
  <>
    {props.children}

    <div className="text-center text-gray-300 text-sm mt-12">
      {`© Copyright ${new Date().getFullYear()} ${
        props.siteName
      }. All Rights Reserved.`}
    </div>
  </>
)

export {FooterTwoRowsCopyright}
