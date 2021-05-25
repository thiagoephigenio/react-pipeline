import React from "react";
import "./Detalhes.css";


export function Detalhes() {
    return <> 
    <div className="card-header">
        <table>  
            <thead className="linha2">
                <tr className="tabDetalhes">
                    <th className="cliente-detalhes"> Cliente </th>
                    <th className="projetos-detalhes"> Projetos </th>
                    <th className="valor-detalhes">Valor/m³</th>
                    <th className="volume-detalhes">Volume (m³/mês)</th>
                    <th className="dataAbert-detalhes">   Data Abertura</th>
                    <th className="dataInicio-detalhes">Data Início Operação</th>
                    <th className="prazo-detalhes">Prazo     do Contrato</th>
                    <th className="probabilidade-detalhes">Probabilidade</th>
                    <th className="situacao-detalhes">Situação</th>
                    <th className="dataEnc-detalhes-detalhes">Data Término</th>
                    <th className="tempo-detalhes">Tempo        (meses)</th>
                    <th className="receitaest-detalhes">Receita Estimada</th>
                    <th className="receitaesp-detalhes">Receita Esperada</th>
                    <th className="impacto-detalhes">Impacto</th>
                    <th className="duracao-detalhes">Duração</th>
                    <th className="mudanca-detalhes">Status</th>
                </tr>  
            </thead> 
        </table>

    </div>
    </>
   
}