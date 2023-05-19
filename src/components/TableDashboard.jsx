import { Space, Table, Tag } from "antd";
const { Column, ColumnGroup } = Table;
const data = [
  {
    key: "1",
    firstName: "John",
    lastName: "Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    firstName: "Jim",
    lastName: "Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const TableDashboard = ({datas, onClick}) => {

  const onDelete = (id) => {
    onClick(id)
  }

 return (
  <Table dataSource={datas}>
    <Column title="Name" dataIndex="name" key="name"    />
    <Column title="Email" dataIndex="email" key="age" />
    <Column title="Message" dataIndex="message" key="message" />
    <Column
      title="Action"
      key="action"
      render={(_, record) => (
        <Space size="middle">
          <a onClick={(id) => onDelete(id)}>Delete</a>
        </Space>
      )}
    />
  </Table>
)}
export default TableDashboard;
