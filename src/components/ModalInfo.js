import React from 'react';
import './css/modal.css';

export const ModalInfo = ({pokemon}) => {
    return (
        <div className='modal-block'>
            <div>
                <img src={pokemon.sprites.front_default} alt='' className='image'/>
            </div>
            <span>
                <p className='name-id'>{pokemon.name} #{pokemon.id}</p>
            </span>
            <div>
                <table border={1}>
                    <tbody>
                        <tr>
                            <td className='stat-name'>Type</td>
                            <td className='value'>{pokemon.types.map((pokemon, i) => {
                                return(
                                    <p key={i}>{pokemon.type.name} </p>
                                )
                            })}</td>
                        </tr>
                        <tr>
                            <td className='stat-name'>Attack</td>
                            <td className='value'>{pokemon.stats[1].base_stat}</td>
                        </tr>
                        <tr>
                            <td className='stat-name'>Defense</td>
                            <td className='value'>{pokemon.stats[2].base_stat}</td>
                        </tr>
                        <tr>
                            <td className='stat-name'>HP</td>
                            <td className='value'>{pokemon.stats[0].base_stat}</td>
                        </tr>
                        <tr>
                            <td className='stat-name'>SP Attack</td>
                            <td className='value'>{pokemon.stats[3].base_stat}</td>
                        </tr>
                        <tr>
                            <td className='stat-name'>SP Defense</td>
                            <td className='value'>{pokemon.stats[4].base_stat}</td>
                        </tr>
                        <tr>
                            <td className='stat-name'>Speed</td>
                            <td className='value'>{pokemon.stats[5].base_stat}</td>
                        </tr>
                        <tr>
                            <td className='stat-name'>Weight</td>
                            <td className='value'>{pokemon.weight}</td>
                        </tr>
                        <tr>
                            <td className='stat-name'>Total moves</td>
                            <td className='value'>{pokemon.moves.length}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}