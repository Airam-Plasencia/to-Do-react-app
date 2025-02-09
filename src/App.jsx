import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; 
import AddTaskForm from './components/AddTaskForm.jsx';
import UpdateForm from './components/UpdateForm.jsx';
import ToDo from './components/ToDo.jsx';
import '../src/App.css'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ItemDetails from "./pages/ItemDetails";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Error404 from './pages/Error404';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  
  const [toDo, setToDo] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  const location = useLocation(); 

  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false }
      setToDo([...toDo, newEntry])
      setNewTask('');
    }
  }

  const deleteTask = (id) => {
    let newTasks = toDo.filter(task => task.id !== id)
    setToDo(newTasks);
  }

  const markDone = (id) => {
    let newTask = toDo.map(task => {
      if (task.id === id) {
        return ({ ...task, status: !task.status })
      }
      return task;
    })
    setToDo(newTask);
  }

  const cancelUpdate = () => {
    setUpdateData('');
  }

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);
  }

  const updateTask = () => {
    let filterRecords = [...toDo].filter(task => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData]
    setToDo(updatedObject);
    setUpdateData('');
  }
  const isErrorRoute = location.pathname === '*';
  return (
    <div className="App">
     
     {!isErrorRoute && <Navbar />}
      
      
      {location.pathname !== '/About' && !isErrorRoute && (
        <>
          <br /><br />
          <h2>To Do List App</h2>
          <br /><br />
          
          {updateData && updateData ? (
            <UpdateForm
              updateData={updateData}
              changeTask={changeTask}
              updateTask={updateTask}
              cancelUpdate={cancelUpdate}
            />
          ) : (
            <AddTaskForm
              newTask={newTask}
              setNewTask={setNewTask}
              addTask={addTask}
            />
          )}
          
          {toDo && toDo.length ? '' : 'No Tasks...'}
          
          <ToDo
            toDo={toDo}
            markDone={markDone}
            setUpdateData={setUpdateData}
            deleteTask={deleteTask}
          />
        </>
      )}

      
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/About" element={<About />} />
        <Route path="/item/:id" element={<ItemDetails />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

      {!isErrorRoute && <Footer />}
    </div>
  );
}

export default App;