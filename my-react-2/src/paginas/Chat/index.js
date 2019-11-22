import React from 'react'
import{getMensagens} from '../../service/base'
import Mensagem from './Componentes/Mensagem'
import './styles.css'

class Chat extends React.Component{//aqui pegas informações da api
   constructor(props) {
        super(props)
        this.state ={
            mensagens: ''
        }
   }


    componentDidMount(){
     getMensagens()
         .then(response =>{
            this.setState({
                mensagens:response.data
            })

    })
    .catch(error =>{
        console.error(error)
    })

    }

    render(){//chamando o conteudo da api
        return(
            <section className ="chat">
            <h2>Essa é a página de chat</h2>
            {this.state.mensagens.length > 0
            ? this.state.mensagens.map(mensagem => {
                return <Mensagem mensagem={mensagem} key={mensagem.id} />
            })
    
                : <span>Carregando mensagens :D</span>
            }
            </section>
            
        )
    }
}

export default Chat 