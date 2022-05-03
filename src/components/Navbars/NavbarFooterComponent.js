import styled from 'styled-components';
import LogoSymbol from '../Logo/LogoSymbolComponent';

const NavLink = styled.a`
    color:#F9F9FA;
    font-size: 14px;
`

const ContainerList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const List = styled.ul`
    list-style: none;
    text-align-left
`


const items = ['SOBRE A SPACE RENT', 'LEIA NOSSO BLOG', 'TRABALHE CONOSCO', 'CONTATO'];


const NavBarFooterComponent = (props, index) => {
    return(
        <ContainerList>
        <List>
           {items.map(item => {
               return (
                   <li key={index}>
                       <NavLink href='#'>{item}</NavLink>
                   </li>
               )
           })}
       </List>
       <LogoSymbol />
        </ContainerList>
       
    )
}

export default NavBarFooterComponent;