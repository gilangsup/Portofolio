import { Table, message } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import { Layout } from "antd";
import TableDashboard from "../../components/TableDashboard";

const Admin = () => {
  const [message, setMessage] = useState();

  const getMessages = async () => {

    try {
      const result = await axios.get(`http://localhost:3000/messages`);
      if (result) {
        setMessage(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

const deleteMessages = async (id) => {
    try {
        const result = await axios.delete(`http://localhost:3000/messages/${id}`)
        if (result) {
            console.log(result)
        }
    } catch (error) {
        console.log(error)
    }
}

  useEffect(() => {
    getMessages();
  }, []);

  console.log("ab", message);

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow">
        {message ? <TableDashboard datas={message} onClick={(id) => deleteMessages(id)}/> : <div>abcd</div>}
      </main>
    </div>
  );
};

export default Admin;
