import styled from 'styled-components';

const InputText = styled.input`
    background-color: #F9F9FA;
    border: none;
    border-radius: 4px;
    height: 38px;
    margin-bottom: 12px;
    padding: 4px;
    width: 100%;
`

const InputTextComponent = (props) => {
    return (
        <InputText type='text' placeholder={props.placeholder}/>
    )
}

export default InputTextComponent;