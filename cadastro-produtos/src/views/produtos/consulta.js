import React from 'react'

import Card from  '../../components/card'
import ProdutosTable from './produtosTable'

import ProdutoService from '../../app/produtoService'
import { withRouter } from 'react-router-dom'

class ConsultaProdutos extends React.Component{
     
    state = {
        produtos: []
    }

    constructor() {
        super()
        this.service = new ProdutoService();
    }

    componentDidMount(){
        const produtos = this.service.obterProdutos();
        this.setState({ produtos });
    }

    preparaEditar = (sku) => {
        
        this.props.history.push(`/cadastro-produtos/${sku}`);
        console.log('sku para editar: ',sku)
    }

    deletar = (sku) => {
        const produtos =  this.service.deletar(sku)
        this.setState({produtos})
    }

    render(){
        return (
            <Card header="Consulta de Produtos">
                <ProdutosTable produtos={this.state.produtos} 
                               editarAction={this.preparaEditar} 
                               deletarAction={this.deletar}/>
            </Card>
        )
    }
}

export default withRouter(ConsultaProdutos);