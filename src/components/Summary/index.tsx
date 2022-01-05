import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import outcomeImg from "../../assets/income.svg";
import { useContext } from "react";
import { TransactionContext } from "../../transactionsContext";

export function Summary() {
  const { transactions } = useContext(TransactionContext);
  console.log(transactions);
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas"></img>
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas"></img>
        </header>
        <strong>- R$500,00</strong>
      </div>
      <div className="hightlight-background">
        <header>
          <p>Total</p>
          <img src={outcome} alt="Total"></img>
        </header>
        <strong>R$1000,00</strong>
      </div>
    </Container>
  );
}
