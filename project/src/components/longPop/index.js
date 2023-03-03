import LongPop from './LongPop.vue';
export default {
    install(Vue) {
        var LongPopClass = Vue.extend(LongPop);
        var longPopInstace = new LongPopClass();
        longPopInstace.$mount(document.createElement("div"));
        document.body.appendChild(longPopInstace.$el);
        Vue.directive('long-pop', {
            inserted(el, binding) {
                el.ontouchstart = (event) => {
                    event.stopPropagation();
                    binding.timer = setTimeout(() => {
                        event.preventDefault();
                        longPopInstace.isShow = true;
                        longPopInstace.src = binding.value.img;
                        if (binding.value.callback) {
                            binding.value.callback()
                        }
                    }, 1200);
                };
                el.ontouchmove = () => {
                    clearTimeout(binding.timer);
                };
                el.ontouchend = () => {
                    clearTimeout(binding.timer);
                };
            },
            update(el, binding) {
                el.ontouchstart = (event) => {
                    event.stopPropagation();
                    binding.timer = setTimeout(() => {
                        longPopInstace.isShow = true;
                        longPopInstace.src = binding.value.img;
                        if (binding.value.callback) {
                            binding.value.callback()
                        }
                    }, 1200);
                };
                el.ontouchmove = () => {
                    clearTimeout(binding.timer);
                };
                el.ontouchend = () => {
                    clearTimeout(binding.timer);
                };
            }
        })
    }
}