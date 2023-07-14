import AddTodo from "@/components/add-todo";
import {Todos} from "@/components/todos";
import Navbar from "@/components/navbar";
import "./globals.css";

const Page = () => {
    return (
      <main>
          <h2>Task Management App </h2>
          <Navbar />
          <AddTodo />
          <Todos />
      </main>
    );
};

export default Page;