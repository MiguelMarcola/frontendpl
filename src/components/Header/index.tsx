import { Container, Head, Logo, Lupa, SearchContainer, SearchInput } from './styles'

import logo from '../../assets/logo-teste.svg'
import lupa from '../../assets/lupa.svg'


export function Header() {
    return(
        <>
            <Head>
                <Logo src={logo} alt="logo"/>
            </Head>

            <Container>
                <SearchContainer>
                    <SearchInput type="text" placeholder="Digite aqui sua busca..." />
                    <Lupa src={lupa} alt="lupa" onClick={() => {}}/>
                </SearchContainer>
            </Container>
        </>
    );
}