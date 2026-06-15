import { useState } from 'react';
import './style.css';

function Contato() {
    const [enviado, setEnviado] = useState(false);

    return (
    <div className="contato-container">
        <div className="info">
        <h1>Fale Conosco</h1>
        <p>🏥 <strong>Endereço:</strong> Av. da Saúde, 777 - Centro</p>
        <p>📞 <strong>Telefone:</strong> (11) 4002-8922</p>
        <p>✉️ <strong>E-mail:</strong> contato@hospTui97.com.br</p>
        </div>

        <div className="formulario">
        <h3>Envie uma mensagem</h3>
        {enviado ? (
            <p className="sucesso">✅ Mensagem enviada com sucesso!</p>
        ) : (
            <form onSubmit={(e) => { e.preventDefault(); setEnviado(true); }}>
            <input type="text" placeholder="Seu Nome" required />
            <input type="email" placeholder="Seu E-mail" required />
            <textarea placeholder="Sua Mensagem" rows="4" required></textarea>
            <button type="submit">Enviar</button>
            </form>
        )}
        </div>
    </div>
    );
}

export default Contato;