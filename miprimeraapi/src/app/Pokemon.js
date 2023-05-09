'use client';
import React, {useState,useEffect} from 'react';
import axios from 'axios';

function Pokemons(){
    const [search,setSearch] = useState('');
    const  [Id, setId] = useState([]);
    useEffect(()=>{
        loadPokemones();
    },[]);

    const loadPokemones = async () =>{
        const result = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
        console.log(await result.data)
        setId(await result.data)
    }
    const handleChange = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    };

    const filteredData = Id.filter((item) =>
        item.id.toString().includes(search)
    );
    
    return (
        <div>
            <div className='inputContainer'>
                <input type='text' onChange={handleChange} placeholder='Buscar Por Id...' value={search}/> 
            </div>
            <div className='container'>
                <table className='table-content'>
                    <thead className=''>
                        <tr>
                            <th style={{color:"black"}}>Id de usuario</th>
                            <th style={{color:"black"}}>Id</th>
                            <th style={{color:"black"}}>Titulo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((names)=>(
                            <tr>
                                <td style={{textAlign:"center",fontSize:"1.3em",color:"black"}}>{names.userId}</td>
                                <td style={{textAlign:"center",fontSize:"1.3em",color:"black"}}>{names.id}</td>
                                <td style={{textAlign:"center",fontSize:"1.5em",color:"black"}}>{names.title}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        
    )
}

export default Pokemons;