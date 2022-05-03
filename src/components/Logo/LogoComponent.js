import Logo from '../../Images/logo.svg';
import styled from 'styled-components';


const LogoImage = styled.img`
    
`

const LogoComponent = () => {
    return (
        <LogoImage src={Logo}/>
    );
}

export default LogoComponent;