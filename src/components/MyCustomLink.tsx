
interface Props {
  href: string
  title: string
  children: JSX.Element | JSX.Element[]
}

export const MyCustomLink = ({ href, title, children }: Props): JSX.Element => {
  return (
    <a href={href} target={'_blank'} title={title} rel={'noreferrer'}>
        {children}
    </a>
  )
}
