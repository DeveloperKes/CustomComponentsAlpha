class CustomAppComponent extends HTMLElement {
    constructor(component) {
        super();
        this.attachShadow({ mode: 'open' });
        // Crear la promesa que se resolverá cuando los recursos estén cargados
        this.loadPromise = new Promise((resolve, reject) => {
            this.resolveLoadPromise = resolve;
        });

        // Cargar los recursos y resolver la promesa cuando estén cargados
        this.loadResources(component);

    }
    async loadResources(component) {
        await Promise.all([
            fetch(`/app/components/${component}/${component}.view.html`)
                .then(response => response.text())
                .then(html => {
                    this.shadowRoot.innerHTML = html;
                }),
            fetch(`/app/components/${component}/${component}.styles.css`)
                .then(response => response.text())
                .then(css => {
                    const styles = document.createElement('style');
                    styles.innerHTML = css;
                    this.shadowRoot.insertBefore(styles, this.shadowRoot.firstChild);
                })
        ]);

        // Resolver la promesa una vez que los recursos estén cargados
        this.resolveLoadPromise();
    }
}

export default CustomAppComponent;