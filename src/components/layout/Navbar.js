import Image from "next/image";
import tw from "twin.macro";
import styled from "styled-components";

const Container = tw.div`
  h-24 py-0 px-12 flex items-center sticky bg-red-700
`;
const NavbarItem = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  &:nth-child(2) {
    flex: 3;
    justify-content: center;
  }
  &:last-child {
    justify-content: flex-end;
  }
`;
const CallButton = tw.button`bg-white rounded-full p-2 w-12 h-12`;
const TextsDiv = tw.div`ml-5 text-white`;
const TextDiv = styled.div`
  &:first-child {
    font-size: 12px;
    font-weight: 500;
  }
  &:last-child {
    font-size: 20px;
    font-weight: bold;
  }
`;

const MenuItems = tw.ul`
  flex text-white items-center
`;
const MenuItem = tw.li`
  m-5 text-lg
`;
const Cart = tw.div`
  relative
`;
const CartCounter = tw.div`
  absolute -top-1 left-6 bg-white text-red-700 rounded-full w-4 h-4 flex items-center justify-center text-sm font-bold
`;

const Navbar = () => {
  return (
    <Container>
      <NavbarItem>
        <CallButton>
          <Image
            src="/img/telephone.png"
            alt="Phonecall Image"
            width={32}
            height={32}
          />
        </CallButton>
        <TextsDiv>
          <TextDiv>ORDER NOW</TextDiv>
          <TextDiv>066 322 413</TextDiv>
        </TextsDiv>
      </NavbarItem>
      <NavbarItem>
        <MenuItems>
          <MenuItem>Products</MenuItem>
          <MenuItem>Menu</MenuItem>
          <Image
            src="/img/logo.png"
            alt="Minut Dva Dostava Logo"
            width={160}
            height={69}
          />
          <MenuItem>Events</MenuItem>
          <MenuItem>Contact</MenuItem>
        </MenuItems>
      </NavbarItem>
      <NavbarItem>
        <Cart>
          <Image src="/img/cart.png" alt="" width={30} height={30} />
          <CartCounter>2</CartCounter>
        </Cart>
      </NavbarItem>
    </Container>
  );
};

export default Navbar;
