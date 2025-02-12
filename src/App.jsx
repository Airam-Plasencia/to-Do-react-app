import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AddTaskForm from './components/AddTaskForm.jsx';
import UpdateForm from './components/UpdateForm.jsx';
import ToDo from './components/ToDo.jsx';
import '../src/App.css'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Sidebar from './components/Sidebar.jsx';
import ItemDetails from "./pages/ItemDetails";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Error404 from './pages/Error404';
import taskList from '../tasks.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ReactSwitch from 'react-switch';

function App() {

  const [toDo, setToDo] = useState(taskList);
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');
  const [checked, setChecked] = useState(false)
  const handleSwitch = (nextChecked) => {
    setChecked(nextChecked)
  }

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
        return { ...task, status: !task.status }; 
      }
      return task;
    });
    setToDo(newTask);
  };

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
      <Sidebar />

      {!isErrorRoute && <Navbar />}
      <div className="main-content">

        <Routes>
        <Route
            path="/"
            element={
              <>
                <h2 className="App-list">To Do List App</h2>
                {updateData ? (
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
                <ToDo
                  toDo={toDo}
                  markDone={markDone}
                  setUpdateData={setUpdateData}
                  deleteTask={deleteTask}
                />
              </>
            }
          />
          <Route path="/About" element={<About />} />
          <Route path="/item/:id" element={<ItemDetails toDo={toDo} />} />
          <Route path="*" element={<Error404 />} />
        </Routes>

        <Footer />

      </div>
    </div>
  );
}

export default App;