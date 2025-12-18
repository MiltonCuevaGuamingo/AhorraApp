import { useState } from 'react';
import './LoanForm.css';

function LoanForm({ onCalculate }) {

    const [amount, setAmount] = useState('');
    const [months, setMonths] = useState('3');
    const [result, setResult] = useState(null);

    function calculateLoan() {
        const monto = Number(amount);
        const plazo = Number(months);

        if (monto <= 0 || plazo <= 0) return;

        const pagoMensual = monto / plazo;
        const pagoTotal = monto;

        setResult({
            amount: monto,
            months: plazo,
            mensual: pagoMensual,
            total: pagoTotal
        });

        onCalculate();
    }

    return (
        <section className="loan-form">
            <h2>Simula tu préstamo</h2>

            <div className="form-group">
                <label>Monto de préstamo</label>
                <input
                    type="number"
                    placeholder="Ej. 2500"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Plazo de préstamo</label>
                <select
                    value={months}
                    onChange={(e) => setMonths(e.target.value)}
                >
                    <option value="3">3 meses</option>
                    <option value="6">6 meses</option>
                    <option value="12">12 meses</option>
                    <option value="24">24 meses</option>
                </select>
            </div>

            <button className="calculate-button" onClick={calculateLoan}>
                Calcular
            </button>

            {result && (
                <div className="result">
                    <p>Cantidad solicitada: <strong>${result.amount}</strong></p>
                    <p>Plazo: <strong>{result.months} meses</strong></p>
                    <p>Pago mensual: <strong>${result.mensual.toFixed(2)}</strong></p>
                    <p>Pago total: <strong>${result.total}</strong></p>
                </div>
            )}
        </section>
    );
}

export default LoanForm;
