function toggleContent(){
    const show=document.querySelector('.show');
   
    const title=document.querySelector('.title');
    /*
    if(show.style.display=='none'){
        show.style.display='flex';
        title.textContent='Voir moins';
        title.classList.add('show-more');

    }
else if(show.style.display=='flex'){
    show.style.display='none';
    title.textContent='Voir moins';
    title.classList.remove('show-more');

}}
    */
   show.style.display=show.style.display==='flex'? 'none' : 'flex';
   title.textContent=show.style.display==='flex'? 'Voir moins' : 'Voir plus';}
document.addEventListener('DOMcontentLoaded', ()=>{
    const title=document.querySelector('.title');
    title.addEventListener('click',toggleContent);
});
