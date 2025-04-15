let towers = document.getElementsByClassName('towers');
let arrOfTowers = Array.from(towers)
// console.log(arrOfTowers);
let count = 0;
let disks = document.getElementsByClassName('disks');
let arrOfDisks = Array.from(disks)
// console.log(arrOfDisks);

arrOfDisks.forEach((disk)=>{
    // console.log(disk)
    disk.addEventListener('dragstart',(e)=>{
        // console.log(e.target);
        disk.classList.add('dragging')
    })
    disk.addEventListener('dragend',()=>{
        disk.classList.remove('dragging');
    })
})

arrOfTowers.forEach((tower)=>{
    tower.addEventListener('dragover',()=>{
        let currDisk = document.querySelector('.dragging');
        let lastChild = tower.lastElementChild
        let firstChild = tower.firstElementChild
        if(currDisk.previousElementSibling.className === 'disks'){
            return
        }

        if(lastChild.className === 'pole'){
            tower.appendChild(currDisk);
            // arr.push(1);
            // console.log(arr)
            // count++;
            // console.log(`${currDisk.id} moved from ${currDisk.id} to ${tower.id}`)
        }
        else{
            let lastDiskattribute = lastChild.getAttribute('diskNumber');
            let currDiskattribute = currDisk.getAttribute('diskNumber');
            if(+lastDiskattribute < +currDiskattribute){
                return
            }
            else{
                firstChild.after(currDisk);
                // count++
                // console.log(`${currDisk.id} moved from ${tower.previousElementSibling.id} to ${tower.id}`)
            }
        }
        // tower.appendChild(currDisk)
    })
})
// let disk1 = document.getElementById('disk1');
// console.log(disk1)

// let attribute = disk1.getAttribute('diskNumber');
// console.log(+attribute)

// let disk2 = document.getElementById('disk2');
// console.log(disk1)

// let attribute1 = disk2.getAttribute('diskNumber');
// console.log(+attribute1)