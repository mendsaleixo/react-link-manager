import { useState } from "react";

function LinkForm({ onAddNewLink }) {
  const [titulo, setTitulo] = useState("");
  const [url, setUrl] = useState("");
  const [categoria, setCategoria] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedTitulo = titulo.trim();
    const trimmedUrl = url.trim();
    const trimmedCategoria = categoria.trim();

    if (!trimmedTitulo || !trimmedUrl || !trimmedCategoria) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    let finalUrl = trimmedUrl;
    if (!finalUrl.startsWith("http")) {
      finalUrl = `https://${finalUrl}`;
    }

    try {
      new URL(finalUrl);
    } catch (error) {
      alert("Por favor, insira uma URL válida.");
      return;
    }

    const newLinkData = {
      titulo: trimmedTitulo,
      url: finalUrl,
      categoria: trimmedCategoria,
      read: false,
    };

    onAddNewLink(newLinkData);

    setTitulo("");
    setUrl("");
    setCategoria("");
  };

  return (
    <form onSubmit={handleSubmit} className="link-form">
      <h2>Adicionar Novo Link</h2>
      <div className="form-group">
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
      <div className="form-group">
        <label htmlFor="url">URL</label>
        <input
          type="text"
          id="url"
          placeholder="react.dev"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
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
      <button type="submit" className="form-button">
        Adicionar
      </button>
    </form>
  );
}

export default LinkForm;
