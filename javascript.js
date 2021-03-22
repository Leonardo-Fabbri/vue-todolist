var app = new Vue ( {
    el: "#root",
    data: {
        newTodo:"",
        todos: [
            "Finire ES",
            "Boolean: 9.30-18:00",
            "Passeggiata con il cane ",
            "Mangiare sano",
            "Netflix"

        ]
    },
    methods: {
        addTodo(){
            this.todos.push(this.newTodo);
            this.newTodo="";
        //push nuovo elemento e dopo svuotalo per poter inserirne
        //uno nuovo.
        },
        removeTodo(index) {
            this.todos.splice(index,1);
        }
    }
});

//SPLICE cancella tutti gli indici da se stesso in poi
//se specificagto, (index,1) cancellerà solo quel dato 
//elemento.