function clear(elem) {
    for (let i = 0; i <= elem.children.length; i++) {
        console.log(i);
        elem.children[0].remove();
        // console.log(i);
        // elem.children[0].remove();
        // console.log(elem.children[0]);
        // //elem.children[0].remove();
    }

    // while (elem.firstChild) {
    //     elem.firstChild.remove()
    // }

    //elem.innerHTML = '';
}
let orderList = ol;
clear(orderList);