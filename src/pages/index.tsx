import { useEffect, useRef, useState } from "react";
import type { RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { generateId } from "@/helpers/helpers";
import {
  addNewTodo,
  fetchTodos,
  deleteTodo,
  updateTodo,
} from "@/store/thunks/todosThunks";
import { CardStatus } from "@/types/enums";

import Card from "@/components/card";
import Button from "@/components/button";
import AddCard from "@/components/addCard";
import DropdownMenu from "@/components/dropdown/dropdownMenu";
import { DropdownMenuItemProps } from "@/components/dropdown/dropdownMenuItem";
import {
  sortByCreationDate,
  sortByDueDate,
  sortByStatus,
} from "@/store/slices/todoSlice";

export default function Home() {
  // This is use to generate today's date
  const [date] = useState(new Date());
  const [showOrder, setShowOrder] = useState(false);

  const orderRef = useRef<HTMLDivElement>(null);

  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddCard = () => {
    const uniqueId = generateId();

    const newTodo = {
      id: uniqueId,
      status: CardStatus.Created,
      creationDate: new Date(),
      dueDate: "",
      description: "",
      isChecked: false,
    } as const;

    dispatch(addNewTodo(newTodo) as any);
  };

  const handleDescriptionChange =
    (id: string) => (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const updatedTodo = {
        id,
        description: event.target.value,
      };
      dispatch(updateTodo(updatedTodo) as any);
    };

  const handleCalendarChange =
    (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const dueDate = event.target.value;
      dispatch(
        updateTodo({
          id,
          dueDate,
          status: dueDate ? CardStatus.Schedule : CardStatus.Created,
        }) as any
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
        }) as any
      );
    };

  const handleDeleteCard = (id: string) => {
    dispatch(deleteTodo(id) as any);
  };

  const handleSortByCreationDate = () => {
    dispatch(sortByCreationDate());
  };
  const handleSortByDueDate = () => {
    dispatch(sortByDueDate());
  };
  const handleSortByStatus = () => {
    dispatch(sortByStatus());
  };

  const listMenuOrder: DropdownMenuItemProps[] = [
    {
      title: "Fecha de creación",
      handleButton: handleSortByCreationDate,
    },
    {
      title: "Fecha de vencimiento",
      handleButton: handleSortByDueDate,
    },
    {
      title: "Estado de las tarjetas",
      handleButton: handleSortByStatus,
    },
  ];

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
                  Liberar Tareas listas
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

                <div
                  className="w-full z-50"
                  ref={orderRef}
                  onClick={() =>
                    setShowOrder((prevShowOrder) => !prevShowOrder)
                  }
                >
                  <Button
                    className="w-full hover:shadow-md"
                    color="tertiary"
                    iconName="fluent:arrow-sort-24-filled"
                  >
                    Ordenar
                  </Button>
                  <DropdownMenu
                    parentRef={orderRef}
                    isVisible={showOrder}
                    items={listMenuOrder}
                  />
                </div>
              </div>
            </div>

            <section className="flex justify-between gap-y-3 flex-col w-full">
              {todos.map((todo) => (
                <Card
                  key={todo.id}
                  description={todo.description}
                  status={todo.status}
                  date={todo.dueDate}
                  isChecked={todo.isChecked}
                  id={todo.id}
                  handleDescriptionChange={handleDescriptionChange(todo.id)}
                  handleCalendarChange={handleCalendarChange(todo.id)}
                  handleCheck={handleCheck(todo.id)}
                  handleDelete={() => handleDeleteCard(todo.id)}
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
