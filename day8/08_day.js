function sayHello()
{
    return function()
    {
        console.log("hello!");
    }
}
console.log(sayHello());