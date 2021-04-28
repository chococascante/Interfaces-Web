window.onload = function () {
  const template = document.getElementById("template");
  template.innerHTML = `<p>Este es el nuevo contenido del template</p>`;
  document.body.appendChild(template.content);
};
