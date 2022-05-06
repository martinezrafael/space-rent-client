import styled from 'styled-components'

const BigTextWhiteComponent = styled.h2`
    font-size: 48px;
    color: #F9F9FA;
    margin: 0;
    padding: 0;
`
const upper = (str) => {
    return str.toUpperCase();
}

const BigTextWhite = (props) => {
    return (
        <BigTextWhiteComponent>{upper(props.value)}</BigTextWhiteComponent>
    )
}

export default BigTextWhite;