const apiUrl = import.meta.env.VITE_SUPABASE_URL;
const apiKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const apiHeaders = {
  apikey: apiKey,
  Authorization: `Bearer ${apiKey}`,
  "Content-Type": "application/json",
};

export const getAllLinks = async () => {
  const response = await fetch(`${apiUrl}?select=*&order=created_at.desc`, {
    headers: { apikey: apiKey, Authorization: `Bearer ${apiKey}` },
  });
  if (!response.ok) throw new Error("Falha ao buscar os links.");
  return await response.json();
};

export const createLink = async (newLinkData) => {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: apiHeaders,
    body: JSON.stringify(newLinkData),
  });
  if (!response.ok) throw new Error("Falha ao adicionar o novo link.");
};

export const updateLink = async (id, updatedData) => {
  const response = await fetch(`${apiUrl}?id=eq.${id}`, {
    method: "PATCH",
    headers: apiHeaders,
    body: JSON.stringify(updatedData),
  });
  if (!response.ok) throw new Error("Falha ao atualizar o link.");
};

export const deleteLink = async (id) => {
  const response = await fetch(`${apiUrl}?id=eq.${id}`, {
    method: "DELETE",
    headers: { apikey: apiKey, Authorization: `Bearer ${apiKey}` },
  });
  if (!response.ok) throw new Error("Falha ao excluir o link.");
};
