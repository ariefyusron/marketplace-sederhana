import Topbar from '../../components/topbar'

import { CardStyled, Container } from './styles'

const index = () => {

  return (
    <>
      <Topbar title="Cart" back />

      <Container>
        <CardStyled
          image=''
          label='Black Winter...'
          desc='Autumn And Winter Casual cotton-padded jacket...'
          price={5000}
        />

        <CardStyled
          image=''
          label='Black Winter...'
          desc='Autumn And Winter Casual cotton-padded jacket...'
          price={5000}
        />
      </Container>
    </>
  )
};

export default index;