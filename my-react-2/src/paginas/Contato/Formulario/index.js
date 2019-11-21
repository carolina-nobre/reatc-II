import React from 'react';
// import CaixaTexto from './CaixaTexto'
import Grupo from './Componentes/Grupo';
import Botao from './Componentes/Botao';

class Formulario extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nome: {
                valor: '',
                erro:''
            },
            email:{
                valor:'',
                erro: ''
            },
            pais:{
                valor:'',
                erro: ''
            },
            mensagem:{
                valor:'',
                erro: ''
            },
        }
    }

    handleChange =(nomeDoCampo,valorDoCampo,erroDoCampo ='')=>{
      this.setState({
             [nomeDoCampo]:{
              valor: valorDoCampo,
              erro: erroDoCampo
          }
      })  
}

    estaDesabilitado=()=>{ // passando as condições para o botao
        return(
            !this.state.nome.valor ||
            this. state.nome.erro ||
            !this.state.email.valor ||
            this.state.email.erro||
            !this.state.pais.valor||
            this.state.pais.erro
        )
    }

handleSubmit = ()=>{
    
    const novoContato = {
        nome: this.state.nome.valor,
        email: this.state.email.valor,
        pais: this.state.pais.valor,
        mensagem: this.state.mensagem.valor
    }
    console.log(novoContato, 'enviou');
    
}

    render(){
        const  verificaBotao = this.estaDesabilitado() //  verificando as condições e para quando o render atualizar e verificar se as condições acima estão ok
        console.log(this.state);
        return(
            <div className='pagina'>
                <h2>Entre em contato conosco</h2>
            <form className='formulario' onSubmit={this.handleSubmit}>
              <Grupo erro={this.state.nome.erro}>
                <Grupo.Legenda htmlFor='nome'>Nome Completo:</Grupo.Legenda>
                <Grupo.CaixaTexto
                name='nome'
                placeholder='Digite seu nome'
                mudaEstado={this.handleChange}
                minLength={10}
                required
                type= 'texte'
                />
              </Grupo>
              <Grupo erro={this.state.email.erro}>
                <Grupo.Legenda htmlFor='nome'>Email:</Grupo.Legenda>
                <Grupo.CaixaTexto
                name='email'
                placeholder='Digite seu email'
                mudaEstado={this.handleChange}
                required
                type= 'email'
                />
              </Grupo>
              <Grupo erro={this.state.pais.erro}>
                <Grupo.Legenda htmlFor='nome'>País:</Grupo.Legenda>
                <Grupo.CaixaTexto
                name='pais'
                placeholder='Digite seu país'
                mudaEstado={this.handleChange}
                required
                type='text'
                />
              </Grupo>
              <Grupo erro={this.state.mensagem.erro}>
                <Grupo.Legenda htmlFor='nome'>Mensagem</Grupo.Legenda>
                <Grupo.CaixaTexto
                name='mensagem'
                placeholder='Digite sua mensagem'
                mudaEstado={this.handleChange}
                required
                type='text'
                />
              </Grupo>
              <Botao
                desabilitado={verificaBotao}
                mudaConteudo={this.props.mudaConteudo}
                onSubmit={this.handleSubmit}
                pagina='sucesso'
                type= 'submit'
                >
                    Enviar 
                </Botao>
            </form>
            </div>
        )
    }
}

export default Formulario;
