import { Card } from "antd"
import { useState } from "react";
import { useNavigate } from "react-router-dom"
const { Meta } = Card;

const UserAdmin = () => {
    const navigate = useNavigate()

    const [users, setUsers] = useState([
        {
            image: <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />,
            title: "chuong ",
            description: "I am a CEO",
            id: 1
        },
        {
            image: <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />,
            title: "duc anh",
            description: "I am a CEO",
            id: 2
        },
        {
            image: <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />,
            title: "viet anh",
            description: "I am a CEO",
            id: 3
        },
        {
            image: <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />,
            title: "hoan",
            description: "I am a CEO",
            id: 4
        },
        {
            image: <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />,
            title: "thai",
            description: "I am a CEO",
            id: 5
        }
    ])

    return <div style={{
        display: "flex"
    }}>

    {
        users.map(user=> {

            return <Card
                    key={user.id}
                    hoverable
                    style={{ width: 240 }}
                    cover={user.image}
                    onClick={() => {
                        navigate(`/admin/users/${user.id}`)
                    }}
                >
                    <Meta title={user.title} description={user.description} />
                </Card>
        })
    }
       
    </div>
}

export default UserAdmin