function sayHello()
{
    return function()
    {
        console.log("hello!");
    }
}
     //sayHello()();
    // function can be treated as value
    // function  -> value
    // function  ==> first class ciizen
    // 1. value can be passed as arg
    // 2. value can be returned
    // 3. value can be assigned

   // const sayHello1 = () => () => console.log("Hello");
//------------------------------------------------
//      1. f#
//      2. scala
//      3. lisp
//      4. small
//      5. haskell   

//--------------------------------------------------

// functional programing style. (paradigm)
     // 1 .currying
     // 2 .partial application.
     // 3. point free style.




    const add = (x) => (y) => x + y;
    
    console.log(add(5)(9));
    
