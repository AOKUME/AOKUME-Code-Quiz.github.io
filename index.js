$(document).ready(function() {

    //=============== TO DO LIST ===============//

    // where the heck is the timer & score?!?!...
    // need to record stuff to the local storage...
    // restore kept data after refresh...
    // add input section for player to type name at end of quiz...
    // leader boards???....oh boy...
    // need to hide submit button until an option has been selected from the Radio Group...
    // need to inject the data from the arrays into the below somehow...

    //==========================================//

    // Collectes/Checks Radio Value //

    $(document).on("click", '.chkBtn', function() {
        var radioValue = $("input[name='questions']:checked").val();
        if (radioValue) {
            alert("Your are " + radioValue);
        }

        // need to add function to check if answer is true or false > if true go next > if false reduce time and go next

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
                <h2>RESULTS</h2><br>
                <div class="card">
                  <div class="card-body">
                    TEST RESULTS WILL BE DISPLAYED HERE
                  </div>
                </div><br>
                <button class="btn btn-primary btn-block start" type="button" id="start">Restart</button>
            </div>
        `);

    });

});



//============================ Working In Progress on Repl ============================//



//questions which are contained in objects
var question1 = {
    q1: "What letter is Athletic?",
    c1: ["A", "B", "C", "D", "E"],
    a1: "A"
}

var question2 = {
    q2: "What letter is Bossy?",
    c2: ["A", "B", "C", "D", "E"],
    a2: "B"
}

var question3 = {
    q3: "What letter is Caring?",
    c3: ["A", "B", "C", "D", "E"],
    a3: "C"
}

var question4 = {
    q3: "What letter is Daring?",
    c3: ["A", "B", "C", "D", "E"],
    a3: "D"
}

var question5 = {
    q3: "What letter is Energetic?",
    c3: ["A", "B", "C", "D", "E"],
    a3: "E"
}

//those objects are in an array
var quizQuestions = [question1, question2, question3, question4, question5];
console.log(quizQuestions);


//function to picks a random question from array....but also removes the question from array like HOUSE activity..
function questionGenerator() {
    var randomQuestion = [Math.floor(Math.random() * quizQuestions.length)];
    return randomQuestion;
}
console.log("QUESTION: " + (questionGenerator()));

//function to displays the sselected question w the choices

//funtion to check the questions answer based on a value collected from a radio group

// function runQuiz();


//...i think im starting to get javascript...
