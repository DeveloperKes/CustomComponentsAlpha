export class Router {
    routes = [];
    constructor() {

    }
    addRoutes(routes) {
        if (Array.isArray(routes)) {
            this.router = this.routes.concat(routes);
        }
    }
}

class CustomOutlet extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
    }
}

customElements.define('fnn-router-outlet', CustomOutlet);