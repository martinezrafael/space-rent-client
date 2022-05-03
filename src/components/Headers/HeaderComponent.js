import styled from 'styled-components';
import LogoComponent from '../Logo/LogoComponent';

const Header = styled.header`
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 20px;
`

const HeaderComponent = () => {
    return(
        <Header>
            <LogoComponent />
        </Header>
    )
}

export default HeaderComponent;