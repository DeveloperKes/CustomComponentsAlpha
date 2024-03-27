import CustomAppComponent from "/app/settings/custom_component.js";
const parameters = {
    templateUrl: 'field.view.scss',
    stylesUrl: ['field.styles.scss']
}
class FieldComponent extends CustomAppComponent {
    constructor() {
        super('field', parameters);
        this.loadPromise.then(() => {
            this.initialize();
        });
    }


    initialize() {
        const [role, type, id, labelText, placeholder] = [this.getAttribute('role'), this.getAttribute('type'), this.getAttribute('id-field'), this.getAttribute('label'), this.getAttribute('placeholder')];
        console.log(role, type, id, labelText);
        if (role == 'input') {
            const input = document.createElement('input');
            input.type = type;
            input.id = id;
            input.placeholder = placeholder;
            const label = document.createElement('label');
            label.textContent = labelText;
            label.setAttribute('for', id);
            this.shadowRoot.appendChild(label);
            this.shadowRoot.appendChild(input);
        }
        if (role == 'select') {
            const select = document.createElement('select');
            select.multiple = type == 'multiple';
            if(placeholder){
                const option_placeholder = document.createElement('option');
                option_placeholder.hidden = true;
                option_placeholder.selected = true;
                option_placeholder.textContent = placeholder;
                select.options.add(option_placeholder);
            }
            const label = document.createElement('label');
            label.textContent = labelText;
            label.setAttribute('for', id);
            this.shadowRoot.appendChild(label);
            this.shadowRoot.appendChild(select);
        }
    }

}
export default FieldComponent;