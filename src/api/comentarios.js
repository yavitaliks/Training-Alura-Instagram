export function adicionarComentario(conteudoCampoInput, username) {
  const novoComentario = {
    date: Date.now,
    text: conteudoCampoInput,
    userName: username,
  };
  return novoComentario;
}
