class test{
    static a = 5;
    static b = 5;

    Add(){
       return console.log(a + b);
    }
}

const tet = new test;
console.log(tet.Add());
