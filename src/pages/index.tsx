import { useEffect, useState } from "react";
import type { RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../store/slices/todoSlice";
import { generateId } from "@/helpers/helpers";
import { fetchTodos } from "@/store/thunks/todosThunks";
import { CardStatus } from "@/types/enums";

import Card from "@/components/card";
import Button from "@/components/button";
import AddCard from "@/components/addCard";

export default function Home() {
  // This is use to generate today's date
  const [date] = useState(new Date());

  const todos = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const handleAddCard = () => {
    const uniqueId = generateId();

    const newTodo = {
      id: uniqueId,
      status: CardStatus.Created,
      creationDate: new Date().toString(),
      dueDate: "",
      description: "",
      isChecked: false,
    } as const;

    dispatch(addTodo(newTodo));
  };

  const handleCardChange =
    (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateTodo({ id, description: event.target.value }));
    };

  const handleCalendarChange =
    (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const dueDate = event.target.value;
      dispatch(
        updateTodo({
          id,
          dueDate,
          status: dueDate ? CardStatus.Schedule : CardStatus.Created,
        })
      );
    };

  const handleCheck =
    (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const isChecked = event.target.checked;
      dispatch(
        updateTodo({
          id,
          isChecked,
          status: isChecked ? CardStatus.Checked : CardStatus.Created,
        })
      );
    };

  useEffect(() => {
    dispatch(fetchTodos() as any);
  }, []);

  return (
    <>
      <header className="bg-white shadow-md shadow-[rgba(0, 0, 0, 0.25)] ">
        <div className="flex justify-center items-center mx-8">
          <div className="flex justify-between items-center max-w-screen-lg w-full text-gray-900 py-4">
            <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight ">
              Cosas por hacer
            </h1>
            <p>Hoy: {date.toLocaleDateString("en-GB")}</p>
          </div>
        </div>
      </header>
      <main className="text-gray-900">
        <div className="flex justify-center items-center mx-8">
          <div className="flex flex-wrap justify-between items-center max-w-screen-lg w-full text-gray-900 py-4">
            <div className="flex justify-between items-center mshadow-md shadow-[rgba(0, 0, 0, 0.25)] text-gray-900 py-4 w-full mb-1">
              <div className="w-3/12">
                <Button className="w-full" color="primary">
                  Liberar Seleccionadas
                </Button>
              </div>
              <div className="w-4/6 flex">
                <Button
                  className="w-full hover:shadow-md"
                  color="tertiary"
                  iconName="mdi:filter-outline"
                >
                  Filtrar
                </Button>
                <Button
                  className="w-full hover:shadow-md"
                  color="tertiary"
                  iconName="fluent:arrow-sort-24-filled"
                >
                  Ordenar
                </Button>
              </div>
            </div>

            <section className="flex justify-between gap-y-3 flex-col w-full">
              {todos.map((todo) => (
                <Card
                  key={todo.id}
                  description={todo.description}
                  status={todo.status}
                  date={todo.dueDate.toString()}
                  isChecked={todo.isChecked}
                  id={todo.id}
                  handleCardChange={handleCardChange(todo.id)}
                  handleCalendarChange={handleCalendarChange(todo.id)}
                  handleCheck={handleCheck(todo.id)}
                />
              ))}

              <AddCard handleAddCard={handleAddCard} />
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
