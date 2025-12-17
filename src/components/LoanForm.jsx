import './LoanForm.css';

function LoanForm() {
    return (
        <section className="loan-form">
            <h2>Simula tu préstamo</h2>

            <div className="form-group">
                <label>Monto de préstamo</label>
                <input type="number" placeholder='Ejm. 2500' />
            </div>
            <div className="form-group">
                <label>Plazo de préstamo</label>
                <select>
                    <option>3 meses</option>
                    <option>6 meses</option>
                    <option>12 meses</option>
                    <option>24 meses</option>
                </select>
            </div>
            <button className="calculate-button">Calcular</button>
        </section>
    );
}

export default LoanForm;