import React from 'react';
import "./Cover.css";
import calculator from "../../media/calculator.jpeg";

const Cover = () => {
  return (
    <div className='cover-Container'>
      <img className='video img-responsive' src={calculator} alt="fondo de la pagina"/> <br />
      <h1>Calculadora online</h1> <br /><br />
      <form id="miFormulario" name='' >
        <label className='ji'>Numero 1 </label><br/>
        <input className='form-control' type="number" placeholder="Ingrese un valor" id="valor1"/><br />
        <label className='ji'>Numero 2 </label><br/>
        <input className='form-control' type="number" placeholder="Ingrese otro valor" id="valor2"/><br />
        <button className=' btn btn-default btn-primary' onClick={limpiar} >limpiar campos</button>
      </form><br />
      
      <div className='bck row'>
          <div className='col-md-3'><br />
              <button className=' btn btn-default btn-danger btn-block' onClick={sumar}>Sumar</button>
          </div>
          <div className='col-md-3'><br />
              <button className=' btn btn-default btn-danger btn-block'  onClick={restar}>Restar</button>
          </div>
          <div className='col-md-3'><br />
              <button className=' btn btn-default btn-danger btn-block' onClick={multiplicar}>Multiplicar</button>
          </div>
          <div className='col-md-3'><br />
              <button className=' btn btn-default btn-danger btn-block' onClick={dividir} >Dividir</button>
          </div><br /><br />
          <p className='ji1 col-md-12 text-center'>El resultado es: <span id="el-resultado"></span> </p>
        </div>
    </div>
  )
}

function limpiar(){
  document.getElementById("miFormulario").reset();
}

function sumar(){
  let x = parseInt(document.getElementById("valor1").value);
  let y = parseInt(document.getElementById("valor2").value);
  document.getElementById("el-resultado").innerHTML = x + y;
}

function restar(){
  let x = parseInt(document.getElementById("valor1").value);
  let y = parseInt(document.getElementById("valor2").value);
  document.getElementById("el-resultado").innerHTML = x - y;
}

function multiplicar(){
  let x = parseInt(document.getElementById("valor1").value);
  let y = parseInt(document.getElementById("valor2").value);
  document.getElementById("el-resultado").innerHTML = x * y;
}

function dividir(){
  let x = parseInt(document.getElementById("valor1").value);
  let y = parseInt(document.getElementById("valor2").value);
  document.getElementById("el-resultado").innerHTML = x / y;
}


export default Cover;