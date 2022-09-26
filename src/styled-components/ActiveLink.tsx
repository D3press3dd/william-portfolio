import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'

interface ActiveLinkProps {
  link: string
  children: string | JSX.Element | JSX.Element[]
  [props: string]: unknown
}

const Active = styled(NavLink)`
  text-decoration: none;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 1px;
    height: 2px;
    width: 0;
    bottom: -2px;
    left: 0;
    background-color: red;
    transition: all 0.5s ease;
  }

  &:link,
  &:visited {
    color: white;
    transition: all 1s ease;
  }

  &:hover,
  &:active {
    &::after {
      width: 100%;
    }
  }

  &.active {
    color: red;
    &::after {
      width: 100%;
    }
  }
`

export const ActiveLink = ({ link, children }: ActiveLinkProps): JSX.Element => {
  return (
      <Active
        to={link}
      >
        {children}
      </Active>
  )
}

ActiveLink.displayName = 'ActiveLink'
