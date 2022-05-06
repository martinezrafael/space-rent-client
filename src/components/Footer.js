import styled from 'styled-components';
import Symbol from './Symbol';

const FooterComponent = styled.footer`
    width: 100%;
    background-color: #414141;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
`

const Copyright = styled.p`
    font-size: 14px;
    color: #F9F9FA;
`

const Footer = () => {
    return (
        <FooterComponent>
            <Symbol />
            <Copyright>&copy; Todos os direitos reservados - Space Rent - 2022</Copyright>
        </FooterComponent>
    )
}

export default Footer;