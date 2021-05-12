import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import api from "../../services/api";
import React, { useState, useEffect } from "react";
import base64 from "base-64";
import axios from "axios";
import "./Home.css";
import Header from "../../components/Header/Header";

interface Pipeline {
  id: number;
  client: string;
  project: string;
  bulk: number;
  value: number;
  dateOpened: string;
  dateOperationStart: string;
  contractDeadline: number;
  probability: number;
  situation: string;
  dateClousure: string;
  time: number;
  estimatedRevenue: number;
  expectedRevenue: number;
  impact: number;
  duration: string;
  statusChange: string;
}

function Home() {

  const [pipelines, setNewPipeline] = useState<Pipeline[]>([]);

  const [pipelineEditableId, SetPipelineEditableId] = useState(0);

  const [isNewForm, setFormState] = useState(false);

  const [newPipelineClient, setNewPipelineClient] = useState("");

  const [newPipelineProject, setNewPipelineProject] = useState("");

  const [newPipelineBulk, setNewPipelineBulk] = useState(0);

  const [newPipelineValue, setNewPipelineValue] = useState(0);

  const [newPipelineDateOpened, setNewPipelineDateOpened] = useState(
    "01/01/2020"
  );

  const [
    newPipelineDateOperationStart,
    setNewPipelineDateOperationStart,
  ] = useState("01/01/2020");

  const [
    newPipelineContractDeadline,
    setNewPipelineContractDeadline,
  ] = useState(0);

  const [newPipelineProbability, setNewPipelineProbability] = useState(0);

  const [newPipelineSituation, setNewPipelineSituation] = useState("");

  const [newPipelineDateClousure, setNewPipelineDateClousure] = useState(
    "01/01/2020"
  );

  const [newPipelineTime, setNewPipelineTime] = useState(0);

  const [
    newPipelineEstimatedRevenue,
    setNewPipelineEstimatedRevenue,
  ] = useState(0);

  const [newPipelineExpectedRevenue, setNewPipelineExpectedRevenue] = useState(
    0
  );

  const [newPipelineImpact, setNewPipelineImpact] = useState(0);

  const [newPipelineDuration, setNewPipelineDuration] = useState("");

  const [newPipelineStatusChange, setNewPipelineStatusChange] = useState("");

  // function handleCreateNewPipeline() {}

  function handleCrateNewForm() {
    setFormState(true);
  }

  function handleRemoveForm() {
    setFormState(false);
  }

  function handleSetEditablePipeline(id: number) {
    SetPipelineEditableId(id);
  }
  function handleRemoveEditablePipeline() {
    SetPipelineEditableId(0);
  }
  // function handleRemovePipeline() {}

  function handleFillingForm(pipeline: Pipeline) {
    setNewPipelineClient(pipeline.client);
    setNewPipelineProject(pipeline.project);
    setNewPipelineBulk(pipeline.bulk);
    setNewPipelineValue(pipeline.value);
    setNewPipelineDateOpened(pipeline.dateOpened);
    setNewPipelineDateOperationStart(pipeline.dateOperationStart);
    setNewPipelineContractDeadline(pipeline.contractDeadline);
    setNewPipelineProbability(pipeline.probability);
    setNewPipelineSituation(pipeline.situation);
    setNewPipelineDateClousure(pipeline.dateClousure);
    setNewPipelineTime(pipeline.time);
    setNewPipelineEstimatedRevenue(pipeline.estimatedRevenue);
    setNewPipelineExpectedRevenue(pipeline.expectedRevenue);
    setNewPipelineImpact(pipeline.impact);
    setNewPipelineDuration(pipeline.duration);
  }

  useEffect(() => {
    config:{

    }
    axios.get("/mostrar", {
      headers: {
        Authorization: `Basic ${base64.encode("thiago.costa@cattaliniterminais.com.br" + ":" + "12345678")}`,
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'multipart/form-data',
      },
    }).then(response => {
       
      const arr = response.data as Array<Object>


      arr.map((pipeline, index) => {
        
      // if(pipeline.hasOwnProperty("CLIENTE")){
       // console.log(pipeline[""])
      // }
        // const pipelineObject:Pipeline
      })
    }

    ).catch(
      
    )
    // api
    //   .get("/tasks", {})
    //   .then((response) => {
    //     const { data: tasks } = response;
    //   })
    //   .catch((error) => {});
  }, []);

  useEffect(() => {
    let arrayPipelines: Pipeline[] = pipelines;

    for (let index = 1; index <= 100; index++) {
      arrayPipelines = [
        ...arrayPipelines,
        {
          id: index,
          client: `cliente${index}`,
          project: `Teste${index}`,
          bulk: 1,
          value: 100,
          dateOpened: "2020-02-01",
          dateOperationStart: "2020-02-01",
          contractDeadline: 12,
          probability: 12,
          situation: "Ativa",
          dateClousure: "2020-02-01",
          time: 111,
          estimatedRevenue: 111,
          expectedRevenue: 1111,
          impact: 1,
          duration: "Longo prazo",
          statusChange: "Ativa",
        },
      ];
    }
    setNewPipeline(arrayPipelines);
  }, []);

  return (
    <>
      <Header />
      <div>
        <div className="actions">
          {pipelineEditableId !== 0 ? (
            <>
              <button className="bt-novo"
                onClick={() => {
                  handleCrateNewForm();
                  handleRemoveEditablePipeline();
                }}
              >
                Novo
              </button>
              <button
                onClick={() => {
                  handleRemoveEditablePipeline();
                }}
              >
                Cancelar
              </button>
              <button>Salvar</button>{" "}
            </>
          ) : isNewForm ? (
            <>
              <button
                onClick={() => {
                  handleRemoveForm();
                }}
              >
                Cancelar
              </button>
              <button>Salvar</button>
            </>
          ) : (
            <button
              onClick={() => {
                handleCrateNewForm();
                handleRemoveEditablePipeline();
              }}
            >
              Novo
            </button>
          )}
          <div className="searchContent">
            <input type="text" className="search" placeholder="Buscar..." />
          </div>
        </div>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th className="cliente">Cliente</th>
              <th className="projeto">Projeto</th>
              <th className="valor">Valor/m³</th>
              <th className="volume">Volume (m³/mês)</th>
              <th className="dataAbert">   Data Abertura</th>
              <th className="dataInicio">Data Início Operação</th>
              <th className="prazo">Prazo     do Contrato</th>
              <th className="probabilidade">Probabilidade</th>
              <th className="situacao">Situação</th>
              <th className="dataEnc">Data Término</th>
              <th className="tempo">Tempo        (meses)</th>
              <th className="receitaest">Receita Estimada</th>
              <th className="receitaesp">Receita Esperada</th>
              <th className="impacto">Impacto</th>
              <th className="duracao">Duração</th>
              <th className="mudanca">Mudança de Status</th>
            </tr>
          </thead>
          <tbody>
            {isNewForm ? (
              <tr>
                <td> </td>
                <td> </td>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
                <td>
                  <input type="number" />
                </td>
                <td>
                  <input type="date" />
                </td>
                <td>
                  <input type="date" />
                </td>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
                <td>
                  <input type="date" />
                </td>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
              </tr>
            ) : (
              ""
            )}
            {pipelines.map((pipeline, index) => (
              <tr key={pipeline.id}>
                <td>
                  <span className="btnTable remove">
                    <h2>
                      <AiFillDelete />
                    </h2>
                  </span>
                </td>
                <td>
                  <span
                    onClick={() => {
                      handleFillingForm(pipelines[index]);
                      handleSetEditablePipeline(pipeline.id);
                      handleRemoveForm();
                    }}
                    className="btnTable edit"
                  >
                    <h2>
                      <AiFillEdit />
                    </h2>
                  </span>
                </td>
                <td className="td-cliente">
                  {pipelineEditableId === pipeline.id ? (
                    <input
                      value={newPipelineClient}
                      onChange={(e) => setNewPipelineClient(e.target.value)}
                    />
                  ) : (
                    pipeline.client
                  )}
                </td>
                <td className="td-projeto">
                  {pipelineEditableId === pipeline.id ? (
                    <input
                      value={newPipelineProject}
                      onChange={(e) => setNewPipelineProject(e.target.value)}
                    />
                  ) : (
                    pipeline.project
                  )}
                </td>
                <td className="td-valor">
                  {pipelineEditableId === pipeline.id ? (
                    <input
                      value={newPipelineBulk}
                      onChange={(e) =>
                        setNewPipelineBulk(parseInt(e.target.value))
                      }
                    />
                  ) : (
                    pipeline.bulk
                  )}
                </td>
                <td className="td-volume">
                  {pipelineEditableId === pipeline.id ? (
                    <input
                      value={newPipelineValue}
                      onChange={(e) =>
                        setNewPipelineValue(parseInt(e.target.value))
                      }
                    />
                  ) : (
                    pipeline.value
                  )}
                </td>
                <td className="td-dataAbert">
                  {pipelineEditableId === pipeline.id ? (
                    <input
                      type="date"
                      defaultValue={newPipelineDateOpened}
                      // value={newPipelineDateOpened}
                      onChange={(e) => setNewPipelineDateOpened(e.target.value)}
                    />
                  ) : (
                    pipeline.dateOpened
                  )}
                </td>
                <td className="td-dataInicio">
                  {pipelineEditableId === pipeline.id ? (
                    <input
                      defaultValue={newPipelineDateOperationStart}
                      type="date"
                      onChange={(e) =>
                        setNewPipelineDateOperationStart(e.target.value)
                      }
                    />
                  ) : (
                    pipeline.dateOperationStart
                  )}
                </td>
                <td className="td-prazo">
                  {pipelineEditableId === pipeline.id ? (
                    <input
                      value={newPipelineContractDeadline}
                      onChange={(e) =>
                        setNewPipelineContractDeadline(parseInt(e.target.value))
                      }
                    />
                  ) : (
                    pipeline.contractDeadline
                  )}
                </td>
                <td className="td-probabilidade">
                  {pipelineEditableId === pipeline.id ? (
                    <input
                      value={newPipelineProbability}
                      onChange={(e) =>
                        setNewPipelineProbability(parseInt(e.target.value))
                      }
                    />
                  ) : (
                    pipeline.probability
                  )}
                </td>
                <td className="td-situacao">
                  {pipelineEditableId === pipeline.id ? (
                    <input
                      value={newPipelineSituation}
                      onChange={(e) => setNewPipelineSituation(e.target.value)}
                    />
                  ) : (
                    pipeline.situation
                  )}
                </td>
                <td className="td-dataEnc">
                  {pipelineEditableId === pipeline.id ? (
                    <input
                      type="date"
                      defaultValue={newPipelineDateClousure}
                      onChange={(e) =>
                        setNewPipelineDateClousure(e.target.value)
                      }
                    />
                  ) : (
                    pipeline.dateClousure
                  )}
                </td>
                <td className="td-tempo">
                  {pipelineEditableId === pipeline.id ? (
                    <input
                      value={newPipelineTime}
                      onChange={(e) =>
                        setNewPipelineTime(parseInt(e.target.value))
                      }
                    />
                  ) : (
                    pipeline.time
                  )}
                </td>
                <td className="td-receitaEst">
                  {pipelineEditableId === pipeline.id ? (
                    <input
                      value={newPipelineEstimatedRevenue}
                      onChange={(e) =>
                        setNewPipelineEstimatedRevenue(
                          parseFloat(e.target.value)
                        )
                      }
                    />
                  ) : (
                    pipeline.estimatedRevenue
                  )}
                </td>
                <td className="td-receitaEsp">
                  {pipelineEditableId === pipeline.id ? (
                    <input
                      value={newPipelineExpectedRevenue}
                      onChange={(e) =>
                        setNewPipelineExpectedRevenue(
                          parseFloat(e.target.value)
                        )
                      }
                    />
                  ) : (
                    pipeline.expectedRevenue
                  )}
                </td>
                <td className="td-impacto">
                  {pipelineEditableId === pipeline.id ? (
                    <input
                      value={newPipelineImpact}
                      onChange={(e) =>
                        setNewPipelineImpact(parseFloat(e.target.value))
                      }
                    />
                  ) : (
                    pipeline.impact
                  )}
                </td>
                <td className="td-duracao">
                  {pipelineEditableId === pipeline.id ? (
                    <input
                      value={newPipelineDuration}
                      onChange={(e) => setNewPipelineDuration(e.target.value)}
                    />
                  ) : (
                    pipeline.duration
                  )}
                </td>
                <td className="td-mudanca">
                  {pipelineEditableId === pipeline.id ? (
                    <input
                      value={newPipelineStatusChange}
                      onChange={(e) =>
                        setNewPipelineStatusChange(e.target.value)
                      }
                    />
                  ) : (
                    pipeline.statusChange
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
