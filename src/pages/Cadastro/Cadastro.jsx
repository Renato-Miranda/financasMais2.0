/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Logo from "../../components/common/Logo/Logo";
import Textfield from "../../components/common/Textfield/Textfield";
import Button from "../../components/common/Button/Button";
import { StyleContainerCadastro } from "./Cadastro.styles";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import cadastro from "/cadastro.svg";
import { postUsuarios } from "../../service/api";

const Cadastro = () => {

  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')


  const navigate = useNavigate()

  const handleCadastro = async (e) => {
    e.preventDefault()
    const body = {
      email,
      nome,
      sobrenome
    }

    if (senha === confirmarSenha) {
      const response = await postUsuarios(body, senha)
      localStorage.setItem('id', response.data.id)
      localStorage.setItem('nome', response.data.nome)
      console.log(response)
      navigate('/dashboard')
    } else {
      console.log('as senhas precisam ser iguais');
    }
  }
  return (
    <StyleContainerCadastro>
      <section>
        <Logo fontSize={64} />

        <picture>
          <img
            src={cadastro}
            alt="Vetor homem branco preenchendo um fomulario de satisfação"
          />
        </picture>
      </section>

      <form action="">
        <h2>Cadastro</h2>
        <div>
          <Textfield
            nome="nome"
            label="Nome"
            type="text"
            required
            placeholder="Maria"
            value={nome}
            onChange={(e) => setNome(e)}

          />
          <Textfield
            nome="sobrenome"
            label="Sobrenome"
            type="text"
            required
            placeholder="Silva"
            value={sobrenome}
            onChange={(e) => setSobrenome(e)}

          />
          {/* <input type="text" value={sobrenome} onChange={(evento) => setSobrenome(evento.target.value)} /> */}
        </div>
        <Textfield
          nome="email"
          label="E-mail"
          type="email"
          required
          placeholder="mariasilva@gmail.com"
          value={email}
          onChange={(e) => setEmail(e)}
        />
        <Textfield
          nome="senha"
          label="Senha"
          type="password"
          required
          placeholder="●●●●●●●"
          value={senha}
          onChange={(e) => setSenha(e)}
        />
        <Textfield
          nome="confirmaSenha"
          label="Confirmação de Senha"
          type="password"
          required
          placeholder="●●●●●●●"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e)}
        />

        <p>
          Ja tem conta tem conta?
          <Link to="/login" className="destaque">
            Faça login
          </Link>
        </p>

        <Button
          width="100%"
          variant='primary'
          texto="Cadastrar"
          onClick={handleCadastro}
        />
      </form>
    </StyleContainerCadastro>
  );
};

export default Cadastro;
