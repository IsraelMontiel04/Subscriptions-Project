import { moneyFormat } from "../Helpers"

type Props={
    price:number
    type:string
    id:number
    eliminarItem:(id:number)=>void
    editItem:(id:number)=>void
}

function SingleItem({price, type, id, eliminarItem, editItem}:Props) {
  
  const handleDelete=(e:React.FormEvent<HTMLAnchorElement>)=>{
    e.preventDefault();
    const answer = window.confirm(`Borrar suscripcion de ${type}`)
    if(answer){
      eliminarItem(id); 
    }
  }

  const handleEdit= (e:React.FormEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    editItem(id)
  }


  const urlImage=`/src/images/${type}.png`

  return (
    <div>
      <div className="single-item">
        <img src={urlImage} alt="Services" />
        <h3>Precio: {moneyFormat(Number(price))} </h3>
        <a href="" className="delete" onClick={handleDelete}>Borrar</a>
        <a href="" className="edit" onClick={handleEdit}>Editar</a>
      </div>
    </div>
  )
}

export default SingleItem
