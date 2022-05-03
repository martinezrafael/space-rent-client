import styled from 'styled-components';

const TextArea = styled.textarea`
    background-color: #F9F9FA;
    border: none;
    border-radius: 4px;
    height: 120px;
    margin-bottom: 12px;
    padding: 4px;
    width: 100%;
`

const TextAreaComponent = (props) => {
    return(
        <TextArea placeholder={props.placeholder}></TextArea>
    )
}

export default TextAreaComponent;