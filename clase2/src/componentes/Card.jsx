const Card = ({title, description}) => { // Desestructuramos las props para obtener title y description
    return (
        <section>
            <h2>{title}</h2>     
            <p>{description}</p>
        </section>
    )
}

export default Card;