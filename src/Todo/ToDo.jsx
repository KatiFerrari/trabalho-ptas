import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"

export default function ToDo() {
   const [nome, setNome ] = useState("");
   const [marca, setMarca ] = useState("");
   const [preco, setPreco ] = useState("");
   const [imagem, setImagem ] = useState("");
   const [lista, setLista ] = useState([]);
   const [id,setId] = useState(1);
    const salvar =(e) =>{
        e.preventDefault();
        setLista([...lista, {
                nome:nome, marca:marca, preço:preco, imagem: imagem,
                id: id
        }]);
        setId(id + 1);
        setNome("");
        setMarca("");
        setPreco("");
        setImagem("");
        
    };

    return (
        <div>
            <Link to="/">home</Link>
            <h1>Lista de Produtos</h1>    
            <form onSubmit={salvar}>
            
            <p>Nome:</p>
            &emsp;
           <input value={nome} type="text"
            
            onChange={(e)=>{ setNome(e.target.value)}}/>

            <p>Marca:</p>
            &emsp;
            <input value={marca} type="text"
            onChange={(e)=>{ setMarca(e.target.value)}}/>
            
           <p>Preço:</p>
           &emsp;
           <input value={preco} type="text"
            onChange={(e)=>{ setPreco(e.target.value)}}/>
            
            <p>Imagem:</p>
           &emsp;
           <input value={imagem} type="text"
            onChange={(e)=>{ setImagem(e.target.value)}}/>

            &emsp;
            <button  class="btn btn-dark">ADD</button>

            </form>      
            {lista.map((ativ)=>
            <div key= {ativ.id}>
                <p>Nome: {ativ.nome}</p>
                <p>Marca: {ativ.marca}</p>
                <p>Preço: R${ativ.preco}</p>
                <p>Imagem:</p>
                <img src={ativ.imagem} alt="" />

            </div>
            )} 
        </div>
    );
}

