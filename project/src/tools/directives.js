/**
 * callback
 * src
 * @param {*} el 
 * @param {*} obj 
 */
export const hover = (el, obj) => {
    el.ontouchstart = (event) => {
        event.stopPropagation();
        obj.timer = setTimeout(() => {
            obj.value.cbHover(obj.value.src)
        }, 1200);
    };
    el.ontouchmove = () => {
        clearTimeout(obj.timer);
    };
    el.ontouchend = () => {
        clearTimeout(obj.timer);
    };
}