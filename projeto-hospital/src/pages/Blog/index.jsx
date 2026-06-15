import './style.css';

function Blog() {
    const posts = [
    { titulo: 'A importância do Check-up Anual', data: '12 Junho, 2026', resumo: 'Prevenir é a melhor escolha. Saiba quais exames preventivos são cruciais de acordo com sua idade.' },
    { titulo: 'Como manter o coração saudável', data: '05 Junho, 2026', resumo: 'Pequenas mudanças de hábitos alimentares e rotinas físicas protegem sua saúde cardiovascular.' }
    ];

    return (
    <div className="blog-container">
        <h1>Blog & Novidades</h1>
        {posts.map((post, index) => (
        <article key={index} className="post">
            <h2>{post.titulo}</h2>
            <small>{post.data}</small>
            <p>{post.resumo}</p>
        </article>
        ))}
    </div>
    );
}

export default Blog;