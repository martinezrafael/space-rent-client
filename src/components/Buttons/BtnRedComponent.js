import styled from "styled-components";

const BtnRed = styled.input`
  background-color: #E64E35;
  border: none;
  border-radius: 4px;
  color: #F9F9FA;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  height: 38px;
  padding: 4px;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
`;

const BtnRedComponent = (props) => {
    return <BtnRed value={props.value} />;
};

export default BtnRedComponent;
