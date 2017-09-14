var a;

var Foo = function( a ) {
  this.a = a;
  this.bar() {   
    return a;  //7 
  }
  this.baz = function() {   
    return a; //7 
  };
};
 
Foo.prototype = { // this do not have access to the other function
  biz: function() {    
    return this.a; 
  }
};
 
var f = new Foo( 7 );
f.bar(); // 7  - error
f.baz(); // 7
f.biz(); // undefined  - error

//Change the code above (lines 1-16) so that f.bar() and f.biz() both return 7 instead of an error
