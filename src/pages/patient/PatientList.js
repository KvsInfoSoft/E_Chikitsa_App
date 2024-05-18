import { Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

// eslint-disable-next-line no-empty-pattern
function PatientList({}) {
  const dataSource = [
    {
      key: '1',
      name: 'Sumit',
      age: 32,
      section: 'OPD',
      address: 'Sigra'
    },
    {
      key: '2',
      name: 'Abhishek',
      age: 42,
      section: 'ICU',
      address: 'Ramnagar'
    }
  ];

  const columns = [
    {
      title: 'Patient Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: 'Section',
      dataIndex: 'section',
      key: 'section'
    },
    {
      title: 'Action',
      dataIndex: 'address',
      key: 'address',
      render: (_, data) => {
        console.log(data);

        return (
          <>
            {/* <EditOutlined onClick ={showModal}/> */}
            <li>
              <EditOutlined />
            </li>
            <li>
              <DeleteOutlined />
            </li>
          </>
        );
      }
    }
  ];
  return (
    <>
      <Table dataSource={dataSource} columns={columns} />;
    </>
  );
}
export default PatientList;
