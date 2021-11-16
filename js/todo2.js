function outer(){

    let arr = []
    let idx = 0

    function add(todo) {
        todo.idx = idx++
        arr.push(todo)
    }
    function  removeTodo(num){
        console.log("remove Todo...")

       const result = arr.filter(todo => todo.idx !== num)
        arr = result
    }
    function  getTodo(idx){
        console.log("get Todo....")
    }
    function getAll(){
        return arr
    }
    function changeAll(){
        for (let i = 0; i < arr.length; i++) {
            arr[i].complete =! arr[i].complete
        }
    }

    function deleteAll(){
            arr.splice(0,arr.length)

    }

    const obj = {add, removeTodo, getTodo, getAll, changeAll,deleteAll} //객체 리터럴에 add키값에 add를 반환

    return obj


}