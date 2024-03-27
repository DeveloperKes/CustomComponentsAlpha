import CustomAppComponent from "/app/settings/custom_component.js";
const parameters = {
    templateUrl: 'header.view.scss',
    stylesUrl: ['header.styles.scss']
}
class HeaderComponent extends CustomAppComponent {
    constructor() {
        super('header', parameters);
    }
}

export default HeaderComponent;