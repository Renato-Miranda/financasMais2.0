/* eslint-disable no-unused-vars */
import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3001'
})

export const getCategorias = async (andPoint) =>{
    const response = await api.get
}

export const getTransacoes = async (idUsuario, tipo) =>{
    const response = await api.get(`/usuario/${idUsuario}/transacoes/${tipo}`)
    return response.data
}

export const postUsuarios = async (body, senha )=>{
    const config = {
        headers:{
            'X-password': senha
        }
    } 
    const response = await api.post('/usuarios', body, config)
    return response.data
}

export const login = async (email, senha)=>{
    try {
        const config = {
            headers:{
                'X-password': senha
            }
        }
        const response = await api.post('/login', {email}, config)
        if (response && response.data) {
            if (!response.data.success) {
              throw new Error(response.data.message);
            }
          } else {
            throw new Error('Resposta inválida do servidor');
          }
    } catch (error) {
        return{
            message: error.response.data.message
        }
    }
}