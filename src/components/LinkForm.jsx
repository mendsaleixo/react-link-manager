import { useState } from "react";

function LinkForm() {
  const [titulo, setTitulo] = useState("");
  const [url, setUrl] = useState("");
  const [categoria, setCategoria] = useState("");

  return (
    <form onSubmit={() => {}}>
      <h2>Adicionar Novo Link</h2>

      <div>
        <label htmlFor="titulo">Título</label>
        <input
          type="text"
          id="titulo"
          placeholder="Ex: Documentação do React"
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
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
        />
      </div>

      <button type="submit">Adicionar</button>
    </form>
  );
}

export default LinkForm;
