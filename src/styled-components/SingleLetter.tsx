import styled from '@emotion/styled'

const SingleLetter = styled.span`
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
