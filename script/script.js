    // Аккордеон
document.querySelectorAll('.accordion_head').forEach((el)=>{
    el.addEventListener('click',()=>{
        let accordion_body = el.nextElementSibling;
        let btn = el.children[1];
        let arrow = btn.children[0].children[0];
        console.log(btn);
        if(accordion_body.style.maxHeight){
            document.querySelectorAll('.accordion_body').forEach((el) => el.style.maxHeight = null);
            document.querySelectorAll('.accordion_btn').forEach((btn) => btn.style.cssText ='transform: rotate(0deg)');
            btn.style.cssText ='transform: rotate(0deg)';
            arrow.setAttribute('stroke','white');
            accordion_body.style.overflow = 'hidden';


        }
        else{
            document.querySelectorAll('.accordion_body').forEach((el) => el.style.maxHeight = null);
            document.querySelectorAll('.accordion_btn').forEach((btn) => btn.style.cssText ='transform: rotate(0deg)');
            document.querySelectorAll('.accordion_btn').forEach((btn) => btn.children[0].children[0].setAttribute('stroke','white'));

            accordion_body.style.maxHeight = accordion_body.scrollHeight + 'px';
            accordion_body.style.overflow = 'unset';
            btn.style.cssText ='transform: rotate(180deg); background-color:white; border:1px solid #004DC0; fill:#004DC0;';
            arrow.setAttribute('stroke','blue');
        }
    })
});
    // Аккордеон
