import styled from 'styled-components';

const MediumtextRed = styled.h2`
    color: #E64E35;
    font-size: 28px;
`

const TextUpper = (str) => {
    return str.toUpperCase();
}

const MediumTextRedComponent = (props) => {
    return (
        <MediumtextRed>{TextUpper(props.content)}</MediumtextRed>
    )
}

export default MediumTextRedComponent;