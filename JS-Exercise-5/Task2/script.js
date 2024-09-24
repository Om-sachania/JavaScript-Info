let div = document.getElementById('display');
let arrayOfNames = ["Ashish Shah",'Rashmin Chhatrala','Yash Dubey','Prakash Jain','Yashraj Singh','Viraj Sinha ','Rajesh Kumar','Mahesh Marwadi','Suresh Sahni','Virdas Singhania','Rajeshwari Bindra','Birendra Bhalerao','Virendra Bhupati','Bhupendra Singh','Bhuvam Bam','Shri Raj','Prashant Kamle','Kamlesh Tomar','Risabh Khare','Rishi Kohli','Kunwar Kharwanda','Kartik Koli','Komal Jain','Kartikey Pandey'];
let unOrdredList = document.getElementById('unOrderedList');
let inputField = document.getElementById('inputArea');


// inputField.addEventListener('input',function(){
//     let input = inputField.value.trim();
//     unOrdredList.innerHTML='';

//     if(input.length>2){
//         let filterName = arrayOfNames.filter((item)=>{
//             return item.toLowerCase().includes(input);
//         })
//         filterName.forEach((name)=>{
//             let highlightName = hightlight(name,input);
//             let list = document.createElement('li');
//             list.innerHTML = highlightName;
//             unOrdredList.append(list);
//             div.append(unOrdredList);
//         })
//     }
// })

// function hightlight(name,input) {
//     let lowerCaseName = name.toLowerCase();
//     let lowerCaseInput = input.toLowerCase();

//     let newName = '';
//     let startIndex=0;

//     while(startIndex < lowerCaseName.length){
//         let index = lowerCaseName.indexOf(lowerCaseInput,startIndex);
//         if(index == -1){
//             newName+=name.slice(startIndex);
//             break;
//         }
//         //newName+=name.slice(startIndex,index);
//         newName+=`<span class='highlight'>${name.slice(index,index+lowerCaseInput.length)}</span>`
//         startIndex=index+lowerCaseInput.length;
//     }
//     return newName;
// }

// function highlight(){

// }