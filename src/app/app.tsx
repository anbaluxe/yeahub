import { Filter } from "@/features/filter";
import { Header } from "@/features/header";
import { QuestionList } from "@/features/question";
import { SideBar } from "@/features/sideBar";

export function App() {
  return (
    <div>
      <Header />
      <SideBar />
      <div className="content">
        <QuestionList />
        <Filter />
      </div>
    </div>
  );
}
