import { Button, Divider, Form, Input, Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserManagement = () => {
    const [userState, setUserState] = useState([])

    const [isCreate, setIsCreate] = useState(false)

    const [userCreate, setUserCreate] = useState({
        name: "",
        des: ""
    });


    const hanldeDelete = async (id) => {
        await axios.delete(`http://localhost:3000/users/${id}`)
        const userRes = await axios.get("http://localhost:3000/users")

        const users = userRes.data

        setUserState(users)
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (value, record) => {
                return <Link to={`/admin/users/${record.id}`} >{value}</Link>
            }
        },
        {
            title: 'Description',
            dataIndex: 'des',
            key: 'des',
        },
        {
            title: 'ACTION',
            key: 'action',
            render: (_, record) => {
                return <div>
                    <Button onClick={() => hanldeDelete(record.id)}>Delete</Button>
                </div>
            }
        }
    ];


    useEffect(() => {
        const fetUser = async () => {
            const userRes = await axios.get("http://localhost:3000/users")

            const users = userRes.data

            setUserState(users)
        }

        fetUser()

    }, [])

    const handleSubmit = async (values) => {
        await axios.post("http://localhost:3000/users", values)
        const userRes = await axios.get("http://localhost:3000/users")

        const users = userRes.data

        setUserState(users)
        setIsCreate(false)
    }

    return <div>
        <Table columns={columns} dataSource={userState} />

        <Divider></Divider>


        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={handleSubmit}
            autoComplete="off"
        >

            {isCreate ? <>

                <Form.Item
                    label="Name"
                    name="name"
                >
                    <Input value={userCreate.name} onChange={(e) => {
                        setUserCreate(old => {

                            return {
                                ...old,
                                name: e.target.value
                            }
                        })
                    }} />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="des"
                >
                    <Input value={userCreate.des} onChange={(e) => {
                        setUserCreate(old => {

                            return {
                                ...old,
                                des: e.target.value
                            }
                        })
                    }} />
                </Form.Item>
            </> : null}

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                {
                    isCreate ? <Button type="primary" htmlType="submit" >
                        SAVE
                    </Button> : <Button type="primary" onClick={(e) => {
                        e.preventDefault()
                        setIsCreate(!isCreate)
                    }}>
                        Create
                    </Button>
                }

            </Form.Item>
        </Form>
    </div>
}


export default UserManagement