import styled from 'styled-components';

const MediumtextWhite = styled.h2`
    color: #F9F9FA;
    font-size: 28px;
`

const TextUpper = (str) => {
    return str.toUpperCase();
}

const MediumTextWhiteComponent = (props) => {
    return (
        <MediumtextWhite>{TextUpper(props.content)}</MediumtextWhite>
    )
}

export default MediumTextWhiteComponent;