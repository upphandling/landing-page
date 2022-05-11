import {ReactNode} from 'react'

type IFooterLinksProps = {
  title: string
  children: ReactNode
}

const FooterLinks = (props: IFooterLinksProps) => (
  <div className="footer-links text-center sm:text-left">
    <div className="font-semibold text-gray-100">{props.title}</div>

    <nav className="mt-3">
      <ul>{props.children}</ul>
    </nav>

    <style jsx>
      {`
        .footer-links :global(li) {
          @apply mt-2;
        }

        .footer-links :global(li a:hover) {
          @apply text-primary-200;
        }
      `}
    </style>
  </div>
)

export {FooterLinks}
