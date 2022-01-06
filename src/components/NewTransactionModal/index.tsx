import { FormEvent, useState } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { Container, TransactionsTypeContainer, RadioBox } from "./style";
import { useTrasactions } from "../../hooks/useTransactions";
Modal.setAppElement("#root");
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  //const { createTransaction } = useContext(TransactionContext);
  const { createTransaction } = useTrasactions();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");
  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    await createTransaction({ title, amount, type, category });
    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposit");
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2> cadastrar transação</h2>
        <input
          placeholder="Titulo"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type={"number"}
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />
        <TransactionsTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type == "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="entrada"></img>
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type == "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="saida"></img>
            <span>Saida</span>
          </RadioBox>
        </TransactionsTypeContainer>

        <input
          placeholder="Categotia"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
