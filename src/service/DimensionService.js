let DimensionMixin = {
    arrEventListeners: {},

    listenResizeEvent(callback) {
        const symbolKey = Symbol()
        DimensionMixin.arrEventListeners[symbolKey] = callback
        return symbolKey
    },

    removeListenResizeEvent(eventKey) {
        delete DimensionMixin.arrEventListeners[eventKey]
    }, 

    getScreenDimension() {
        const w = window,
            d = document,
            documentElement = d.documentElement,
            body = d.getElementsByTagName('body')[0],
            width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
            height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

        return {width: width, height: height};
    },

    getDeviceSize() {
        return {width: window.screen.availWidth, height: window.screen.availHeight};
    }
}

window.addEventListener("resize", () => {
    const arrSymbolKey = Object.getOwnPropertySymbols(DimensionMixin.arrEventListeners)
    arrSymbolKey.map( symolKey => {
        DimensionMixin.arrEventListeners[symolKey](DimensionMixin.getScreenDimension())
    })
});

export default DimensionMixin;