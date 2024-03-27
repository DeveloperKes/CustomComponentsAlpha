import CustomAppModule from "/app/utils/custom_module.js";
const parameters = {
    templateUrl: 'groups.view.scss',
    stylesUrl: ['groups.styles.scss']
}
class GroupsModule extends CustomAppModule {
    constructor() {
        super('groups', parameters);
    }
}
export default GroupsModule;