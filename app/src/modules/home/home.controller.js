import CustomAppModule from "/app/settings/custom_module.js";
const parameters = {
    templateHTML: `<h1 class="title">Hola mundo</h1>`,
    stylesUrl: ['home.styles.scss']
}
class HomeModule extends CustomAppModule {
    constructor() {
        super('home', parameters);
    }
}
export default HomeModule;