import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Product from "./components/Product";

const Button = styled.button`
  background-color: red;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <p>Shopping Cart</p>
        <Product />
      </div>
    </>
  );
}

export default App;
