import React from 'react';
import './styles.css'

class Header extends React.Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        const {titulo, className} = this.props
        console.log(this.props)
        return (
            <section className={className}>
                <h1>{titulo}</h1>
            </section>
        )
    }
}

export default Header;