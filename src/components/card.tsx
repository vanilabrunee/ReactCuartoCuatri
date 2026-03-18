import "./card.css";

interface CardProps {
    imageUrl: string
    name: string
    life: string
    weight: string
    energy: number
}

const Card = ({ imageUrl, name, life, weight, energy }: CardProps) => {
    return (
    <div 
        className="card">
        <h2 className="nombre">{name}</h2>
        <img
            className="imagen"
            src={imageUrl}
            alt={name}
        />
    <p className="info"><strong>Esperanza de vida:</strong> {life}</p>
    <p className="info"><strong>Peso:</strong> {weight}</p>
    <p className="info"><strong>Nivel de energía:</strong> {energy} / 5</p>
    </div>
);
};

export default Card;