import {useParams} from "react-router-dom";
import Card from '../Components/Card';

export default function Detalhe() {
 const { id } = useParams(); 
 const lista = JSON.parse(localStorage.getItem("Lista"));

 const ativ = lista.filter((objeto) => {
    if(objeto.id == id) {
    return objeto;
    }
    return null;

 })
console.log(ativ[0]);

     return(
        <div>
            <Card ativ={ativ[0]}/>
        </div>
     );
}