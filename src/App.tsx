import { Routes, Route, Navigate } from "react-router-dom";    
import Header from './components/header.tsx';
import Main from './components/main.tsx';
import './App.css';


function App() {
  

  return (
    <Routes>
      <Route 
      path="/" 
      element={<Header />} 
      />
      <Route 
      path="/home" 
      element={<Main/>} 
      /> 
      <Route 
      path="*" 
      element={<Navigate to="/"  replace/>} />
    </Routes>
  )
}

export default App
