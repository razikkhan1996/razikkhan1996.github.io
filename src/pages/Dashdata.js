import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import {Dashlist} from './Dashlist';

const Dashdata = () => {
    const [item, setitem] = useState([]);
  useEffect(() => {
    async function getdata() {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
    //   console.log(res.data);
      setitem(res.data);
    }

    getdata();
  });

  const deleteitem=(id)=>
  {
    console.log('delete triggered');
    setitem((preval)=>
    {
        return preval.filter((arrel,index)=>
        {
            return index !==id;
        });
    });

  };

  return (
    <>
       <Table responsive="lg">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Title</th>
            <th>Content</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {item.map((val,index) => {
            return (
                // <tr>
                //   <td>{val.id}</td>
                //   <td>{val.name}</td>
                //   <td>{val.email}</td>
                // </tr>

                <Dashlist key={index} id={index} text={val} onSelect={deleteitem}/>
            );
          })}
        </tbody>
      </Table>

    </>
  );

}


export default Dashdata;
