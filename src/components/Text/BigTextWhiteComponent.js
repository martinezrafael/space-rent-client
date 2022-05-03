import styled from 'styled-components';

const BigtextWhite = styled.h2`
    color: #F9F9FA;
    font-size: 42px;
`

const TextUpper = (str) => {
    return str.toUpperCase();
}

const BigTextWhiteComponent = (props) => {
    return (
        <BigtextWhite>{TextUpper(props.content)}</BigtextWhite>
    )
}

export default BigTextWhiteComponent;