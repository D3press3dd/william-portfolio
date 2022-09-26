import styled from '@emotion/styled'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { SiCodewars } from 'react-icons/si'

const SocialContainer = styled.div`
    display: flex;
    min-height: 100vh;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    position: fixed;
    left: 2rem;
    top: 50%;
    transform: translateY(-50%);

    &::after,
    &::before{
        content: "";
        display: block;
        width: 1px;
        left: 50%;
        margin: 0 auto;
        height: 30vh;
        background-color: red;
    }
`

const SocialBar = (): JSX.Element => {
  return (
    <SocialContainer>
      <h2>
        <FiGithub />
      </h2>
      <h2>
        <FiLinkedin />
      </h2>
      <h2>
        <SiCodewars />
      </h2>
    </SocialContainer>
  )
}

export default SocialBar
