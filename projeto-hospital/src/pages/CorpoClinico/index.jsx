import './style.css';

function CorpoClinico() {
    const medicos = [
    { nome: 'Dr. Denner Nascimento', esp: 'Cardiologia - CRM 12345' },
    { nome: 'Dra. Roberto Costa', esp: 'Pediatria - CRM 67890' },
    { nome: 'Dr. Raylan Costa', esp: 'Ortopedia - CRM 54321' },
    { nome: 'Eder Simplicio', esp: 'Neurologia - CRM 98765' }
    ];

    return (
    <div className="corpo-container">
        <h1>Corpo Clínico</h1>
        <div className="medicos-grid">
        {medicos.map((med, index) => (
            <div key={index} className="medico-card">
            <div className="avatar">👨‍⚕️</div>
            <h3>{med.nome}</h3>
            <p>{med.esp}</p>
            </div>
        ))}
        </div>
    </div>
    );
}

export default CorpoClinico;