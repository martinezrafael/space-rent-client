import styled from 'styled-components';

const InputPassword = styled.input`
    background-color: #F9F9FA;
    border: none;
    border-radius: 4px;
    height: 38px;
    margin-bottom: 12px;
    padding: 4px;
    width: 100%;
`

const InputPasswordComponent = (props) => {
    return (
        <InputPassword type='password' placeholder={props.placeholder}/>
    )
}

export default InputPasswordComponent;