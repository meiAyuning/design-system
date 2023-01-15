import styled from "styled-components";
const Containers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0px;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;
const Images = styled.div`
  width: 60px;
  height: 55px;
  margin: 10px;
`;
const Navs = styled.div``;
const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;
const Li = styled.li`
  float: left;
`;
const LinkHref = styled.a`
  display: inline-block;
  color: #000;
  text-align: right;
  padding: 14px 16px;
  text-decoration: none;
`;
const Buttons = styled.button`
  background-color: rgb(238, 140, 12);
  padding: 10px;
  color: white;
  border-radius: 15px;
  margin: 5px;
  outline: none;
  border: none;
`;
const Navbar = () => {
  return (
    <>
      <Containers>
        <Left>
          <Images>
            <img src="/Logo.png" alt="logo" />
          </Images>
          <h3>Paras Bagiak</h3>
        </Left>
        <Navs>
          <Ul>
            <Li>
              <LinkHref>Home</LinkHref>
            </Li>
            <Li>
              <LinkHref>About</LinkHref>
            </Li>
            <Li>
              <LinkHref>Contact</LinkHref>
            </Li>
            <Li>
              <LinkHref>Sign In</LinkHref>
            </Li>

            <Buttons>Sign Up</Buttons>
          </Ul>
        </Navs>
      </Containers>
    </>
  );
};

export default Navbar;
