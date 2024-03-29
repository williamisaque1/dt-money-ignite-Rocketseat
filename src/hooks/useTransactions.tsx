import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createAt: string;
}
type TransactionInput = Omit<Transaction, "id" | "createAt">;

interface TrasactionsProviderProps {
  children: ReactNode;
}
interface TransactionsContexData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}
const TransactionContext = createContext<TransactionsContexData>(
  {} as TransactionsContexData
);

export function TransactionsProvider({ children }: TrasactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);
  async function createTransaction(transactionInput: TransactionInput) {
    // const data = { title, value, category, type };
    const response = await api.post("/transactions", {
      ...transactionInput,
      createAt: new Date(),
    });
    const { transaction } = response.data;
    setTransactions([...transactions, transaction]);
  }
  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}
export function useTrasactions() {
  const context = useContext(TransactionContext);
  return context;
}
