import React from 'react'
import Header from '../../componentes/Header'
import { getPostagem } from '../../service/post'
import Postagem from './Componentes/Postagem'
import './styles.css'


class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: ''

        }
    }


    componentDidMount() { //esta montando/juntando a função abaixo

        getPostagem()
            .then(response => {
                this.setState({
                    posts: response.data
                })

            })
            .catch(error => {
                console.error(error)
            })

    }

    render() {
       
        return (
            <div>
                <Header
                    titulo="Blog"
                    className="blog-header"
                />

                {this.state.posts.length > 0
                    ? this.state.posts.map(post => { //o post é o que eu quero buscar na array com o map
                        return <Postagem post={post} key={post.id} />//key é a chave na array
                    })

                    : <span>Carregando posts :D</span>
                }
            </div>
        )
    }
}


export default Blog