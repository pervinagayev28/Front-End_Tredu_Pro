// ------------- Become partiner page scripts -----------


const inputs = document.querySelectorAll('.inputLink');
let inputId;
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        inputId = input.id;
        document.getElementById(inputId+'img').hidden = true;
        document.getElementById(inputId+'lb').hidden = true;
        showHiddens();
    });
});


function showHiddens(){
    inputs.forEach(e=>{
        if(inputId.toString().includes(e.id.toString())===false){
            document.getElementById(e.id+'img').hidden = false;
            document.getElementById(e.id+'lb').hidden = false;
        }
    });
}