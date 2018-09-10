(function(){
    var wrapTarget = utils.$('#TodoList');

    var btnSubmit = utils.$('.btn_todo', wrapTarget);
    var btnRemove = document.getElementsByClassName("btn_remove");
    
    var Todo = TodoList();
    
    btnSubmit.addEventListener('click', function(){
        Todo.init();
    });
    
})();