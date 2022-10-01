import TitleHeader from '../components/TitleHeader'

const About = (): JSX.Element => {
  return (
    <div>
      <TitleHeader>About</TitleHeader>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          excepturi modi consequuntur ipsa ab quae asperiores laborum?
          Perferendis recusandae natus aperiam ut dolorem dolor delectus dicta,
          eligendi, deserunt, laborum accusamus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          sequi voluptatum, quidem quis, deleniti neque libero doloremque minus
          in dolor ipsam molestiae dicta excepturi distinctio. Quisquam nesciunt
          ab provident amet!
        </p>
        </div>
      </div>
    </div>
  )
}

export default About
