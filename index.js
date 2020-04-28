$(document).ready(function(){

    var writeTodo = function(todo){
        if (todo){
            $('#doList').append(`
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            <input type="checkbox" aria-label="Checkbox for following text input">
                        </div>
                    </div>
                    <input type="text" class="form-control" value="${todo}" aria-label="Text input with checkbox">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary text-white bg-danger delTask" >Delete</button>
                    </div>
                </div>
            `);
        }
    }


// Add button will create a new task //

    $('#todo-add').on('click', function(){
        var todo = $("#todo").val();
        console.log(todo);
        writeTodo(todo);
        $('#todo').val('');
    });

//Delete button will remove task //

    $(document).on("click", '.delTask', function(){
        $(this).closest("div.input-group.mb-3").remove();
        console.log("item");
    });

// type press enter auto adds to list //

    $('#todo').keydown(function(){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            var todo = $("#todo").val();
            console.log(todo);
            writeTodo(todo);
            $('#todo').val('');
        }
    });

});
