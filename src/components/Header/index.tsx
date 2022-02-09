import { Container, Head, Logo, Button, Lupa, SearchContainer, SearchInput } from './styles'

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
                    <Button onClick={() => {}}>
                        <Lupa src={lupa} alt="lupa"/>
                    </Button>
                </SearchContainer>
            </Container>
        </>
    );
}