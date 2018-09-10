function TodoList(){

    var todoListWrap = utils.$('#TodoList');
    var todoValueElem = utils.$('.inp_todo', todoListWrap );
    var listTodo = utils.$('.list_chkBox', todoListWrap );
    var txt = '';

    //값 업데이트..
    function updateValue(){
        txt += '<li><label class="tit_chkList"><input type="checkbox" class="chk_todo">';
        txt += '<span class="txt_todo"> ' + todoValueElem.value + '</span>';
        txt += '</label><button type="button" class="btn_remove">x</button></li>';

        todoValueElem.value = '';
        listTodo.innerHTML = txt;
    }

    //삭제
    function removeValue(){
        var btnRemove = utils.$$('.btn_remove', todoListWrap );

        btnRemove.forEach(function( elem ){
            elem.addEventListener('click', function(){
                this.parentNode.parentNode.removeChild( this.parentNode );
            });
        });   
    }

    return {
        init : function(){
            updateValue();
            removeValue();
        }
    }

}