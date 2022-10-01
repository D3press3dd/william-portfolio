import styled from '@emotion/styled'
import { motion } from 'framer-motion'

interface TitleProps {
  children: string
}

const Title = styled(motion.h1)`
  color: red;
  font-size: 80px;
  font-weight: 900;
`

const TitleHeader = ({ children }: TitleProps): JSX.Element => {
  return (
    <Title
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </Title>
  )
}

export default TitleHeader
