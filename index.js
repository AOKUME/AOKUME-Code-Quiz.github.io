$(document).ready(function() {

    // Collectes/Checks Radio Value //

    $(document).on("click", '.chkBtn', function() {
        var radioValue = $("input[name='questions']:checked").val();
        if (radioValue) {
            alert("Your are " + radioValue);
        }

        // checks if answer is true or false > if true go next > if false reduce time and go next

    });

    // On Click Start Button Will Create Question //

    $(document).on("click", '.start', function() {
        $("#question").remove();
        console.log("Restart Click Works");

        var confirm = "Start Click Works";
        console.log(confirm);

        $('#quizBox').append(`
            <div class="container" id="question">
                <p>Question 1 Goes here, How do i get data to return from a radio type input after the answer has been selected?</p>
                <label><input type="radio" value="correct" name="questions"> answer1</label><br>
                <label><input type="radio" value="wrong" name="questions"> answer1</label><br>
                <label><input type="radio" value="wrong" name="questions"> answer1</label><br>
                <label><input type="radio" value="wrong" name="questions"> answer1</label><br>
                <p><input class="btn btn-primary submit1 chkBtn" type="button" value="Get Value"></p>
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
                <label><input type="radio" value="correct" name="questions"> answer2</label><br>
                <label><input type="radio" value="wrong" name="questions"> answer2</label><br>
                <label><input type="radio" value="wrong" name="questions"> answer2</label><br>
                <label><input type="radio" value="wrong" name="questions"> answer2</label><br>
                <p><input class="btn btn-primary submit2 chkBtn" type="button" value="Get Value"></p>
            </div>
        `);

    });


    $(document).on("click", '.submit2', function() {
        $("#question").remove();
        console.log("Submit Button 2 Works");

        $('#quizBox').append(`
            <div class="container" id="question">
                <p>Question 1 Goes here, How do i get data to return from a radio type input after the answer has been selected?</p>
                <label><input type="radio" value="correct" name="questions"> answer3</label><br>
                <label><input type="radio" value="wrong" name="questions"> answer3</label><br>
                <label><input type="radio" value="wrong" name="questions"> answer3</label><br>
                <label><input type="radio" value="wrong" name="questions"> answer3</label><br>
                <p><input class="btn btn-primary submit3 chkBtn" type="button" value="Get Value"></p>
            </div>
        `);

    });


    $(document).on("click", '.submit3', function() {
        $("#question").remove();
        console.log("Submit Button 3 Works");

        $('#quizBox').append(`
            <div class="container" id="question">
                <p>Question 1 Goes here, How do i get data to return from a radio type input after the answer has been selected?</p>
                <label><input type="radio" value="correct" name="questions"> answer4</label><br>
                <label><input type="radio" value="wrong" name="questions"> answer4</label><br>
                <label><input type="radio" value="wrong" name="questions"> answer4</label><br>
                <label><input type="radio" value="wrong" name="questions"> answer4</label><br>
                <p><input class="btn btn-primary submit4 chkBtn" type="button" value="Get Value"></p>
            </div>
        `);

    });


    $(document).on("click", '.submit4', function() {
        $("#question").remove();
        console.log("Submit Button 4 Works");

        $('#quizBox').append(`
            <div class="container" id="question">
                <p>Question 1 Goes here, How do i get data to return from a radio type input after the answer has been selected?</p>
                <label><input type="radio" value="correct" name="questions"> answer5</label><br>
                <label><input type="radio" value="wrong" name="questions"> answer5</label><br>
                <label><input type="radio" value="wrong" name="questions"> answer5</label><br>
                <label><input type="radio" value="wrong" name="questions"> answer5</label><br>
                <p><input class="btn btn-primary submit5 chkBtn" type="button" value="Get Value"></p>
            </div>
        `);

    });

    // Result screen goes here //

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
