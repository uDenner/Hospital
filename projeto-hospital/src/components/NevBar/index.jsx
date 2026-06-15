import { Link } from 'react-router-dom';

function Navbar() {
    return (
    <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '15px 40px', backgroundColor: '#005b94', color: 'white'
    }}>
        <h2 style={{ margin: 0 }}>🏥 HospTui</h2>
        <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Home</Link>
        <Link to="/quem-somos" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Quem Somos</Link>
        <Link to="/servicos" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Serviços</Link>
        <Link to="/corpo-clinico" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Corpo Clínico</Link>
        <Link to="/blog" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Blog</Link>
        <Link to="/contato" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Contato</Link>
        </div>
    </nav>
    );
}

export default Navbar;