import styled from 'styled-components'

const MediumTexTWhiteComponent = styled.h2`
    font-size: 22px;
    color: #F9F9FA;
    tex-align: center;
`
const upper = (str) => {
    return str.toUpperCase();
}

const MediumTextWhite = (props) => {
    return (
        <MediumTexTWhiteComponent>{upper(props.value)}</MediumTexTWhiteComponent>
    )
}

export default MediumTextWhite;