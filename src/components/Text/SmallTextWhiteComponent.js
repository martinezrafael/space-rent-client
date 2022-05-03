import styled from 'styled-components';

const SmalltextWhite = styled.p`
    color: #F9F9FA;
    font-size: 16px;
`

const TextUpper = (str) => {
    return str.toUpperCase();
}

const SmallTextWhiteComponent = (props) => {
    return (
        <SmalltextWhite>{TextUpper(props.content)}</SmalltextWhite>
    )
}

export default SmallTextWhiteComponent;