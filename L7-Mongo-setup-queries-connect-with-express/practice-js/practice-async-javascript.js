console.log("start");

setTimeout(()=>{
    console.log("Hello settimeout");
}, 0);


const promise = new Promise((res, rej) => {
    if(res){
        console.log("Promise resolved");
        setTimeout(()=>{
            console.log("setTimeout inside promise");
        }, 0);
    }
    else{
        console.log("Promise rejected");
    }
})
.then(res => {
    console.log(res);
})
.catch(err => {
    console.log(err);
});

console.log("end");

