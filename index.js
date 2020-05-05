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

    //questions which are contained in objects
    var quizQuestions = {

        quest1: {
            question: "What letter is Athletic?",
            choice: ["A", "B", "C", "D", "E"],
            answer: "A"
        },

        quest2: {
            question: "What letter is Bossy?",
            choice: ["A2", "B2", "C2", "D2", "E2"],
            answer: "B"
        },

        quest3: {
            question: "What letter is Caring?",
            choice: ["A", "B", "C", "D", "E"],
            answer: "C"
        },

        quest4: {
            question: "What letter is Daring?",
            choice: ["A", "B", "C", "D", "E"],
            answer: "D"
        },

        quest5: {
            question: "What letter is Energetic?",
            choice: ["A", "B", "C", "D", "E"],
            answer: "E"
        }

    };

    // console.log(questions.quest1.q1);
    // console.log(questions.quest1.c1[0]);
    // console.log(questions.quest1.c1[1]);
    // console.log(questions.quest1.c1[2]);
    // console.log(questions.quest1.c1[3]);
    // console.log(questions.quest1.a1);


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

        // Confirms Start Click //
        var confirm = "Start Click Works";
        console.log(confirm);

        // This Deletes the Starting Content //
        $("#start").remove();


        $('#quizBox').html(`
            <div class="questdiv" id="question">
                <p class="quest"></p>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="question1" value="Rad0" checked>
                    <label class="form-check-label rad0" for="question1"></label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="question1" value="Rad0" checked>
                    <label class="form-check-label rad1" for="question1"></label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="question1" value="Rad0" checked>
                    <label class="form-check-label rad2" for="question1"></label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="question1" value="Rad0" checked>
                    <label class="form-check-label rad3" for="question1"></label>
                </div><br>
                <p class="subButton"><input class="btn btn-primary submit1 chkBtn" type="button" value="Get Value"></p>
            </div>
        `);

        $('.quest').html(quizQuestions.quest1.question);
        $('.rad0').html(quizQuestions.quest1.choice[0]);
        $('.rad1').html(quizQuestions.quest1.choice[1]);
        $('.rad2').html(quizQuestions.quest1.choice[2]);
        $('.rad3').html(quizQuestions.quest1.choice[3]);

    });


    // submit1-5 button will remove Question1-5 and add next Question //
    $(document).on("click", '.submit1', function() {
        $(".submit1").remove();
        console.log("Submit Button 1 Works");

        $('.subButton').html(`
            <input class="btn btn-primary submit2 chkBtn" type="button" value="Get Value">
        `);

        $('.quest').html(quizQuestions.quest2.question);
        $('.rad0').html(quizQuestions.quest2.choice[0]);
        $('.rad1').html(quizQuestions.quest2.choice[1]);
        $('.rad2').html(quizQuestions.quest2.choice[2]);
        $('.rad3').html(quizQuestions.quest2.choice[3]);
    });


    $(document).on("click", '.submit2', function() {
        $(".submit2").remove();
        console.log("Submit Button 2 Works");

        $('.subButton').html(`
            <input class="btn btn-primary submit3 chkBtn" type="button" value="Get Value">
        `);

        $('.quest').html(quizQuestions.quest3.question);
        $('.rad0').html(quizQuestions.quest3.choice[0]);
        $('.rad1').html(quizQuestions.quest3.choice[1]);
        $('.rad2').html(quizQuestions.quest3.choice[2]);
        $('.rad3').html(quizQuestions.quest3.choice[3]);

    });


    $(document).on("click", '.submit3', function() {
        $(".submit3").remove();
        console.log("Submit Button 3 Works");

        $('.subButton').html(`
            <input class="btn btn-primary submit4 chkBtn" type="button" value="Get Value">
        `);

        $('.quest').html(quizQuestions.quest4.question);
        $('.rad0').html(quizQuestions.quest4.choice[0]);
        $('.rad1').html(quizQuestions.quest4.choice[1]);
        $('.rad2').html(quizQuestions.quest4.choice[2]);
        $('.rad3').html(quizQuestions.quest4.choice[3]);

    });


    $(document).on("click", '.submit4', function() {
        $(".submit4").remove();
        console.log("Submit Button 4 Works");

        $('.subButton').html(`
            <input class="btn btn-primary submit5 chkBtn" type="button" value="Get Value">
        `);

        $('.quest').html(quizQuestions.quest5.question);
        $('.rad0').html(quizQuestions.quest5.choice[0]);
        $('.rad1').html(quizQuestions.quest5.choice[1]);
        $('.rad2').html(quizQuestions.quest5.choice[2]);
        $('.rad3').html(quizQuestions.quest5.choice[3]);

    });

    // Result screen goes here //

    $(document).on("click", '.submit5', function() {
        $("#question").remove();
        console.log("Submit Button 5 Works");

        $('#quizBox').html(`
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



//those objects are in an array
// var quizQuestions = [questions];
// console.log(quizQuestions);


//function to picks a random question from array of objects but also removes the question from array

// var questionGenerator = [Math.floor(Math.random() * quizQuestions.length)];
// console.log("questionGenerator PICKED: " + questionGenerator);
// console.log(questionGenerator);


//function to displays the selected question w the choices

// var outputQuestions = quizQuestions[questionGenerator];
// console.log(outputQuestions);

//funtion to check the questions answer based on a value collected from a radio group

// function runQuiz();


//...i think im starting to get javascript...
