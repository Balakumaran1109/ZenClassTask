import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Home() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    handleInput();
  }, []);

  const handleInput = () => {
    axios
      .get("https://65f1213ada8c6584131cea32.mockapi.io/users")
      .then((result) => {
        setColumns(Object.keys(result.data[0]));
        setRecords(result.data);
      })
      .catch((err) => {
        err;
      });
  };
  return (
    <div>
      <div className="container border border-dark mt-5 p-3 bg-light">
        <div className="text-center">
          <h4>USER DETAILS</h4>
        </div>
        <div className="text-end">
          <Link to="/create" className="btn btn-primary">
            Add +
          </Link>
        </div>
        <br></br>
        <table className="table table-bordered">
          <thead className="text-center table-secondary">
            <tr>
              {columns.map((data, index) => (
                <th key={index}>
                  {data === "id"
                    ? data.replace("id", "NAME")
                    : data.toUpperCase() && data === "name"
                    ? data.replace("name", "ID")
                    : data.toUpperCase()}
                </th>
              ))}
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {records.map((data, index) => (
              <tr key={index}>
                <td className="text-center">{data.id}</td>
                <td className="text-center">{data.name}</td>
                <td className="text-center">{data.username}</td>
                <td className="text-center">{data.email}</td>
                <td>
                  <p>
                    {data?.address?.street} {data?.address?.suite}
                    {data?.address?.city}
                  </p>
                  <p>Zipcode : {data?.address?.zipcode}</p>
                </td>
                <td className="text-center">{data.phone}</td>
                <td className="text-center">{data.website}</td>
                <td>
                  <p>Name: {data?.company?.name}</p>
                  <p>Role: {data?.company?.catchPhrase}</p>
                  <p>Details: {data?.company?.bs}</p>
                </td>

                <td className="text-center">
                  <Link
                    to={`/update/${data.id}`}
                    className="btn btn-success m-2"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(data.id)}
                    className="btn btn-danger m-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  function handleDelete(id) {
    const conf = window.confirm("Do you want to delete the record ?");

    if (conf) {
      axios
        .delete("https://65f1213ada8c6584131cea32.mockapi.io/users/" + id)
        .then((res) => {
          alert("Record deleted successfully");
          handleInput();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}

export default Home;
