import styled from 'styled-components';

const SmalltextRed = styled.p`
    color: #E64E35;
    font-size: 16px;
`

const TextUpper = (str) => {
    return str.toUpperCase();
}

const SmallTextRedComponent = (props) => {
    return (
        <SmalltextRed>{TextUpper(props.content)}</SmalltextRed>
    )
}

export default SmallTextRedComponent;