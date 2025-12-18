import { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header';
import LoanForm from './components/LoanForm';
import Stats from './components/Stats';
import FeatureCard from './components/FeatureCard';

import featuresData from './data/features.json';

function App() {

  // Estado para las características (useEffect)
  const [features, setFeatures] = useState([]);

  // Estado para estadísticas reales
  const [totalQuotes, setTotalQuotes] = useState(0);

  // Se ejecuta al cargar la app
  useEffect(() => {
    setFeatures(featuresData);
  }, []);

  // Función que se ejecuta cuando se hace una cotización
  function registerQuote() {
    setTotalQuotes(prev => prev + 1);
  }

  return (
    <div className="app-container">
      <Header />

      <main>
        <LoanForm onCalculate={registerQuote} />

        <Stats total={totalQuotes} />

        <section className="features">
          <h2>¿Por qué usar nuestro cotizador?</h2>

          <div className="features-grid">
            {features.map(feature => (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
