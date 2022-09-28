import styled from '@emotion/styled'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { SiCodewars } from 'react-icons/si'
import ReactDOM from 'react-dom'

const SocialContainer = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  position: fixed;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);

  &::after,
  &::before {
    content: '';
    display: block;
    width: 1px;
    left: 50%;
    margin: 0 auto;
    height: 30vh;
    background-color: red;
  }

  h2 {
    transform: translateY(0);
    transition: all 0.5s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-10px);
    }
  }

  .icon {
    color: white;
  }

  .icon:hover {
    color: red;
    transition: all 0.5s ease;
  }
`
const SocialBar = (): JSX.Element => {
  return ReactDOM.createPortal(
    <>
      <SocialContainer>
        <h2>
          <FiGithub className='icon' />
        </h2>
        <h2>
          <FiLinkedin className='icon' />
        </h2>
        <h2>
          <SiCodewars className='icon' />
        </h2>
      </SocialContainer>
    </>, document.getElementById('social-sidebar') as HTMLDivElement
  )
}

export default SocialBar
