import { 
    Container,
    Title,
    AddNewCard,
    CardsContainer,
    Card,
    Image,
    Name,
    ActionsContainer,
    ActionDelete,
    ActionEdit,
    Icon,
    TitleAction
} from "./styles";

import trash from "../../assets/Icon-trash.svg";
import pencil from "../../assets/Icon-edit.svg";

export function Cards() {
    return(
        <div className="main">
            <Container>
                <Title>Resultado de busca</Title>
                <AddNewCard>Novo Card</AddNewCard>
            </Container>

            <CardsContainer>
                <Card>
                    <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="pokemon image" />
                    <Name>Ditto</Name>
                    <ActionsContainer>
                        <ActionDelete>
                            <Icon src={trash} alt="trash icon"/>
                            <TitleAction>Excluir</TitleAction>
                        </ActionDelete>

                        <ActionEdit>
                            <Icon src={pencil} alt="trash icon"/>
                            <TitleAction>Editar</TitleAction>
                        </ActionEdit>
                    </ActionsContainer>
                </Card>

                <Card>
                    <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="pokemon image" />
                    <Name>Ditto</Name>
                    <ActionsContainer>
                        <ActionDelete>
                            <Icon src={trash} alt="trash icon"/>
                            <TitleAction>Excluir</TitleAction>
                        </ActionDelete>

                        <ActionEdit>
                            <Icon src={pencil} alt="trash icon"/>
                            <TitleAction>Editar</TitleAction>
                        </ActionEdit>
                    </ActionsContainer>
                </Card>

                <Card>
                    <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="pokemon image" />
                    <Name>Ditto</Name>
                    <ActionsContainer>
                        <ActionDelete>
                            <Icon src={trash} alt="trash icon"/>
                            <TitleAction>Excluir</TitleAction>
                        </ActionDelete>

                        <ActionEdit>
                            <Icon src={pencil} alt="trash icon"/>
                            <TitleAction>Editar</TitleAction>
                        </ActionEdit>
                    </ActionsContainer>
                </Card>

                <Card>
                    <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="pokemon image" />
                    <Name>Ditto</Name>
                    <ActionsContainer>
                        <ActionDelete>
                            <Icon src={trash} alt="trash icon"/>
                            <TitleAction>Excluir</TitleAction>
                        </ActionDelete>

                        <ActionEdit>
                            <Icon src={pencil} alt="trash icon"/>
                            <TitleAction>Editar</TitleAction>
                        </ActionEdit>
                    </ActionsContainer>
                </Card>

                <Card>
                    <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="pokemon image" />
                    <Name>Ditto</Name>
                    <ActionsContainer>
                        <ActionDelete>
                            <Icon src={trash} alt="trash icon"/>
                            <TitleAction>Excluir</TitleAction>
                        </ActionDelete>

                        <ActionEdit>
                            <Icon src={pencil} alt="trash icon"/>
                            <TitleAction>Editar</TitleAction>
                        </ActionEdit>
                    </ActionsContainer>
                </Card>

                <Card>
                    <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="pokemon image" />
                    <Name>Ditto</Name>
                    <ActionsContainer>
                        <ActionDelete>
                            <Icon src={trash} alt="trash icon"/>
                            <TitleAction>Excluir</TitleAction>
                        </ActionDelete>

                        <ActionEdit>
                            <Icon src={pencil} alt="trash icon"/>
                            <TitleAction>Editar</TitleAction>
                        </ActionEdit>
                    </ActionsContainer>
                </Card>

                <Card>
                    <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="pokemon image" />
                    <Name>Ditto</Name>
                    <ActionsContainer>
                        <ActionDelete>
                            <Icon src={trash} alt="trash icon"/>
                            <TitleAction>Excluir</TitleAction>
                        </ActionDelete>

                        <ActionEdit>
                            <Icon src={pencil} alt="trash icon"/>
                            <TitleAction>Editar</TitleAction>
                        </ActionEdit>
                    </ActionsContainer>
                </Card>

                <Card>
                    <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="pokemon image" />
                    <Name>Ditto</Name>
                    <ActionsContainer>
                        <ActionDelete>
                            <Icon src={trash} alt="trash icon"/>
                            <TitleAction>Excluir</TitleAction>
                        </ActionDelete>

                        <ActionEdit>
                            <Icon src={pencil} alt="trash icon"/>
                            <TitleAction>Editar</TitleAction>
                        </ActionEdit>
                    </ActionsContainer>
                </Card>
            </CardsContainer>
        </div>
    );
}