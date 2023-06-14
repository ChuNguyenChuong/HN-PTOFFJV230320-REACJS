import { Card } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const { Meta } = Card;

const UserView = () => {
    const dispatch = useDispatch()
    const usersList = useSelector((state) => state.usersStore.usersList)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(function (json) {
                dispatch({
                    type: "SET_USERS_FROM_API",
                    payload: json
                })
            })
    }, [])

    console.log(usersList);
    return <div style={{
        display: "flex",
        flexWrap : "wrap"
    }}>
        {
           usersList.map(user => {
            return <Card
                key={user.id}
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title={user.name} description={`${user.username} - ${user.phone}`} />
            </Card>
        })
            
        }
    </div>
}

export default UserView