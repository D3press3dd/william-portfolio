import { ButtonLink, SingleLetter } from '../styled-components'
import myName from '../data/myName.json'

const Home = (): JSX.Element => {
  return (
    <>
      <div>
        <h1>
          {myName.map((letra: string, index: number) => {
            if (letra === 'salto') {
              return <br key={`${letra},${index}`} />
            } else {
              return (
                <SingleLetter key={`${letra},${index}`}>{letra}</SingleLetter>
              )
            }
          })}
        </h1>
      </div>
      <div>
        <h4 style={{ fontWeight: '300' }}><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. tate minima! Suscipit, quasi.</i></h4>
      </div>
      <div style={{ paddingTop: '2rem' }}>
        <ButtonLink link='/contact'>Contact me!</ButtonLink>
      </div>
    </>
  )
}

export default Home
