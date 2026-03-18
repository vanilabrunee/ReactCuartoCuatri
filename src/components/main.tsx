import { useState } from "react";
import Card from "./card.tsx";
import "./main.css";


interface Perrito {
    name: string;
    image_link: string;
    min_life_expectancy: number;
    max_life_expectancy: number;
    min_weight_male: number;
    max_weight_male: number;
    energy: number;
}

function main() {
    const [perrito, setPerrito] = useState<Perrito>();  
    const [raza, setRaza] = useState(""); 
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(""); 

  const API_KEY = "gaaDiAVieV66SWw6J5zxyHi9LCTplYpCDMxnxQs9";  //clave que me pide la API

    const traerPerrito = async () => {
    setCargando(true);
    setError("");

    try {
        const respuesta = await fetch(
        `https://api.api-ninjas.com/v1/dogs?name=${raza}`,
        {
            headers: {
            "X-Api-Key" : API_KEY
        }
        }
    );

        const datos = await respuesta.json();

        if (datos && datos.length > 0) {
        setPerrito(datos[0]);  
        } else {
        setError("No encontramos esa raza 😢");
        }
    } catch (err) {
        setError("Algo salió mal al conectar con la API");
    } finally {
        setCargando(false);
    }
    };

        

    return (
    <div style={{ display: "flex", flexDirection: "column", padding: "2rem", textAlign: "center" }}>
        <h1 className='titulo'>¡Busca tu raza favorita! 🐶 </h1>

    <input className='input'
        type="text"
        placeholder="Nombre de la raza (ej: husky, labrador)"
        value={raza}
        onChange={(e) => setRaza(e.target.value)}
        disabled={cargando}
                
        onFocus={(e) => e.target.style.borderColor = '#4CAF50'}
        onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
        />

        <button className='boton'
        onClick={traerPerrito}
        disabled={cargando}
        >
        {cargando ? "Buscando..." : "Mostrar Perrito"}
        </button>

        {cargando && <p>Cargando datos del perrito...</p>}

        {error && <p style={{ color: "red" }}>{error}</p>}

        {perrito && (
        <Card 
            imageUrl={perrito.image_link}
            name={perrito.name}
            life={perrito.min_life_expectancy + " - " + perrito.max_life_expectancy + " años"}
            weight={perrito.min_weight_male + " - " + perrito.max_weight_male + " libras"}
            energy={perrito.energy}
        />
        )}

        {!perrito && !cargando && !error && (
        <p style={{ color: "#666" }}>
            Apretá el botón para ver info y foto de un perrito 😊
        </p>
        )}
        </div>
    )
}  


export default main