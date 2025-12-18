import './Stats.css';

function Stats({ total }) {
    return (
        <section className="stats">
            <h2>Estadísticas</h2>
            <p>
                Cotizaciones realizadas: <strong>{total}</strong>
            </p>
        </section>
    );
}

export default Stats;
