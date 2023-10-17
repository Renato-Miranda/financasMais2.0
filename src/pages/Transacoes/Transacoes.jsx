/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { useParams } from 'react-router-dom'
import Transacao from '../../components/views/Dashboard/Transacao/Transacao'
import Layout from '../../components/shared/Layout/Layout'
import { dataTransacoes } from '../../core/data'
import { useEffect, useState } from 'react'
import { getTransacoes } from '../../service/api'
import Button from '../../components/common/Button/Button'
import Modal from '../../components/common/Modal/Modal'

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
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [listaTransacoes, setListaTransacoes] = useState([])

  const handleBuscarTransacoes = async () => {
    const response = await getTransacoes("a57501f9407c2174825bb862860ec23a", params.tipo)
    setListaTransacoes(response.data)
  }
  const handleAbrirModal = () => {
    setModalEstaAberto(true)
  }

  const handleFecharModal = () => {
    setModalEstaAberto(false)
  }
  useEffect(() => {
    handleBuscarTransacoes()
  }, [params])
  console.log(params)
  return (
    <>
      <Layout>
        <h2>{params.tipo.toLocaleUpperCase()}</h2>
        <Button
          onClick={handleAbrirModal}
          texto={'adicionar transação'}
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
          );
        })}
      </Layout>
      {modalEstaAberto && ( // Renderize o modal somente se modalEstaAberto for true
        <Modal title={params.tipo} open={handleAbrirModal} onClose={handleFecharModal}>
          {/* Conteúdo do modal */}
        </Modal>
      )}
    </>
  );
}

export default Transacoes