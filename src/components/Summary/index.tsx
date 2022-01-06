import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import outcomeImg from "../../assets/income.svg";
import { useTrasactions } from "../../hooks/useTransactions";

export function Summary() {
  const { transactions } = useTrasactions();
  /* const totalDeposits = transactions.reduce((acumulador, transaction) => {
    if (transaction.type === "deposit") {
    
      return acumulador + transaction.amount;
    }
    return acumulador;
  }, 0);*/
  /* console.log(
    "transacao + " + transaction?.amount + "acumulador " + acumulador
  );*/
  const summary = transactions.reduce(
    (acumulador, transaction) => {
      if (transaction.type === "deposit") {
        console.log(
          "transation" +
            acumulador.deposit +
            "|" +
            transaction.amount +
            "\n" +
            "total" +
            acumulador.total +
            "|" +
            transaction.amount
        );

        acumulador.deposit += transaction.amount;
        acumulador.total += transaction.amount;

        console.log(
          "*|transation" +
            acumulador.deposit +
            "|" +
            transaction.amount +
            "\n" +
            "total" +
            acumulador.total +
            "|" +
            transaction.amount +
            "|*"
        );
      } else {
        acumulador.withdraws += transaction.amount;
        acumulador.total -= transaction.amount;
      }
      return acumulador;
    },
    {
      deposit: 0,
      withdraws: 0,
      total: 0,
    }
  );
  console.log(transactions);
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas"></img>
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposit)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas"></img>
        </header>
        <strong>
          -
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div className="hightlight-background">
        <header>
          <p>Total</p>
          <img src={outcome} alt="Total"></img>
        </header>
        <strong>
          {" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
