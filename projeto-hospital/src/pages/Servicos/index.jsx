import './style.css';

function Servicos() {
    const lista = [
    { nome: 'Consultas Médicas', desc: 'Mais de 30 especialidades ambulatoriais disponíveis.' },
    { nome: 'Exames de Imagem', desc: 'Ressonância Magnética, Tomografia Computadorizada e Ultrassom.' },
    { nome: 'Unidade de Terapia Intensiva (UTI)', desc: 'Monitoramento crítico e suporte à vida 24 horas por dia.' },
    { nome: 'Centro Cirúrgico', desc: 'Estrutura completa para procedimentos de pequena a alta complexidade.' }
    ];

    return (
    <div className="servicos-container">
        <h1>Nossos Serviços</h1>
        <div className="servicos-grid">
        {lista.map((item, index) => (
            <div key={index} className="servico-item">
            <h3>{item.nome}</h3>
            <p>{item.desc}</p>
            </div>
        ))}
        </div>
    </div>
    );
}

export default Servicos;