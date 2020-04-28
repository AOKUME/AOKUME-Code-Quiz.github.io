$(document).ready(function() {

    // On Click Start Button Will Create Question //

    $(document).on("click", '.start', function() {
        $("#question").remove();
        console.log("Restart Click Works");

        var confirm = "Start Click Works";
        console.log(confirm);

        $('#quizBox').append(`
            <div class="container" id="question">
                <p>Question 1 Goes here, How do i get data to return from a radio type input after the answer has been selected?</p>
                <label><input type="radio" name="questions"> answer 1</label><br>
                <label><input type="radio" name="questions"> answer 1</label><br>
                <label><input type="radio" name="questions"> answer 1</label><br>
                <label><input type="radio" name="questions"> answer 1</label><br>
                <button class="btn btn-primary submit1" type="button">Submit</button>
            </div>
        `);

        // This Deletes the Starting Content //
        $("#start").remove();

    });


    // submit1-5 button will remove Question1-5 and add next Question //

    $(document).on("click", '.submit1', function() {
        $("#question").remove();
        console.log("Submit Button 1 Works");

        $('#quizBox').append(`
            <div class="container" id="question">
                <p>Question 1 Goes here, How do i get data to return from a radio type input after the answer has been selected?</p>
                <label><input type="radio" name="questions"> answer 2</label><br>
                <label><input type="radio" name="questions"> answer 2</label><br>
                <label><input type="radio" name="questions"> answer 2</label><br>
                <label><input type="radio" name="questions"> answer 2</label><br>
                <button class="btn btn-primary submit2" type="button">Submit</button>
            </div>
        `);

    });


    $(document).on("click", '.submit2', function() {
        $("#question").remove();
        console.log("Submit Button 2 Works");

        $('#quizBox').append(`
            <div class="container" id="question">
                <p>Question 1 Goes here, How do i get data to return from a radio type input after the answer has been selected?</p>
                <label><input type="radio" name="questions"> answer 3</label><br>
                <label><input type="radio" name="questions"> answer 3</label><br>
                <label><input type="radio" name="questions"> answer 3</label><br>
                <label><input type="radio" name="questions"> answer 3</label><br>
                <button class="btn btn-primary submit3" type="button">Submit</button>
            </div>
        `);

    });


    $(document).on("click", '.submit3', function() {
        $("#question").remove();
        console.log("Submit Button 3 Works");

        $('#quizBox').append(`
            <div class="container" id="question">
                <p>Question 1 Goes here, How do i get data to return from a radio type input after the answer has been selected?</p>
                <label><input type="radio" name="questions"> answer 4</label><br>
                <label><input type="radio" name="questions"> answer 4</label><br>
                <label><input type="radio" name="questions"> answer 4</label><br>
                <label><input type="radio" name="questions"> answer 4</label><br>
                <button class="btn btn-primary submit4" type="button">Submit</button>
            </div>
        `);

    });


    $(document).on("click", '.submit4', function() {
        $("#question").remove();
        console.log("Submit Button 4 Works");

        $('#quizBox').append(`
            <div class="container" id="question">
                <p>Question 1 Goes here, How do i get data to return from a radio type input after the answer has been selected?</p>
                <label><input type="radio" name="questions"> answer 5</label><br>
                <label><input type="radio" name="questions"> answer 5</label><br>
                <label><input type="radio" name="questions"> answer 5</label><br>
                <label><input type="radio" name="questions"> answer 5</label><br>
                <button class="btn btn-primary submit5" type="button">Submit</button>
            </div>
        `);

    });


    $(document).on("click", '.submit5', function() {
        $("#question").remove();
        console.log("Submit Button 5 Works");

        $('#quizBox').append(`
            <div class="container" id="question">
                <h2>RESULTS</h2>
                <
                <button class="btn btn-primary btn-block start" type="button" id="start">Restart</button>
            </div>
        `);

    });



});
