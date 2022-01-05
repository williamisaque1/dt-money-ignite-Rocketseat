import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";
interface HeadersProps {
  onOpenNewTransactionModal: () => void;
}
export function Header({ onOpenNewTransactionModal }: HeadersProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money"></img>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
