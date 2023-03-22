import  React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form } from 'react-bootstrap';
import Teste from "./components/ModaldoCard"
import { Module } from 'module';
import { useState } from 'react';
import { serialize } from 'v8';
import { click } from '@testing-library/user-event/dist/click';


function App() {

  return (
    <body>

      <header> 
<h1>Seus Cards</h1>
      </header>
      <main>   
     <div className='container'><Teste/></div> 
   
      </main>  

     
    </body>
  );
}

export default App;
