import styled from "styled-components";
const Containers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0px;
`;
const Images = styled.img`
  width: 1342px;
  height: 850px;
`;
const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 200px;
  margin-left: -200px;
  margin-top: -29px;
`;
const Title = styled.h2`
  margin: 0;
  text-align: left;
  color: #000;
  font-family: arial;
  font-size: 100px;
`;
const Buttons = styled.button`
  display: inline-block;
  color: #fff;
  text-align: right;
  padding: 14px 16px;
  text-decoration: none;
  background-color: rgb(238, 140, 12);
  border-radius: 15px;
  outline: none;
  border: none;
`;
const Body = () => {
  return (
    <>
      <Containers>
        <Images src="/Bg.png" alt="background"></Images>
        <TextWrapper>
          <Title>Paras Bagiak</Title>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <Buttons> View Product</Buttons>
        </TextWrapper>
      </Containers>
    </>
  );
};

export default Body;
