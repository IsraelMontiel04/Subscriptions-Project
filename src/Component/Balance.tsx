import { useEffect} from "react"
import { moneyFormat } from "../Helpers"
import { Suscripcion } from "./FormAddSubs"

interface Props{
    count:number
    subs:Suscripcion[]
    spent:number
    setSpent:(value:number)=>void
}

const Balance= ({count,subs, spent, setSpent}:Props) => {

  useEffect(()=>{
    const spent = subs.reduce((total, item)=> Number(item.price) + total, 0)
    setSpent(spent)
  }, [subs, setSpent])
  
  return (
    <div className="balance">
      <h3>Presupuesto: {moneyFormat(count)} </h3>
      <h3>Disponible: {moneyFormat(count - spent)} </h3>
      <h3>Gastado: {moneyFormat(spent)} </h3>
    </div>
  )
}

export default Balance
