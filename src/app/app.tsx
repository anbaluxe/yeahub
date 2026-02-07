import { Filter } from "@/features/filter";
import { Header } from "@/features/header";
import { QuestionList } from "@/features/question";

export function App() {
  return (
    <div>
      <Header />
      <QuestionList />
      <Filter />
    </div>
  );
}
