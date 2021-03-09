import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {ButtonCheck, InputPokemon, OptionPokemon, PokemonApi} from './Cards';
import Pagination from './pagination';



const Pokedex = () =>{
    const [isPokes, setIsPokes] = useState([]);
    const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon?offset=0&limit=4');
    const [nextPage, setNextPage] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [slide, setSlide] = useState(true);

    useEffect(()=>{
        setLoading(true)
        let cancel
        const res = axios(currentPage, {
            cancelToken: new axios.CancelToken(c => cancel = c)
        });
        res.then((response) => {
            setLoading(false);
            setNextPage(response.data.next);
            setPrevPage(response.data.previous);
            setIsPokes(response.data.results);
        })

        return () => cancel()
    },[currentPage])
  
    function NextPage(){
        setCurrentPage(nextPage);
    }
    const prevPageLink = () => {
        setCurrentPage(prevPage);
    }

    const Selector = () => {
        setSlide(!slide)
        console.log(slide);
    }

    if(loading) return 'Loading...'
  
    const MyArrayOfPokes =  isPokes.map((value) => {
            return (
               <PokemonApi
                    name={value.name}
                    url={value.url}
                    key={value.name}
               />
            );            
    })
  
    return(
        <>
            <div className='log'></div>
            <ButtonCheck 
                selector={Selector}
            />
            {slide ? <InputPokemon/> : <OptionPokemon/>}
            <div className='card-home'>
                {isPokes.length > 0 ?  MyArrayOfPokes : null}
            </div>
            <div className='pagination'>
                <Pagination
                    GoToNext={nextPage ? NextPage : null}
                    preview={prevPage ? prevPageLink : null}
                />
            </div>
            <div className='pie-pagina'>
            </div>
        </>
    );
  }
  
  export default Pokedex;
