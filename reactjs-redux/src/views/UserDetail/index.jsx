import { Button, Card, Form, Input } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


const { Meta } = Card;

const UserDetail = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [isEdit, setIsEdit] = useState(false);

    const [userEdit, setUserEdit] = useState({
        name: "",
        des: ""
    });

    useEffect(() => {
        console.log(userEdit);
    }, [userEdit])


    useEffect(() => {
        const getUserDetail = async () => {

            const userRes = await axios.get(`http://localhost:3000/users/${id}`)
            const user = userRes.data

            setUser(user)
        }

        getUserDetail()

    }, [id])

    const onFinish = async (values) => {
        await axios.put(`http://localhost:3000/users/${id}`, values)
        const userRes = await axios.get(`http://localhost:3000/users/${id}`)
        const user = userRes.data

        setUser(user)

        setIsEdit(false)


    };

    if (user == null) {
        return <div>loadding...</div>
    }

    return <div style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <Card
            hoverable
            style={{
                width: 240,
            }}
        >
            <Meta title={user.name} description={user.des} style={{
                marginBottom: "30px "
            }} />

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
                onFinish={onFinish}
                autoComplete="off"
            >

                {isEdit ? <>

                    <Form.Item
                        label="Name"
                        name="name"
                    >
                        <Input value={userEdit.name} onChange={(e) => {
                            setUserEdit(old => {

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
                        <Input value={userEdit.des} onChange={(e) => {
                            setUserEdit(old => {

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
                        isEdit ? <Button type="primary" htmlType="submit" >
                            SAVE
                        </Button> : <Button type="primary" onClick={(e) => {
                            e.preventDefault()
                            setIsEdit(!isEdit)
                        }}>
                            EDIT
                        </Button>
                    }

                </Form.Item>
            </Form>

        </Card>

    </div>
}

export default UserDetail