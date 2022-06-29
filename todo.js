let input = prompt("What would u like to do?")

const todos = ["Hello", "World"] //todo list database

//quit feature
while(input!=="quit" && input !== "q"){
    input=prompt("What would u like to do?")

    if(input == "list"){ //list feature
        console.log("*******************")
        for(let i=0;i<todos.length;i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("*******************")
    } else if (input == "new"){ //new feature
        const newTodo = prompt("What is the new todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    } else if (input == "delete"){ //delete feature
        const index = parseInt(prompt("Enter an index to delete")); //parse any string into integers
        if(!Number.isNaN(index)){//if not NaN
            const deleted = todos.splice(index, 1); //new array without the deleted element
            console.log(`deleted "${deleted[0]}" off the list`);
        }else{
            console.log("Unknown index, please check again.");
        }
        
    }

}
console.log("OK QUIT THE APP!");

