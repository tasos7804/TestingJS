(window.tests.prototypeTest3 = function () {
    /*
    Observing the behavior of changes to the prototype
    */

    /*Defines a constructor that creates a
Ninja with a single Boolean property
*/
    function Ninja() {
        this.swung = true;
    }

    /*
    Instantiates an instance of Ninja by calling the
constructor function via the new operator
    */
    var ninja = new Ninja();

    /*
    Adds a method to the prototype
after the object has been created
    */
    Ninja.prototype.swingSword = function () {
        return this.swung;
    };

    /*
    Tests if the method
exists in the object
    */
    assert(ninja.swingSword(),
        "Method exists, even out of order.");
})