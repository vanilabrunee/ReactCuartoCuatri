import { Routes, Route, Navigate } from "react-router-dom";    
import Header from './components/header.tsx';
import Main from './components/main.tsx';
import AcercaDe from "./components/acercaDe.tsx";
import './App.css';


function App() {
  

  return (
    <>
    <Header />
    <Routes>
      <Route 
      path="/" 
      element={<Main/>} 
      /> 
      <Route 
      path="/home" 
      element={<Main/>} 
      /> 
      <Route 
      path="/acerca de" 
      element={<AcercaDe />} 
      />
      <Route 
      path="*" 
      element={<Navigate to="/"  replace/>} />
    </Routes>
    </>
  )
}

export default App
