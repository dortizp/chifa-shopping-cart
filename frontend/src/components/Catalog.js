import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
  column-gap: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 16px;
`;

export default function Catalog() {
  return (
    <Container>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
    </Container>
  );
}
