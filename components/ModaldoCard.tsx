
import { info } from 'console';
import { stringify } from 'querystring';
import { createElement } from 'react';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Cards from "./Card";



  function ModaldeExemplo(props: any): any{
  
    const [elemento, setElemento] = useState <any>([])
    

    const [titulo, setTitulo ] = useState<any>();
    const [descricao, setDescricao ] = useState<any>();
    const [cor, setcor ] = useState<any>();
    const [caixa, setcaixa ] = useState<any>();


      const [show, setShow] = useState(false);

      
      function recTit(event: any){const valor = event.target.value
      if(valor.length <= 35){setTitulo(valor)}
      else{setTitulo(false)}
      }
      
      function recDesc(event: any){const valor = event.target.value
        if(valor.length <= 200){setDescricao(valor)}
        else{setDescricao(false)}
        }
      
  
      const handleClose = () => {setShow(false);}
    
      const handleShow = () => {setShow(true);
      }
      
//botão de salvar

     const salvar = () => {

      if(cor != null){
if(titulo != ''){
  if(descricao != ''){
       if(titulo == true || titulo.length <= 35){
        if(descricao == true || descricao.length <= 200){setTitulo(false)
          setDescricao(false)
          setcor(null)
          setcaixa(null)
          setShow(false);
          const novoElemento: any = <Cards titulo= {titulo} descricao={descricao} cor={cor} caixa={caixa}/>
          setElemento([...elemento, novoElemento])
      } 
     }
    }
  }
}
  }

    
    return (
    <><div className='container'>
    <div className='row'>
{elemento}
</div>
</div>

      <Button style={{borderRadius: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'fixed', backgroundColor: 'rgb(220, 220, 220)', borderColor: 'rgb(150, 150, 150)', bottom: 0, right: 0, margin: 30}} onClick={handleShow}> 
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M11.75 4.5a.75.75 0 0 1 .75.75V11h5.75a.75.75 0 0 1 0 1.5H12.5v5.75a.75.75 0 0 1-1.5 0V12.5H5.25a.75.75 0 0 1 0-1.5H11V5.25a.75.75 0 0 1 .75-.75Z"></path></svg>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Monte seu card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="input1">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="title"
                placeholder="Escreva aqui seu Título"
                autoFocus
                onChange={recTit}
              ></Form.Control>

             
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="textarea1"
            >
              <Form.Label>Descrição</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={recDesc}/>
            </Form.Group>

            <Form.Group
             className="mb-3"
             controlId="inputColor">
            <Form.Label>Escolha a cor do seu Card</Form.Label>
            <Form.Control
                type="color"
                placeholder="Cor escolhida"
                onChange={(e) => {setcor(e.target.value)}}
                >

                </Form.Control>
                <br></br>
                <p>Cor do texto</p>
                <label style={{marginRight: '15px'}}>
  <input type="radio" name="options" value="branco" onChange={(e) => setcaixa(e.target.value)} checked />
  Branco 
</label>
<label>
  <input type="radio" name="options" value="preto" onChange={(e) => setcaixa(e.target.value)}/>
  Preto
</label>

                
              
            </Form.Group>
          </Form>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="success" onClick={salvar}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}

export default ModaldeExemplo
