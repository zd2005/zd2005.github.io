var switchNum = 0
 
function displaySwag() {
    if(switchNum == 0){
        document.getElementById('Header1').innerHTML = "Swag";
        switchNum = switchNum + 1;
    }else {
        document.getElementById('Header1').innerHTML = "Hello, World!";
        switchNum = 0;
    }
}

function swagSwitch(){
    var style = document.getElementById('style');
    if (style.href.includes('HelloWorldCSS.css')){
    style.href = 'HelloWorldCSS2.css';
    swagNum = swagNum + 1;
    }else {
    style.href = 'HelloWorldCSS.css';
    }
}

