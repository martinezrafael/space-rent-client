import styled from 'styled-components'

const BigTextRedComponent = styled.h2`
    font-size: 48px;
    color: #E64E35;
    margin: 0;
    padding: 0;
    tex-align: center;
`
const upper = (str) => {
    return str.toUpperCase();
}

const BigTextRed = (props) => {
    return (
        <BigTextRedComponent>{upper(props.value)}</BigTextRedComponent>
    )
}

export default BigTextRed;