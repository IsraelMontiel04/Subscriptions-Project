import { useState } from "react"

export interface Suscripcion{
    type:string
    price:number
    id:number
}

interface Props{
    setType: (value:string)=>void
    setPrice: (value:string)=>void
    type:string
    price:string
    setSubs:(subs:Suscripcion[])=>void;
    subs:Suscripcion[]
    editId:string
    setEditId:(value:string)=>void
    spent:number
    count:number
}
const FormAddSubs=({
  setType, 
  setPrice, 
  type, 
  price,
  setSubs,
  subs, 
  editId, 
  setEditId, 
  spent, 
  count
}: Props)=> {

    const[error, setError]=useState(false)
    const[errorMoney, setErrorMoney]=useState(false)

    const handleSubs=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        if(price ==="" || Number(price)<0 || type ===""){
            setError(true)
            return;
        }
        setError(false)

        if(count - spent < Number(price) ) {
          setErrorMoney(true)
          return
        }
        setErrorMoney(false)

        if(Number(editId) !==0){
          setEditId("");
          const newSubs = subs.map(item =>{
            if(item.id === Number(editId)){
              item.type=type
              item.price=Number(price)
            }
            return item
          })
          setSubs(newSubs)
        }else {
          const data={
            type:type,
            price:Number(price),
            id:Date.now()
          }
          setSubs([...subs, data])
        }  
        
        setType("")
        setPrice("")
        
        /* console.log(type);
        console.log(price); */
    }

  return (
    <div className="add-subscription">
      <h3>Agregar Suscripciones</h3>
      <form onSubmit={handleSubs}>
        <select onChange={e=>setType(e.target.value)} value={type} >
            <option value="">--Elegir--</option>
            <option value="netflix">Netflix</option>
            <option value="disneyPlus">Disney Plus</option>
            <option value="hboMax">HBO Max</option>
            <option value="starPlus">Star Plus</option>
            <option value="primeVideo">Prime Video</option>
            <option value="spotify">Spotify</option>
            <option value="apletv">Apple tv</option>
        </select>
        <p>Cantidad</p>
        <input type="number" placeholder="20$" onChange={e=>setPrice(e.target.value)} value={price} />
        {Number(editId)!==0 ? <input type="submit" placeholder="Guardar" /> : <input type="submit" placeholder="Agregar" />}
      </form>
      {error ? <p className="error">Campos invalidos</p> : null}
      {errorMoney ? <p className="error">Ya no tienes presupuesto</p> : null}
      
    </div>
  )
}

export default FormAddSubs
