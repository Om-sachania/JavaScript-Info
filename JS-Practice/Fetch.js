async function fetchAPI(){
    let url = 'https://jsonplaceholder.typicode.com/posts/1';
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    console.log(data);
}

fetchAPI();


// const url='https://jsonplaceholder.typicode.com/posts/1';
// fetch(url)
//     .then(response =>{
//         if(!response.ok){
//             throw new Error("Network response was not ok!");
//         }
//         return response.json();
//     })
//     .then(data =>{
//         console.log(data);
//     })
//     .catch(err =>{
//         console.error('Error : ',err);
//     })

// Getting an image : 
// async function displayImage(){
//     let response = await fetch('DOM/images/1.jpg');
//     let blob = await response.blob();

//     let img =document.createElement('img');
//     img.style='position:fixed;top:10px;left:10px;width:100px';
//     document.body.append(img);

//     img.src=URL.createObjectURL(blob);

//     setTimeout(() => { // hide after three seconds
//         img.remove();
//         URL.revokeObjectURL(img.src);
//     }, 3000);
// }

// displayImage()

// POST Request : 

// let user={
//     name : 'John',
//     surname : 'Attkinson',
// }

// fetch("https://jsonplaceholder.typicode.com/todos",{
//     method: 'POST',
//     headers : {
//         'Content-Type' : 'application/json;charset=utf-8'
//     },
//     body : JSON.stringify(user)
// })
// .then((response)=>response.json())
// .then((data)=>console.log(data));


