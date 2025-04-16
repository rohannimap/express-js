console.log("hello");


function a(){
    console.log(c);
    var c = 10
    test:function getname(){
        var c =20;
        console.log(this.c);
    }
    console.log(c);
}
console.log(a().getname());
