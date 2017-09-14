var Foo = function( a ) { 
    function bar() { // It is a local function with scope only within the Foo function. 
        return a; 	// Private function only available within the function it is.
    }
};

var f = new Foo( 7 ); // Invoking the function as a constructor. - create an object.
f.bar(); // TypeError: f.bar is not a function