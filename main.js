$(document).ready(function () {

    function calculateGrade(student) {
        console.log(student);

        var percent = (student.points_earned / student.points_possible) * 100;
        console.log(percent);
        var grade = '';

        if (percent >= 90) {
            grade = "A";
        } else if (percent >= 80) {
            grade = "B";
        } else if (percent >= 70){
            grade = "C";
        } else if (percent >= 60) {
            grade = "D"
        } else {
            grade = "F"
        }

        $("#grade-message").html(`
        <span>${student.first_name.toUpperCase()} ${student.last_name.toUpperCase()}</span>
        <span>Percentage: ${percent.toFixed(0)}%
        <span>Grade: ${grade}
        `);


    }

    function getStudent() {
        return {
            first_name: $("#first-name").val(),
            last_name: $("#last-name").val(),
            points_earned: parseInt($("#points-earned").val()),
            points_possible: parseInt($("#points-possible").val()),
        }
    }
    function outputMessage(message) {

        $("#approval-message").text(message);
    }

    function validate() {
    
        var pointsEarned = parseFloat($("#points-earned").val());
        var pointsPossible = parseFloat($("#points-possible").val());
        var firstName = $("#first-name").val();
        var lastName = $("#last-name").val();



        var pointsEarnedCheck = false;
        var pointsPossibleCheck = false;
        var firstNameCheck = false;
        var lastNameCheck = false;

        if (typeof pointsEarned === "number" && !isNaN(pointsEarned)) {
            pointsEarnedCheck = true;
        } else {
            $("#points-earned-error").text('Must Be Numeric');
        }
        
        if (typeof pointsPossible === "number" && !isNaN(pointsPossible)) {
            pointsPossibleCheck = true;
        } else {
            $("#points-possible-error").text("Must Be Numeric");
        }

        if (typeof firstName === "string" && firstName.length >= 2) {
            firstNameCheck = true;
          
        } else {
            $("#first-name-error").text("Must Be String");
        }

        if (typeof lastName === "string" && lastName.length >= 2) {
            lastNameCheck = true;
        } else {
            $("#last-name-error").text("Must Be String");
        }

        return pointsEarnedCheck && pointsPossibleCheck && firstNameCheck && lastNameCheck;
    }

    $(document).on('keypress',function(e) {
        if(e.key === "Enter") {
            var pass = validate();
            if (pass) {
                calculateGrade(getStudent());
            }
        }
    });

    $("#calculate").click(function (e) {
        e.preventDefault();
        var pass = validate();
        if (pass) {
            calculateGrade(getStudent());
        }
    })

});