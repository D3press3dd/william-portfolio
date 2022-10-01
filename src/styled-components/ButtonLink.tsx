import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

interface ButtonLinkProps {
  link: string
  children: string
}

const Button = styled(NavLink)`
    background-color: transparent;
    color: white;
    display: inline-block;
    font-weight: 900;
    outline: 1px solid red;
    padding: 1rem 2rem;
    position: relative;
    text-decoration: none;
    z-index: 2;
    transition: all .5s ease;

    &::after{
        content: '';
        background-color: red;
        color: white;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        transition: all .5s ease;
        width: 0%;
        z-index: -1;
    }

    &:hover::after{
        width: 100%;
    }

    &:link,
    &:visited{
        color: white;
    }

`

const ButtonLink = ({ link, children }: ButtonLinkProps): JSX.Element => {
  return (
    <Button role={'link'} title={children} to={link}>
      {children}
    </Button>
  )
}

export default ButtonLink
