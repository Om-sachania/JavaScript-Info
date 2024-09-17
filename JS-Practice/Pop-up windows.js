// window.open('https://google.com');

// clickBtn.onclick=function(){
//     window.open('https://google.com');
// }


let newWindow = open('/', 'example', 'width=300,height=300');

newWindow.onload = function() {
    newWindow.close();
    alert(newWindow.closed); // true
};