import Footer from "./Footer";
import Navbar from "./Navbar";
import styled from "styled-components";

const Container = styled.div`
  max-width: 100vw;
`;
const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
