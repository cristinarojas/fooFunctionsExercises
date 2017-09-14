var Foo = function( a ) { 
    this.baz = function() { // Is added as a property to the "this" object.  
        return a;  // It will be included in the object created when you do f = new Foo(7).
    };
};

var f = new Foo( 7 ); // Invoking the function as a constructor. - create an object.
f.baz(); 