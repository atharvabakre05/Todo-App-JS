// let todo = [];
// let req = prompt("Enter your request");

// while(true) {

//     if(req == "quit") {
//         console.log("You quit the app");
//         break;
//     }
//     else if(req == "list") {
//         console.log("---------------");
//         for(let i=0; i<todo.length;i++) {
//             console.log(i, todo[i]);
//         }
//         console.log("---------------");
//     }
//     else if(req == "add") {
//         let task = prompt("Enter the task that you want to add");
//         todo.push(task);
//         console.log("Task Added");
//     }
//     else if(req == "delete") {
//         let idx = prompt("Enter the task that you want to delete");
//         todo.splice(idx, 1);
//     }
//     else{
//         console.log("Wrong request");
//     }
//      req = prompt("Enter your request");

// }


let todo = [];
let req = prompt("Enter your request");
while(true) {
    if(req == "quit") {
        console.log("You quit the game");
        break;
    }

    else if(req == "list") {
        console.log("--------");
        for(i = 0; i<todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("--------");
    }
    else if(req == "add") {
        let task = prompt("Enter your task");
        todo.push(task);
        console.log("Task Added");
    }
    else if(req == "delete"){
        let idx = prompt("Enter the index of the task that you want to delete");
        todo.splice(idx, 1);
        console.log("Item deleted");
    }
    else{
        console.log("Wrong request");
    }
    req = prompt("Enter your request");
}









