export default class DirectivesLoader {

    static load(Vue) {

        Vue.directive('form-required', {
            componentUpdated(el, binding) {
                if (binding.arg == 'value' && binding.value && binding.value.trim()) {
                    $(el).removeClass("has-error").addClass("has-success");
                } else {
                    $(el).removeClass("has-success").addClass("has-error");
                }
            }
        });
    }
    
}