const URL = document.querySelector('#URL');
const topWord = document.querySelector('#topWord');
const botWord = document.querySelector('#botWord');
const form = document.querySelector('#memeGen');
const generatedMemes = document.querySelector('#generatedMemes');

// const img = document.createElement('img');
// img.setAttribute('alt','Image unable to load');
// const topText = document.createElement('div');
// const botText = document.createElement('div');

form.addEventListener('submit',function(evt){
    evt.preventDefault();
    createMemes();
})

function createMemes(){
    let newMemes = document.createElement('div');
    newMemes.classList.add('Memes');
    let img = document.createElement('img');
    img.setAttribute('alt','Image unable to load');
    let topText = document.createElement('div');
    topText.classList.add('top');
    let botText = document.createElement('div');
    botText.classList.add('bot');
    img.setAttribute('src',URL.value);
    topText.innerText = topWord.value;
    botText.innerText = botWord.value;
    newMemes.append(img);
    newMemes.append(topText);
    newMemes.append(botText);
    createRemoveBtn(newMemes);
    generatedMemes.append(newMemes);
    URL.value = '';
    topWord.value = '';
    botWord.value = '';
}

function createRemoveBtn(memes){
    let removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    memes.append(removeBtn);
    removeBtn.addEventListener('click',function(){
        //console.log(removeBtn.previousSibling);
        removeBtn.parentElement.remove();
    })
    
}