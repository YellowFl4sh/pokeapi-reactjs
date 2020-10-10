import React from 'react';
import './css/gradients.css';

export const Pokemon = ({pokemon}) => {
    return (
        <div style={styles.container}>
            <div style={styles.imageBlock}>
                <img src={pokemon.sprites.front_default} alt='' style={styles.image}/>
            </div>
            <div style={styles.nameBlock}>
                <p style={styles.name}><strong>{pokemon.name}</strong></p>
            </div>
            <div style={styles.typesBlock}>
                {pokemon.types.map(pokemon => {
                    if (pokemon.type.name === 'grass') {
                        return (
                            <div className="grass-block" key={'grass'}>
                                <span>{pokemon.type.name}</span>
                            </div>
                        )
                    }
                    else if (pokemon.type.name === 'poison') {
                        return (
                            <div className="poison-block" key={'poison'}>
                                <span>{pokemon.type.name}</span>
                            </div>
                        )
                    }
                    else if (pokemon.type.name === 'fire') {
                        return (
                            <div className="fire-block" key={'fire'}>
                                <span>{pokemon.type.name}</span>
                            </div>
                        )
                    }
                    else if (pokemon.type.name === 'flying') {
                        return (
                            <div className="flying-block" key={'flying'}>
                                <span>{pokemon.type.name}</span>
                            </div>
                        )
                    }
                    else if (pokemon.type.name === 'water') {
                        return (
                            <div className="water-block" key={'water'}>
                                <span>{pokemon.type.name}</span>
                            </div>
                        )
                    }
                    else if (pokemon.type.name === 'bug') {
                        return (
                            <div className="bug-block" key={'bug'}>
                                <span>{pokemon.type.name}</span>
                            </div>
                        )
                    }
                    else if (pokemon.type.name === 'normal') {
                        return (
                            <div className="normal-block" key={'normal'}>
                                <span>{pokemon.type.name}</span>
                            </div>
                        )
                    } 
                    else if (pokemon.type.name === 'electric') {
                        return (
                            <div className="electric-block" key={'electric'}>
                                <span>{pokemon.type.name}</span>
                            </div>
                        )
                    }
                    else if (pokemon.type.name === 'fairy') {
                        return (
                            <div className="fairy-block" key={'fairy'}>
                                <span>{pokemon.type.name}</span>
                            </div>
                        )
                    }
                    else if (pokemon.type.name === 'fighting') {
                        return (
                            <div className="fighting-block" key={'fighting'}>
                                <span>{pokemon.type.name}</span>
                            </div>
                        )
                    }
                    else if (pokemon.type.name === 'psychic') {
                        return (
                            <div className="psychic-block" key={'psychic'}>
                                <span>{pokemon.type.name}</span>
                            </div>
                        )
                    }
                    else if (pokemon.type.name === 'rock') {
                        return (
                            <div className="rock-block" key={'rock'}>
                                <span>{pokemon.type.name}</span>
                            </div>
                        )
                    }
                    else if (pokemon.type.name === 'steel') {
                        return (
                            <div className="steel-block" key={'steel'}>
                                <span>{pokemon.type.name}</span>
                            </div>
                        )
                    }
                    else if (pokemon.type.name === 'ice') {
                        return (
                            <div className="ice-block" key={'ice'}>
                                <span>{pokemon.type.name}</span>
                            </div>
                        )
                    }
                    else if (pokemon.type.name === 'ghost') {
                        return (
                            <div className="ghost-block" key={'ghost'}>
                                <span>{pokemon.type.name}</span>
                            </div>
                        )
                    }
                    else if (pokemon.type.name === 'ground') {
                        return (
                            <div className="ground-block" key={'ground'}>
                                <span>{pokemon.type.name}</span>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

const styles = {
    container: {
        display: 'grid',
        border: '1px solid #000',
        cursor: 'pointer',
        gridTemplateRows: '2fr 1fr 1fr',
    },
    imageBlock: {
        display: 'grid',
    },
    image: {
        justifySelf: 'center',
        alignSelf: 'center'
    },
    nameBlock: {
        display: 'grid',
    },
    name: {
        justifySelf: 'center',
        textTransform: 'capitalize'
    },
    typesBlock: {
        margin: '0px 5px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        justifyItems: 'center'
    }
}