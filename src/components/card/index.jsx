import { Container, Image, Label, Desc, Price, WrapDesc } from './styles'

const index = ({ image, label, desc, price, className }) => (
  <Container className={className}>
    <Image src={image} />

    <WrapDesc>
      <Label>{label}</Label>
      <Desc>{desc}</Desc>
      <Price>{`Rp. ${price}`}</Price>
    </WrapDesc>
  </Container>
);

export default index;