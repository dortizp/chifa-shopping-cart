import styled from "styled-components";

const Container = styled.div``;

const ImageBox = styled.div``;

const Counter = styled.div``;

const Image = styled.img``;

const Name = styled.p``;

const Brand = styled.p``;

const Presentation = styled.p``;

const Price = styled.p``;

export default function Product() {
  return (
    <Container>
      <ImageBox>
        <Image src="https://cdn-images-chwk-prod.s3.amazonaws.com/media/catalog/product/a/r/arroz-chaufa-indiv.jpg" />
        <Counter>+</Counter>
      </ImageBox>
      <Name>Nike Air Force 1'07</Name>
      <Brand>Nike</Brand>
      <Presentation>2 colors</Presentation>
      <Price>$90</Price>
    </Container>
  );
}
