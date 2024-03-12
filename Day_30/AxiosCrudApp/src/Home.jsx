import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link, useNavigate} from 'react-router-dom'

function Home() {

    const [columns, setColumns] = useState([])
    const [records, setRecords] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((result)=>{
            setColumns(Object.keys(result.data[0]))
            setRecords(result.data)
        })
        .catch((err)=>{err})
    },[])
  return (
    <div>
        <div className="container mt-5">
            <div className="text-end">
                <Link to="/create" className='btn btn-primary'>Add +</Link>
            </div>
            <table className="table">
                <thead>
                    <tr>
                    {columns.map((data, index)=>(
                        <th key={index}>{data.toUpperCase()}</th>
                    ))}
                    <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((data, index)=>(
                        <tr key={index}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.username}</td>
                            <td>{data.email}</td>
                            <td>
                                <p>{data.address.street} ,
                                   {data.address.suite} ,
                                   {data.address.city}</p>
                                <p>Zipcode : {data.address.zipcode}</p>
                            </td>
                            <td>{data.phone}</td>
                            <td>{data.website}</td>
                            <td>{data.company.name}</td>
                            <td>
                                <Link to={`/update/${data.id}`} className='btn btn-success m-2'>Update</Link>
                                <button onClick={()=>handleDelete(data.id)} className='btn btn-danger m-2'>Delete</button>
                            </td>
                        </tr>
                    ))}  
                </tbody>
            </table>
        </div>
    </div>
  )

  function handleDelete(id){
    const conf = window.confirm("Do you want to delete the record ?")

    if(conf){
        axios.delete('https://jsonplaceholder.typicode.com/users/' + id)
        .then((res) => {
            alert("Record deleted successfully");
            navigate("/")
        })
        .catch((err) => {
            console.log(err)
        })
    }
  }
}

export default Home