import styled from 'styled-components';

const BigtextRed = styled.h2`
    color: #E64E35;
    font-size: 42px;
`

const TextUpper = (str) => {
    return str.toUpperCase();
}

const BigTextRedComponent = (props) => {
    return (
        <BigtextRed>{TextUpper(props.content)}</BigtextRed>
    )
}

export default BigTextRedComponent;