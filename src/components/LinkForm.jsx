import { useState } from "react";

function LinkForm({ onAddNewLink }) {
  const [titulo, setTitulo] = useState("");
  const [url, setUrl] = useState("");
  const [categoria, setCategoria] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!titulo || !url || !categoria) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const newLinkData = {
      titulo: titulo,
      url: url,
      categoria: categoria,
      lido: false,
    };

    onAddNewLink(newLinkData);

    setTitulo("");
    setUrl("");
    setCategoria("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Adicionar Novo Link</h2>
      <div>
        <label htmlFor="titulo">Título</label>
        <input
          type="text"
          id="titulo"
          placeholder="Ex: Documentação do React"
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="url">URL</label>
        <input
          type="url"
          id="url"
          placeholder="https://react.dev"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="categoria">Categoria</label>
        <input
          type="text"
          id="categoria"
          placeholder="Programação"
          value={categoria}
          onChange={(event) => setCategoria(event.target.value)}
          required
        />
      </div>
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default LinkForm;
