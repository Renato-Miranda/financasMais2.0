/* eslint-disable no-unused-vars */
import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const getCategorias = async (andPoint) => {
  const response = await api.get;
};

export const getTransacoes = async (idUsuario, tipo) => {
  const response = await api.get(`/usuario/${idUsuario}/transacoes/${tipo}`);
  return response.data;
};

export const postUsuarios = async (body, senha) => {
  const config = {
    headers: {
      "X-password": senha,
    },
  };
  const response = await api.post("/usuarios", body, config);
  return response.data;
};

export const loginUsuario = async (email, senha) => {
  try {
    const config = {
      headers: {
        "X-password": senha,
      },
    };
    const response = await api.post("/login", { email }, config);
    return response.data;
  } catch (error) {
    if (error.response) {
      return {
        message: error.response.data.message,
        success: error.response.data.success,
      };
    }else{
        return{
            message: 'erro inesperado',
        }
    }
  }
};
