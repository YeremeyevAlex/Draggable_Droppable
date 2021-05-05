$( function() {
          
  $( "#draggable1" ).draggable({ revert: "invalid", scope: "1" });
  $( "#draggable2" ).draggable({ revert: "invalid", scope: "2" });
  $( "#draggable3" ).draggable({ revert: "invalid", scope: "3" });
  $( "#draggable4" ).draggable({ revert: "invalid", scope: "4" });
  $( "#draggable5" ).draggable({ revert: "invalid", scope: "5" });

  $( "#droppable1" ).droppable({ 
    activeClass: "active",
    hoverClass: "hover",
    scope: "1",
  drop: function(){
    $( this )
  } 
  });

  $( "#droppable2" ).droppable({ 
    activeClass: "active",
    hoverClass: "hover",
    scope: "2",
  drop: function(){
    $( this )
  } 
  });

  $( "#droppable3" ).droppable({ 
    activeClass: "active",
    hoverClass: "hover",
    scope: "3",
  drop: function(){
    $( this )
  } 
  });

  $( "#droppable4" ).droppable({ 
    activeClass: "active",
    hoverClass: "hover",
    scope: "4",
  drop: function(){
    $( this )
  } 
  });

  $( "#droppable5" ).droppable({ 
    activeClass: "active",
    hoverClass: "hover",
    scope: "5",
  drop: function(){
    $( this )
  } 
  }); 
});