/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { useParams } from 'react-router-dom'
import Transacao from '../../components/views/Dashboard/Transacao/Transacao'
import Layout from '../../components/shared/Layout/Layout'
import { dataTransacoes } from '../../core/data'
import { useState } from 'react'
import { getTransacoes } from '../../service/api'
import Button from '../../components/common/Button/Button'

const Transacoes = () => {
  const params = useParams()
  const { usuarios: [usuarioUm] } = dataTransacoes
  const transacoes = usuarioUm.transacoes
  const transacao = {
    id: 'dasdasdasd',
    data: '11/10/2023',
    categoria: 'Salario',
    valor: 10000,
    tipo: 'saida'
  }
  const [listaTransacoes, setListaTransacoes] = useState([])

  const handleBuscarTransacoes = async () => {
    const response = await getTransacoes("a57501f9407c2174825bb862860ec23a", params.tipo)
    setListaTransacoes(response.data)
  }

  console.log(params)
  return (
    <div>
      <Layout >
        <h2>{params.tipo.toLocaleUpperCase()}</h2>
        <Button onClick={handleBuscarTransacoes}
          texto={'Buscar Transações'}
          variant={'primary'}
        />
        {listaTransacoes.map((transacao) => {
          return (
            <Transacao
              key={transacao.id}
              id={transacao.id}
              valor={transacao.valor}
              categoria={transacao.categoria}
              data={transacao.data}
              tipo={transacao.tipo}
            />
          )
        })}
      </Layout>
    </div>
  )
}

export default Transacoes