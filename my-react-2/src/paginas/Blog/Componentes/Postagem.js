import React from 'react'
import '../../Blog/styles.css'

function Postagem(props){

    return (
        <section className='postagem'>
            <h2>{props.post.title}</h2>
            <span>{props.post.body}</span>
            <button className='botao'>Saiba Mais</button>
        </section>

    )
}

export default Postagem
