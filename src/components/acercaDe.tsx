import "./acercaDe.css"; 

function AcercaDe() {
  return (
    <div className="acerca-container">
      <span className="huella">🐾</span>
      <h2>Sobre este Proyecto</h2>
      <p>
        Esta aplicación fue creada para practicar los fundamentos de <strong>React</strong>, 
        el uso de <strong>Hooks</strong> (useState, useEffect) y el consumo de APIs externas.
      </p>
      <p>
        Buscamos información en tiempo real sobre diferentes razas de perros para 
        conocer sus características y cuidados.
      </p>
      
      <div className="info-extra">
        <span>React + Vite</span>
        <span>Dog API</span>
        <span>TypeScript</span>
      </div>
    </div>
  );
}

export default AcercaDe;