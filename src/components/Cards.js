import React,{useState,useEffect} from 'react'
import axios from "axios";
import { useForm } from 'react-hook-form';


export const PokemonApi = ({name, url}) => {
    const [pokemon, setPokemon] = useState('');
    const [types, setTypes] = useState(null);
    const [hp, setHp] = useState(null);
    const [attack, setAttack] = useState(null);
    const [defense, setDefense] = useState(null);
    const [speed, setSpeed] = useState(null);

    useEffect(() => {
        const res = axios(url);
        res.then((response) =>{
            setPokemon(response.data.sprites.front_default);
            setTypes(response.data.types);
            setHp(response.data.stats[0].base_stat);
            setAttack(response.data.stats[1].base_stat);
            setDefense(response.data.stats[2].base_stat);
            setSpeed(response.data.stats[5].base_stat);
        })
        
    },[]);

    return(
        <div className='card-poke'>
            <div className='card-info'>
                
                <img src={pokemon} alt={name}/>
                <h2>{name}</h2>
                <span>Types:</span>{types ? types.map((value) => {
                    return <p>{value.type.name}</p>
                    }):null
                 }
                <p>HP: {hp}</p>
                <p>Attack: {attack}</p>
                <p>Defense: {defense}</p>
                <p>Speed: {speed}</p>
            </div>
        </div>
    );
}

export const ButtonCheck = ({selector}) => {
    return(
            <div class="switch-button">
                <input type="checkbox" name="switch-button" id="switch-label" className="switch-button__checkbox" onChange={selector}/>
                <label for="switch-label" className="switch-button__label"></label>
            </div>
    );
}

export const InputPokemon = () => {
    const {register, handleSubmit} = useForm;
    return (
       <>
          <p>Ingresa el pokemon a buscar:</p>
          <form onSubmit={handleSubmit}>
            <label>
                <input ref={register}/>
            </label>
            <button>Get Pokemon</button>
          </form>
       </>
    );
}

export const OptionPokemon = () => {
    const {register, handleSubmit} = useForm;
    const [types, setTypes] = useState([]);
    useEffect(()=>{
        const res = axios('https://pokeapi.co/api/v2/type')
        res.then((response) =>{
            setTypes(response.data.results);
        })
    },[])
   return(
    <>
        <p>Seleccione el tipo</p>
        <form onSubmit={handleSubmit}>
            <select name='pokemon' ref={register}>
                {types.length > 0 ? types.map((value) => {
                    return <option value={value.name}>{value.name}</option>
                }) : <option>-- Not Option --</option>}
            </select>
        </form>
    </>

   );
}