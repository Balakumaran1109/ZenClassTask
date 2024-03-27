import React, { useState } from "react";

function Todo() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleClickAdd = () => {
    if (name.trim() !== "" && description.trim() !== "") {
      setDetails([...details, { name, description, status: "notcompleted" }]);
      setName("");
      setDescription("");
      event.preventDefault();
    }
  };

  const handleClickDelete = (index) => {
    const deleteItem = [...details];
    deleteItem.splice(index, 1);
    setDetails(deleteItem);
    console.log(index);
  };

  const handleClickEdit = (value, index) => {
    const deleteItem = [...details];
    deleteItem.splice(index, 1);
    setDetails(deleteItem);
    setName(value.name);
    setDescription(value.description);
  };

  const handleStatusChange = (index, newStatus) => {
    const updatedTodos = [...details];
    updatedTodos[index].status = newStatus;
    setDetails(updatedTodos);
  };

  const filterTodos = () => {
    if (filter === "all") {
      return details;
    } else if (filter === "completed") {
      return details.filter((todo) => todo.status === "completed");
    } else if (filter === "notcompleted") {
      return details.filter((todo) => todo.status === "notcompleted");
    }
  };

  return (
    <>
      <div class="container mt-5 border border-dark p-5 ">
        <div>
          <div className="text-center">
            <h3>My Todo</h3>
          </div>
          <br></br>
          <br></br>
          <form class="form-inline">
            <div className="col-5 text-center">
              <input
                value={name}
                size="40"
                type="text"
                class="form-control mr-sm-2 "
                id="todoName"
                placeholder="Todo Name"
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>

            <div className="col-5 text-center">
              <input
                value={description}
                size="40"
                type="text"
                class="form-control mr-sm-2 "
                id="todoDescription"
                placeholder="Todo Description"
                onChange={(e) => setDescription(e.target.value)}
              ></input>
            </div>
            <div className="col-2 text-center">
              <button onClick={handleClickAdd} class="btn btn-primary">
                Add Todo
              </button>
            </div>
          </form>
        </div>
        <br></br>
        <br></br>
        <div>
          <div className="d-flex">
            <div class="p-2">
              <h4>My Todos</h4>
            </div>
            <div class="ml-auto p-2">
              <h4>Status Filter : </h4>
              <div>
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="all">All</option>
                  <option value="completed">Completed</option>
                  <option value="notcompleted">Not Completed</option>
                </select>
              </div>
            </div>
          </div>
          <br></br>

          <div class="row">
            {filterTodos().map((value, index) => (
              <div className="col-4" id="column">
                <div class="card text-dark bg-light mb-3">
                  <div class="card-body">
                    <h6 class="card-text">Name : {value.name}</h6>
                    <br></br>
                    <p class="card-text">Description : {value.description}</p>
                    <br></br>
                    <div>
                      <span>Status : </span>
                      <select
                        className="bg bg-primary"
                        value={value.status}
                        onChange={(e) =>
                          handleStatusChange(index, e.target.value)
                        }
                      >
                        <option className="option" value="completed">
                          Completed
                        </option>
                        <option className="option" value="notcompleted">
                          Not Completed
                        </option>
                      </select>{" "}
                    </div>
                    <br></br>{" "}
                    <div className="text-center">
                      <button
                        className="btn btn-primary m-2"
                        onClick={() => handleClickEdit(value, index)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger m-2"
                        onClick={() => handleClickDelete(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
