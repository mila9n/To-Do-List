import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, completedTodo } from "../redux/features/ToDo-feature";
import Task from "./Task";
import Filters from "./Filters";
import { ContainerStyle } from "./styles/container.styled";
import { TodosStyle } from "./styles/Todos.styled";
import FilterData from "./FilterData";

const Todos = () => {
  const todo = useSelector((state) => state.todo.todos);
  const count = useSelector((state) => state.todo.todos);

  const dispatch = useDispatch();

  const [filteredList, setFilteredList] = React.useState(todo);
  const [filterName, setFilterName] = React.useState(FilterData);
  const [itemLeft, setItemLeft] = React.useState("");
  console.log(itemLeft);

  React.useEffect(() => {
    setFilteredList(todo);
    const itemLeft = todo.filter((item) => {
      return item.completed === false;
    });
    setItemLeft(itemLeft.length);
  }, [todo]);

  const handleComplete = (index) => {
    dispatch(completedTodo({ indexValue: index }));
  };

  const handleDelete = (index) => {
    dispatch(deleteTodo({ start: index, end: 1 }));
  };

  const handleFilterClick = (e, index) => {
    const selectedFilter = e.target.innerHTML;
    const newFilter = todo.filter((item) => {
      if (selectedFilter === "All") {
        return item;
      } else if (selectedFilter === "Completed") {
        return item.completed == true;
      } else if (selectedFilter === "Active") {
        return item.completed == false;
      }
    });
    setFilteredList(newFilter);
    for (let data of FilterData) {
      data.isSelected = false;
    }
    const newdata = [...FilterData];
    newdata[e.target.id].isSelected = true;
    setFilterName(newdata);
  };

  const data = filterName.map((item, index) => {
    return (
      <span
        onClick={handleFilterClick}
        key={item.id}
        className={item.isSelected ? "selected" : null}
        id={index}
      >
        {item.text}
      </span>
    );
  });

  const lists =
    count <= 0
      ? null
      : filteredList.map((item, index) => {
          return (
            <Task
              key={index}
              handleComplete={() => handleComplete(index)}
              completed={item.completed}
              task={item.text}
              handleDelete={() => handleDelete(index)}
            />
          );
        });

  return (
    <TodosStyle>
      {count <= 0 ? null : (
        <ContainerStyle>
          {lists}
          <Filters data={data} itemLeft={itemLeft} />
        </ContainerStyle>
      )}
    </TodosStyle>
  );
};

export default Todos;
