import styled from "styled-components";
import PlusIcon from "./PlusIcon";

const Container = styled.div`
  max-width: 360px;
`;

const ImageBox = styled.div`
  position: relative;
`;

const Counter = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 50%;
  display: flex;
  height: 56px;
  justify-content: center;
  position: absolute;
  right: 16px;
  top: 16px;
  width: 56px;
`;

const Image = styled.img`
  width: 100%;
`;

const Name = styled.p`
  font-weight: 500;
`;

const Brand = styled.p`
  font-weight: 400;
`;

const Presentation = styled.p`
  font-weight: 400;
`;

const Price = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export default function Product() {
  return (
    <Container>
      <ImageBox>
        <Image src="https://cdn-images-chwk-prod.s3.amazonaws.com/media/catalog/product/a/r/arroz-chaufa-indiv.jpg" />
        <Counter>
          <PlusIcon />
        </Counter>
      </ImageBox>
      <Name>Nike Air Force 1'07</Name>
      <Brand>Nike</Brand>
      <Presentation>2 colors</Presentation>
      <Price>$90</Price>
    </Container>
  );
}
