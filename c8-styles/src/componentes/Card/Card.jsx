// Importamos el css normal:
    
    // import './styles.css' 

    // const Card = () => {
    //     return (
    //         <div className="caja">
    //             Soy una card!
    //         </div>
    //     )
    // }
    // export default Card;




// Importamos el css con modulo

    // import styles from './Card.module.css' 
    
    // const Card = () => {
    //     return (
    //         <div className={styles.caja}>
    //             Soy una card!
    //         </div>
    //     )
    // }

    // export default Card;


// Importamos el css con modulo desde scss

    import styles from './Card.module.scss'
    import solImage from '../../assets/sol.jpg'

    const Card = () => {
        return (
            <div className={styles.caja}>
                <h1>Me llamo Sol</h1>
                <img src={solImage} alt="El Sol" />
                <p>Soy una estrella que te proporciona luz y calor</p>
                <button>Conoce más sobre mí</button>
            </div>
        )
    }

    export default Card;





// Importamos el css con modulo desde sass

// import styles from './Card.module.sass'

//     const Card = () => {
//         return (
//             <div className={styles.caja}>
//                 Soy una card!
//             </div>
//         )
//     }

//     export default Card;