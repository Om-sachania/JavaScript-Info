class BaseClass {
    constructor() {
        this.element = document.getElementById(this.constructor.name);
        // console.log(this.element)
    }
    render(renderFun) {
        console.log(renderFun)
        const childElement = renderFun();
        this.element.innerHTML = '';
        this.element.append(childElement);
        this.listenEvent();
    }
    listenEvent() {
        
    }
}