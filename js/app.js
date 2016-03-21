// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

    var pCount = 0;                                     //counts number of moves (max of 9) and helps decide which players move it is by checking even or odd
    $(".box").on("click",
      function ticTacToe(event){
        if ( !( $(this).text() )){                     //checks  if current tile doesnt have text
          if ((pCount % 2 === 0)){                      //even sets tile to X
            $(this).addClass("red");
            $(this).text("X");
          } else {
            $(this).text("O");                          //odd sets tile to O
            $(this).addClass("blue");
          }
          pCount ++;                                    //moves to next value'
          if (isWinner()){
            alert( $(this).text() + " Wins!!");
          } //end isWinner
        } else if ( $(this).text() ){                   //check for occupied tiles
          alert("Tile already occupied! Choose another space.");
        } //end elseif !$this.text
      } //end addTile(event)
    ); //end .on "Click



console.log("working");
}); //end $(doc).ready(function

//              $(".box").text()
// RETURNS >>   "XXXXXXXXX"
