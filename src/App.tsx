// Arquivo: src/App.tsx
import { useState, useEffect } from "react";
import LinkList from "./components/LinkList";
import type { LinkType } from "./types";

const apiUrl =
  "https://my-json-server.typicode.com/mendsaleixo/link-manager-api/links";

function App() {
  const [links, setLinks] = useState<LinkType[]>([]);
  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Falha ao buscar os links da API.");
        }
        const data: LinkType[] = await response.json();
        setLinks(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLinks();
  }, []);

  return (
    <div>
      <h1>Gerenciador de Links</h1>
      <LinkList links={links} />
    </div>
  );
}

export default App;
