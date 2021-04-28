class Navegacion extends HTMLElement {
  constructor(nombre) {
    super();
    this.nombre = nombre;
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
    nav {
      color: red;
    }
    </style>
    <nav>
      <a>Home</a>
      <a>About</a>
      <a>Contact</a>
    </nav>
    `;
  }
}

customElements.define("navegacion-component", Navegacion);
