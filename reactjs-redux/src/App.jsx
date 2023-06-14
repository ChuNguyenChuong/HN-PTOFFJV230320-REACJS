import 'antd/dist/reset.css';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const userStore = useSelector((state) => state.usersStore)

  console.log(userStore);

  return (
    <>
      appp
    </>
  )
}

export default App
