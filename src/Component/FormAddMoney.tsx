import { useState } from "react"

type Props={
  setCount:(value: number)=>void
  setIsValid:(value: boolean)=>void
}

const FormAddMoney= ({setCount, setIsValid}:Props)=> {
  const [input, setInput]=useState("");
  const[error, setError]= useState(false)

  const handleForm= (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    if(input===""||  Number(input) < 0){
      setError(true);
      return;
    }
    setError(false)
    setCount(Number(input))
    setIsValid(true)
    /* console.log(input); */
  }

  return (
    <div className="form-add-money">
        <form onSubmit={handleForm}>
          <p>Agregar Presupuesto</p>
          <input type="number"placeholder="$300" onChange={e=>
            setInput(e.target.value)}/>
          <input type="submit"value="Agregar" />
        </form>
        {error ? <p className="error">Presupuesto Invalido</p>:null}
    </div>
  )
}

export default FormAddMoney
