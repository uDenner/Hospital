import './style.css';

function Home() {
    return (
    <div className="home-container">
        <h1>Cuidando da sua Saúde com Excelência</h1>
        <p>No HospTui, unimos tecnologia de ponta a um atendimento humanizado para garantir o bem-estar de toda a sua família.</p>
        
        <div className="home-cards">
        <div className="card">
            <h3>Pronto-Atendimento 24h</h3>
            <p>Equipe médica preparada para qualquer urgência a qualquer hora do dia ou da noite.</p>
        </div>
        <div className="card">
            <h3>Infraestrutura Moderna</h3>
            <p>Equipamentos de última geração para diagnósticos precisos e tratamentos seguros.</p>
        </div>
        </div>
    </div>
    );
}

export default Home;