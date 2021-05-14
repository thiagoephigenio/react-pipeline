import React from "react";
import "./Fechamento.css";

function Fechamento() {
 

return (
  <> 
    <div className="inicio">
      <h4 className="titulo"> Pipeline </h4>
    </div>
    <div className="card-header"> 
      <i className="tituloFech">Fechamento</i>
    </div>
    <div className="card-view">
      <ul>
        <li className="content-card-view"><b>Data:</b> 14/05/2021</li>
        <li className="content-card-view"><b>Data de Referência:</b>05/2021</li>
        <li className="content-card-view"><b>Período:</b> 01/05/2021 à 31/05/2021</li>
            </ul>
            <div className="btn-card-view">
            <button className="btn-card-detalhes">Detalhes</button>
            <button className="btn-card-resumo">Resumo</button>
            </div>
    </div>
    <div className="card-header"> 
      <i className="tituloFech">Histórico de Fechamentos</i>
    </div>

    <div className="card-view2">
      <label>  
      Mostrar  
      </label> 
      <select className="selectValue">
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <label className="registros">
          registros.
      </label>
    </div>
    
  </>
      )
}
export default Fechamento;
