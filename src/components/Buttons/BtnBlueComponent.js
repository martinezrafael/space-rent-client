import styled from 'styled-components';

const BtnBlue = styled.input`
    background-color: #1E56BC;
    border: none;
    border-radius: 4px;
    color: #F9F9FA;
    cursor: pointer;
    font-size: 16px;
    height: 38px;
    padding: 4px;
    text-transform: uppercase;
    text-align: center;
    width: 100px;
`

const BtnBlueComponent = (props) => {
    return (
        <BtnBlue value={props.value}/>
    )
}

export default BtnBlueComponent;