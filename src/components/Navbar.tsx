import styled from '@emotion/styled'
import useWindowsPosition from '../hooks/useWindowsPosition'
import { ActiveLink } from '../styled-components'
import links from '../data/links.json'

const Menu = styled.menu<{shadow: Boolean}>`
    align-items: center;
    box-shadow:${props => props.shadow === true ? 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px' : 'none'};
    background-color: #181818;
    color: white;
    display: flex;
    font-weight: 700;
    gap: 1rem;
    justify-content: space-between;
    list-style: none;
    padding: 2rem;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 5;
    transition: box-shadow .1s ease;

    li{
        font-weight: 500;
    }
`

const MenuItem = styled.div`
    display: flex;
    gap: 1rem;

`

const Navbar = (): JSX.Element => {
  const viewportPosition = useWindowsPosition()
  return (
    <Menu id='menu' shadow={viewportPosition} >
        <MenuItem>
            <ActiveLink link={'/'}>Logo</ActiveLink>
        </MenuItem>

        <MenuItem>
        {links.map(({ path, content }) => {
          return <ActiveLink key={path + content} link={path}>{content}</ActiveLink>
        })}
        </MenuItem>
    </Menu>

  )
}

export default Navbar
