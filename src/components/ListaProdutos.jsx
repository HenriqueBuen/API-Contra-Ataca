import axios from "axios"
import { useEffect, useState } from "react"
import { Card } from "./Card"
const ListaProdutos =() => {
    const[produtos,setProdutos]=useState([])
    const getProdutos = async () => {
        const resposta = await axios.get("https://fakestoreapi.com/products") 
        const dados = resposta.data
        setProdutos(dados)
    }
    useEffect(()=>{
        getProdutos()
    },[])
    return(
        <section>
           {
            produtos.map((produto,index)=><Card key={index} categoria={produto.category} id={produto.id} descricao={produto.description} imagem={produto.image} preco={produto.price} titulo={produto.title}/>)
           } 
        </section>
    )
}
export default ListaProdutos