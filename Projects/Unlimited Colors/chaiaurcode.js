// generate random color
let randomcolor = function () {
    let hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i<6; i++)
    {
        color += hex[Math.floor(Math.random() * 16)];
    }

    return color;
}

let intervalid;

const startchangingcolor = function(){

    if(!intervalid)
    {
        intervalid = setInterval(changeColor, 100);
    }

    function changeColor (){
        document.body.style.backgroundColor = randomcolor();
    } 
};

const stopchangingcolor = function(){
    clearTimeout(intervalid);
    intervalid = null;
};

document.querySelector('#start').addEventListener('click', startchangingcolor);
document.querySelector('#stop').addEventListener('click', stopchangingcolor);