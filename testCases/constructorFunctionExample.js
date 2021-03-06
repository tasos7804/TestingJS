(window.createNinjasTest = function () {
    //Defines a constructor that creates a skulk
    //property on whatever object is the function
    //context. The method once again returns the
    //function context so that we can test it externally.
    function Ninja() {
        this.skulk = function () {
            return this;
        };
    }

    //Creates two objects by invoking the constructor with new.
    //The newly created objects are referenced by ninja1 and ninja2.
    var ninja1 = new Ninja();
    var ninja2 = new Ninja();

    //Tests the method of the constructed
    //objects. Each should return its own
    //constructed object.
    assert(ninja1.skulk() === ninja1, "The 1st ninja is skulking");
    assert(ninja2.skulk() === ninja2, "The 2nd ninja is skulking");

})