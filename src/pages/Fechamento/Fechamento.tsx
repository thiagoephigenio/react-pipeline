import React, { useState } from "react";
import {Detalhes} from "../../components/Detalhes/Detalhes";
import "./Fechamento.css";

// import base64 from "base-64";
// import axios from "axios";
// import Header from "../../components/Header/Header";


function Fechamento() {
  
  const [isShowDetalhes, setIsShowDetalhes] = useState(false);

  function showDetalhes() {
    if (!isShowDetalhes) {
      setIsShowDetalhes(true);
    }
  }

  // function ocultarDetalhes() {
  //   if (isShowDetalhes) {
  //     setIsShowDetalhes(false);
  //   }
  // }


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
          <button className="btn-card-detalhes"
            onClick={() => {
              showDetalhes()
            }}>Detalhes</button>
          <button className="btn-card-resumo">Resumo</button>
        </div>
      </div>
      <div className="card-header">
        <i className="tituloFech">Histórico de Fechamentos</i>
      </div>

      <div className="card-header2">
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
        <label className="buscar">
          Buscar:</label>
        <input className="busca" type="text" />

      </div>
      <div className="card-header">
        <tr>
          <td className="td-data">  Data    </td>
          <td className="td-ref">  Referência   </td>
          <td className="td-situacao">  Situação    </td>
        </tr>
      </div>
      <div className="card-view-tab1">
        <tr>
          <td className="td-data1"> 01-02-2021 </td>
          <td className="td-ref1"> 12/21 </td>
          <td className="td-situacao1"> PROCESSADO </td>
        </tr>
      </div>
      <div className="card-view-tab2">
        <tr>
          <td className="td-data1"> 01-02-2021 </td>
          <td className="td-ref1"> 12/21 </td>
          <td className="td-situacao1"> PROCESSADO </td>
        </tr>
      </div>
      <div className="card-view-tab3">
        <tr>
          <td className="td-data1"> 01-02-2021 </td>
          <td className="td-ref1"> 12/21 </td>
          <td className="td-situacao1"> CANCELADO </td>
        </tr>
      </div>
      <div>

        {isShowDetalhes?(<Detalhes/>):"" }
      </div>
    </>
  )


}
export default Fechamento;
