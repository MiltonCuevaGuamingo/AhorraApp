import './LoanForm.css';
import { useState } from 'react';
import { useEffect } from 'react';

function LoanForm() {
    const [amount, setAmount] = useState('');
    const [months, setMonths] = useState('3');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    function calculateLoan() {
        if (amount == '') return;

        const amountNumber = Number(amount);
        const monthsNumber = Number(months);

        const monthlyPayment = amountNumber / monthsNumber;

        const totalPayment = amountNumber;
        setResult({
            amount: amountNumber,
            months: monthsNumber,
            monthly: monthlyPayment,
            total: totalPayment
        })
    }

    useEffect(() => {
        if (amount === '') {
            setResult(null);
            return
        }

        if (amount <= 0) {
            setError('Debes ingresar un monto mayor a 0');
            setResult(null);
            return;
        }
        setError('');



        return (
            <section className="loan-form">
                <h2>Simula tu préstamo</h2>

                <div className="form-group">
                    <label>Monto de préstamo</label>
                    <input type="number" placeholder='Ejm. 2500' value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Plazo de préstamo</label>
                    <select value={months} onChange={(e) => setMonths(e.target.value)}>
                        <option value="3">3 meses</option>
                        <option value="6">6 meses</option>
                        <option value="12">12 meses</option>
                        <option value="24">24 meses</option>
                    </select>
                </div>
                <button className="calculate-button"
                    onClick={calculateLoan}>Calcular</button>

                {result && (
                    <div className="result">
                        <p>Cantidad solicitada: ${result.amount}</p>
                        <p>Plazo: ${result.months} meses</p>
                        <p>Pago mensual: ${result.monthly.toFixed(2)}</p>
                        <p>Pago total: ${result.total}</p>
                    </div>
                )}
            </section>
        );
    }

export default LoanForm;