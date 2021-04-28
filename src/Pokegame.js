import React  from "react";
import ReactDOM from "react-dom";
import Pokecard from "./Pokecard";
import './pokedex.css';


class Pokegame extends React.Component{
    static defaultProps = {
        pokemon : [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]
    };
    render(){
        let hand1 = [];
        let hand2=[...this.props.pokemon]; 
        let i=0;
         while(hand1.length < hand2.length){
             let randIdx = Math.floor(Math.random() * hand2.length);
             let randPokemon = hand2.splice(randIdx ,1) [0];
            hand1.push(randPokemon);
         }
         let exp1=0;
         let exp2=0;
         hand1.map((p)=>{
             exp1=exp1+p.base_experience;
         })

         hand2.map((p)=>{
            exp2=exp2+p.base_experience;
        })
         
        return(
            
            <div>
                <h1 className="heading"> Pokegame!</h1>
                <h2 className={exp1 > exp2 ? "Pokedex-winner" : "Pokedex-loser"} >  {exp1 > exp2 ? "Winner!" : "Loser!"}  </h2>
                <p className="center">Total Experience:- {exp1}</p>
                <div className="Pokedex-cards">
                    {hand1.map((p)=>{
                        return <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} totalExp={exp1} key={p.id} />
                    })}  
                </div>

                <h2 className={exp1 < exp2 ? "Pokedex-winner" : "Pokedex-loser"} >{exp1 < exp2 ? "Winner!" : "Loser!"}</h2>
                <p className="center">Total Experience:- {exp2}</p>
                <div className="Pokedex-cards">
                    {hand2.map((p)=>{
                        return <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} totalExp={exp2} key={p.id}/>
                    })}  
                </div>
            </div>
        );
    }
}

export default Pokegame ;