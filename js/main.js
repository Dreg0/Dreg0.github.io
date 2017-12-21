$(document).ready(function () {
    var buzzer = $("#buzzer")[0];
    var count = parseInt($("#num").html());
    var breakTime = parseInt($("#breakNum").html());
    $("#reset").hide();

    $("#start").click(function () {
        var counter = setInterval(timer, 1000);
        count *= 60;

        function timer() {
            $("#start, #minus5Clock, #add5Clock, #plus5Break, #minus5Break, #title1, #title2, #breakNum").hide();
            $("#timeType").show();
            $("#timeType").html("Session Time: ");
            count -= 1;
            if (count === 0) {
                buzzer.play();
                clearInterval(counter);
                var startBreak = setInterval(breakTimer, 1000);
                $("#num").hide();
            }
            if (count % 60 >= 10) {
                $("#num").html(Math.floor(count / 60) + ":" + count % 60);

            } else {
                $("#num").html(Math.floor(count / 60) + ":" + "0" + count % 60);
            }

            function breakTimer() {
                $("#timeType").html("Break Time: ");
                $("#breakNum").show();

                $("#timeType").show();
                breakTime -= 1;
                if (breakTime === 0) {
                    clearInterval(startBreak);
                    buzzer.play()
                    $("#reset").show();
                    $("#breakNum, #timeType").hide();
                }
                if (breakTime % 60 >= 10) {
                    $("#breakNum").html(Math.floor(breakTime / 60) + ":" + breakTime % 60);
                } else {
                    $("#breakNum").html(Math.floor(breakTime / 60) + ":" + "0" + breakTime % 60);
                }
            }
                        }
breakTime *= 60;  
});


    $("#reset").click(function () {
        count = 25;
        breakTime = 5;
        $("#num").html(count);
        $("#breakNum").html(breakTime);
        $("#start, #minus5Clock,#num, #add5Clock, #plus5Break, #minus5Break, #title1, #title2, #breakNum").show();
        $("#reset, #timeType").hide();
    });



    //buttons

    $("#minus5Clock").click(function () {
        count -= 5;
        if (count > 1) {
            $("#num").html(count);
        }
        if (count == 5) {
            $("#minus5Clock").hide();
        }

    });

    $("#add5Clock").click(function () {
        count += 5;
        $("#num").html(count);
        if (count > 5) {
            $("#minus5Clock").show();
        }
    });


    $("#minus5Break").click(function () {
        breakTime -= 5;
        if (breakTime > 1) {
            $("#breakNum").html(breakTime);
        }
        if ( breakTime == 5) {
            $("#minus5Break").hide();}
    });

    $("#plus5Break").click(function () {
        breakTime += 5;
        $("#breakNum").html(breakTime);
        if ( breakTime > 5) {
            $("#minus5Break").show();}
    });

});