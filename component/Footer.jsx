import styled from "styled-components";
const Footers = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0px;
  margin-top: 10px;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;
const Navs = styled.nav`
  display: inline-block;
`;
const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;
const Li = styled.li`
  float: left;
`;
const Images = styled.img`
  width: 90px;
`;

const Footer = () => {
  return (
    <>
      {/* <div className="footer">
        <div className="left">
          <p>© 2022 Copyright Paras Bagiak</p>
        </div>
        <div className="navbar">
          <ul>
            <li>
              <img src="/bri.png" alt />
            </li>
            <li>
              <img src="/dana.jpeg" alt />
            </li>
            <li>
              <img src="/ovo.jpg" alt />
            </li>
          </ul>
        </div>
      </div> */}

      <Footers>
        <Left>
          <p>© 2022 Copyright Paras Bagiak</p>
        </Left>
        <Navs>
          <Ul>
            <Li>
              <Images src="/bri.png" alt></Images>
            </Li>
            <Li>
              <Images src="/dana.jpeg" alt></Images>
            </Li>
            <Li>
              <Images src="/ovo.jpg" alt></Images>
            </Li>
          </Ul>
        </Navs>
      </Footers>
    </>
  );
};

export default Footer;
