import SingleItem from "./SingleItem"

interface Suscripcion{
    id:number
    type:string
    price:number
}

interface Props{
    subs: Suscripcion[]
    eliminarItem:(id:number)=>void
    editItem:(id:number)=>void
}

function DisplayItem({subs, eliminarItem, editItem}:Props) {
  return (
    <div>
        <h2>Suscripciones</h2>
        {
            subs.map((item)=>(
                <SingleItem 
                key={item.id}
                id={item.id} 
                price={item.price} 
                type={item.type} 
                eliminarItem={eliminarItem}
                editItem={editItem}
                />
            ))
        }
    </div>
  )
}

export default DisplayItem
