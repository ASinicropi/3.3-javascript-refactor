  (function(){
    var score = 1;

    function increasedScore(){
        score++;
        console.log(score);
    }

    function decreasedScore(){
        score--;
    }

    function run(){
        increasedScore();
    }
    run();
  }());
