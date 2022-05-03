import styled from 'styled-components';

const Label = styled.label`
    color: #F9F9FA;
    font-size: 16px;
`

const LabelComponent = (props) => {
    return(
        <Label>{props.value}</Label>
    )
}

export default LabelComponent;