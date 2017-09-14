var Foo = function( a ) { 
	this.a = a;
};

Foo.prototype = {
  biz: function() {    
    return this.a; 
  }       
};

var f = new Foo( 7 );

f.biz(); 