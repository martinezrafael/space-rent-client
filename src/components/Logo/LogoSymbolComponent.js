import LogoSymbol from '../../Images/logo-symbol.png';
import styled from 'styled-components';

const LogoSymbolImage = styled.img`

`

const LogoSymbolComponent = () => {
    return (
        <LogoSymbolImage src={LogoSymbol}/>
    )
}

export default LogoSymbolComponent;