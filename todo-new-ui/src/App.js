import 'antd/dist/reset.css';
import './App.css';
import logo from './logo.svg';
import { Button, Input, Space, Table, Tag } from 'antd';
import { useRef, useState } from 'react';


function App() {

  const inputRef = useRef();
  const [dataTable, setDataTable] = useState([
    {
      key: 1,
      title: 'John Brown',
      status: ['done'],
      isEdit: false
    },
    {
      key: 2,
      title: 'Jim Green',
      status: ['doing'],
      isEdit: false
    },
    {
      key: 3,
      title: 'Joe Black',
      status: ['doing'],
      isEdit: false
    },
  ])

  
const columns = [
  {
    title: 'Tile',
    dataIndex: 'title',
    key: 'title',
    render: (text, record) => <Input onKeyPress={(e)=>{
      if (e.key === 'Enter') {
        e.target.blur()
        setDataTable(old => {
          const newData = dataTable.map(data=> {
            if (data.key === record.key ) {
              data.isEdit = false;
            }
            return data
          })
          return newData
        })
      }
    }} onChange={(e)=> {
      setDataTable(old => {
        const newData = dataTable.map(data=> {
          if (data.key === record.key ) {
            data.title = e.target.value;
          }
          return data
        })
        return newData
      })


    }} value={text} disabled={!record.isEdit}/>,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (_, {status}) => (
      <>
        {status && status.map((tag) => {
          return (
            <Tag key={tag} color='red'>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <button onClick={()=> {
          console.log(record);
          setDataTable(old=> {
            const newData = dataTable.map((data) => {
              if (data.key === record.key) {
                data.isEdit = !data.isEdit;
              }
              return data
            })

            return newData
          })



        }}>Edit</button>
        <button onClick={()=> {
            setDataTable(old=> {
              const newData = dataTable.filter(item=> item.key !== record.key)

              return newData
            })
        }}>Delete</button>
      </Space>
    ),
  },
];

  const hanldeSubmit = ()=> {
    console.log(inputRef.current.input.value);
    setDataTable(old=> {
      return [
        ...old, {
        key: old.length + 1,
        title: inputRef.current.input.value,
        status: ['doing'],
      }];
    })
  }

  return (
    <div className="App">
      <Input placeholder="Basic usage" ref={inputRef} />
      <Button type="primary" onClick={hanldeSubmit}>Submit</Button>
      <Table columns={columns} dataSource={dataTable} />
    </div>
  );
}

export default App;
