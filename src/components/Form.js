import React, {useState} from "react"; 

const Form = ({newLocation}) => {
    
   const [city, setCity] = useState("");
   const onSubmit = (e) => {e.preventDefault();
    console.log({city})
    if (city === "" || !city) return;

    newLocation(city);
}
   return(
    <div className="continer">
        <form onSubmit={onSubmit}>
            <div className="input-group mb-3 mx-auto">
                <input type="text input-group" className="form-control " placeholder="Ciudad" onChange={(e) => setCity(e.target.value)}/> 
                <button className="btn btn-primary input-group-text" type="submit">Buscar</button>
                
 
            </div>
        </form>
    </div>
    );
    }
    
    export default Form;