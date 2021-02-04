
function Menu() {
    
    let toggle = document.querySelector('div.menuToggle')

    toggle.onclick = function() {
        let menuBlock = document.querySelector('div.menu')
        let ulBlock = document.querySelector('ul')
        let loginImg = document.getElementById('loginImg')
        let loginBlock = document.getElementById('logBlock')
        
        loginImg.style.display='none'
        loginBlock.style.marginTop='10px'
        ulBlock.classList.toggle('ulOpen')
 
        menuBlock.classList.toggle('menuOpen')

        console.log(menuBlock)
    }
}



function isOpen() {
    let body = document.querySelector('body');
    let block = document.querySelector('div.cover' );
    let main = document.body.querySelector('main')
        
        main.style.opacity='0.1'
        block.style.display='flex'
        body.style.overflow='hidden';
       

   console.log(block) 
}

function isExit() {
    let body = document.querySelector('body');
    let blocks = document.querySelector('div.cover');
    let main = document.querySelector('main');

        body.style.overflow='visible';
        main.style.opacity='1';
        blocks.style.display='none';
}

