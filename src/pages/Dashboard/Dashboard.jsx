/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import Transacao from '../../components/views/Dashboard/Transacao/Transacao'

const Dashboard = () => {
  const [contador, setContador] = useState(0)

  useEffect(() => {
    console.log("carregou")
  }, [

  ])





  return (
    <div>
      <Layout >
        <Transacao
        />
      </Layout>

    </div>

  )
}

export default Dashboard