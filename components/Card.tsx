import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

function Cards(props:any):any{
    let corCaixa: any
if(props.caixa == "preto"){corCaixa = "black"}
else{corCaixa = "white"}
    return(<>
  
<div className='col-md-3'>

<div className="card m-1" style={{background: props.cor, color: corCaixa}}>
<div className="card-header">{props.titulo}</div>
<div className="card-body">
<div className="card-text">{props.descricao}</div>
</div>
</div>

</div>

       

       </>)}
export default Cards

