import TitleHeader from '../components/TitleHeader'

const Works = (): JSX.Element => {
  return (
    <>
      <TitleHeader>Works</TitleHeader>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, laborum
            voluptatum tempore veniam obcaecati, officia voluptate amet mollitia
            eius, quam quas fuga eaque ratione suscipit est adipisci excepturi
            laudantium odio?.
          </p>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, laborum
            voluptatum tempore veniam obcaecati, officia voluptate amet mollitia
            eius, quam quas fuga eaque ratione suscipit est adipisci excepturi
            laudantium odio?
          </p>
        </div>
      </div>
    </>
  )
}

export default Works
