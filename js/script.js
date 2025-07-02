// Seleciona todas as imagens dentro do container #imagens
const imagens = document.querySelectorAll('#imagens img');

imagens.forEach(img => {
  // Criar um container relativo para a imagem (se já não tiver)
  const wrapper = document.createElement('div');
  wrapper.style.position = 'relative';
  wrapper.style.display = 'inline-block';

  // Coloca o wrapper no lugar da imagem e move a imagem para dentro do wrapper
  img.parentNode.insertBefore(wrapper, img);
  wrapper.appendChild(img);

  // Cria o overlay
  const overlay = document.createElement('div');
  overlay.classList.add('img-overlay');
  overlay.textContent = img.alt;

  // Adiciona o overlay no wrapper
  wrapper.appendChild(overlay);

  // Mostrar o overlay ao passar o mouse
  wrapper.addEventListener('mouseenter', () => {
    overlay.style.opacity = '1';
  });
  wrapper.addEventListener('mouseleave', () => {
    overlay.style.opacity = '0';
  });
});
