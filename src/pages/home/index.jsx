import Topbar from './components/topbar'
import Card from './components/card'
import { Container } from './styles'

const index = () => {
  const listProduct = [
    {
      image: '',
      label: 'Black Winter...',
      desc: 'Autumn And Winter Casual cotton-padded jacket...',
      price: 5000
    },
    {
      image: '',
      label: 'Black Winter...',
      desc: 'Autumn And Winter Casual cotton-padded jacket...',
      price: 5000
    },
    {
      image: '',
      label: 'Black Winter...',
      desc: 'Autumn And Winter Casual cotton-padded jacket...',
      price: 5000
    }
  ]

  return (
    <>
      <Topbar />
      
      <Container>
        {listProduct.map ((item, index) => <Card key={String(index)} {...item} />)}
      </Container>
    </>
  )
};

export default index;