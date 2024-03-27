
class CustomOutlet extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        console.log('Se cargo el componente');
        this.shadowRoot.innerHTML = '<h1>Hola</h1>'
    }
}

customElements.define('fnn-router-outlet', CustomOutlet);