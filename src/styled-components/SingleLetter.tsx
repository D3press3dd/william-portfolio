import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const SingleLetter = styled(motion.span)`
  font-size: 80px;
  font-weight: 900;

  &:hover{
    animation-name: moving;
    animation-duration: .5s;
  }

  @keyframes moving {
   from {
        transform: translateY(0);
        background-color: red;
    }   

    to {
        transform: translateY(10px);
        background-color: blue;
    }
  }
`

export default SingleLetter
