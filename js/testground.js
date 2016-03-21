// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  var winConditions = {
    "#a1":
      [["#a1", "#a2", "#a3"],
      ["#a1", "#b1", "#c1"],
      ["#a1", "#b2", "#c3"]],
    "#b2":
      [["#b1", "#b2", "#b3"],
      ["#a2", "#b2", "#c2"],
      ["#a3", "#b2", "#c1"]],
    "#c3":
      [["#c1", "#c2", "#c3"],
      ["#a3", "#b3", "#c3"]]
    };
  function isWinner(){
    // var tileVals = [];
    // $(".box").siblings().each(
    //   function (){
    //     tileVals.push( $(this).text() );      //creates array of values of all tiles current state. (e.g.: ["X", "O", "O", "X", "X", "O", "", "", ""])
    //   }
    // );


      // for (var key in winConditions){
      // console.log(winConditions[key]);
      //   if ( $(key).text()){
      //     console.log ( "$(" + key + ").text() = " + $(key).text());
      //     console.log ("running winConditions");
      //     for (var cond in winConditions[key][0]){
      //       console.log("checking " + key);
      //       console.log("looking at " + $(cond[0]).text());
      //       if ($(cond[0]).text() === $(cond[1]).text() && $(cond[1]).text() === $(cond[2]).text() ){
      //         console.log("key[0] = "+ winConditions[key[0]]);
      //         console.log(cond);
      //         console.log ( ($(cond[0]).text() + " & " + $(cond[1]).text() + " & " + $(cond[2]).text() ) );
      //         return true;
      //       }
      //     }
      //   }
      // }

    if ( $("#a1").text() ){
        console.log("checking #a1");
        if ( ( $("#a1").text() === $("#a2").text() && $("#a2").text() === $("#a3").text() ) ||
             ( $("#a1").text() === $("#b1").text() && $("#b1").text() === $("#c1").text() ) ||
             ( $("#a1").text() === $("#b2").text() && $("#b2").text() === $("#c3").text() ) ){
          return true;
        }
    } if ( $("#b2").text() ){
        console.log("checking #b2");
        if ( ( $("#b1").text() === $("#b2").text() && $("#b2").text() === $("#b3").text() ) ||
             ( $("#a2").text() === $("#b2").text() && $("#b2").text() === $("#c2").text() ) ||
             ( $("#a3").text() === $("#b2").text() && $("#b2").text() === $("#c1").text() ) ){
          return true;
        }
    } if ( $("#c3").text() ){
        console.log("checking #c3");
        if ( ( $("#c1").text() === $("#c2").text() && $("#c2").text() === $("#c3").text() ) ||
             ( $("#a3").text() === $("#b3").text() && $("#b3").text() === $("#c3").text() ) ){
          return true;
        }
    }
    return false;
  } //end is winner

    var pCount = 0;                                     //counts number of moves (max of 9) and helps decide which players move it is by checking even or odd
    var hasWinner = false;
    $(".box").on("click",
      function ticTacToe(event){
        if ( !hasWinner && !( $(this).text() )){                     //checks  if current tile doesnt have text
          if ((pCount % 2 === 0)){                      //even sets tile to X
            $(this).addClass("red");
            $(this).text("X");
          } else {
            $(this).text("O");                          //odd sets tile to O
            $(this).addClass("blue");
          }
          pCount ++;                                    //moves to next value"
          if (isWinner()){
            alert( $(this).text() + " Wins!!");
            hasWinner = true;
          } //end If(isWinner())
        } else if ( $(this).text() ){                   //check for occupied tiles
          alert("Tile already occupied! Choose another space.");
        } //end elseif !$this.text
      } //end addTile(event)
    ); //end .on "Click



console.log("working");
}); //end $(doc).ready(function

//              $(".box").text()
// RETURNS >>   "XXXXXXXXX"
