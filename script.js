const closedEmoji = document.querySelector('[closeemoji]');
const openedEmoji = document.querySelector('[openemoji]');
const sad = document.querySelector('.sad');
const happy = document.querySelector('.happy');
closedEmoji.addEventListener("click",()=>{
    if(openedEmoji.classList.contains('open'))
    {
        happy.classList.add('on');
        sad.classList.remove('on');
        openedEmoji.classList.add('active');
        closedEmoji.classList.remove('active');
    }
})

openedEmoji.addEventListener("click",()=>{
    if(closedEmoji.classList.contains('close')){
        sad.classList.add('on');
        happy.classList.remove('on');
        closedEmoji.classList.add('active');
        openedEmoji.classList.remove('active');
    }
})