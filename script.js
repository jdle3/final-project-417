function darkMode() {
    if(document.getElementById('daynight').checked){
        document.body.style.background = 'grey'
        document.getElementById('shop-background').style.backgroundColor = 'grey'
        document.getElementById('shop').style.backgroundColor = 'grey'
        document.getElementById('lightLogo').style.display = 'none' 
        document.getElementById('darkLogo').style.display = 'flex' 
    } else {
        document.body.style.background = 'white'
        document.getElementById('shop-background').style.backgroundColor = 'white'
        document.getElementById('shop').style.backgroundColor = 'white'
        document.getElementById('lightLogo').style.display = 'flex' 
        document.getElementById('darkLogo').style.display = 'none'
    }
}

function YejiActive() {
    if(document.getElementById('yeji').classList.contains('hiddenMember')){
        document.getElementById('yeji').classList.remove('hiddenMember')
        document.getElementById('yeji').classList.add('displayedMember')
    }
    if(document.getElementById('ryujin').classList.contains('displayedMember')){
        document.getElementById('ryujin').classList.remove('displayedMember')
        document.getElementById('ryujin').classList.add('hiddenMember')
    }
    if(document.getElementById('lia').classList.contains('displayedMember')){
        document.getElementById('lia').classList.remove('displayedMember')
        document.getElementById('lia').classList.add('hiddenMember')
        
    } 
    if(document.getElementById('yuna').classList.contains('displayedMember')){
        document.getElementById('yuna').classList.remove('displayedMember')
        document.getElementById('yuna').classList.add('hiddenMember')
    } 
    if(document.getElementById('chaeryeong').classList.contains('displayedMember')){
        document.getElementById('chaeryeong').classList.remove('displayedMember')
        document.getElementById('chaeryeong').classList.add('hiddenMember')
    }
}

function RyujinActive() {
    if(document.getElementById('ryujin').classList.contains('hiddenMember')){
        document.getElementById('ryujin').classList.remove('hiddenMember')
        document.getElementById('ryujin').classList.add('displayedMember')
    }
    if(document.getElementById('yeji').classList.contains('displayedMember')){
        document.getElementById('yeji').classList.remove('displayedMember')
        document.getElementById('yeji').classList.add('hiddenMember')
    }
    if(document.getElementById('lia').classList.contains('displayedMember')){
        document.getElementById('lia').classList.remove('displayedMember')
        document.getElementById('lia').classList.add('hiddenMember')
        
    } 
    if(document.getElementById('yuna').classList.contains('displayedMember')){
        document.getElementById('yuna').classList.remove('displayedMember')
        document.getElementById('yuna').classList.add('hiddenMember')
    } 
    if(document.getElementById('chaeryeong').classList.contains('displayedMember')){
        document.getElementById('chaeryeong').classList.remove('displayedMember')
        document.getElementById('chaeryeong').classList.add('hiddenMember')
    }
}

function LiaActive() {
    if(document.getElementById('lia').classList.contains('hiddenMember')){
        document.getElementById('lia').classList.remove('hiddenMember')
        document.getElementById('lia').classList.add('displayedMember')
    }
    if(document.getElementById('yeji').classList.contains('displayedMember')){
        document.getElementById('yeji').classList.remove('displayedMember')
        document.getElementById('yeji').classList.add('hiddenMember')
    }
    if(document.getElementById('ryujin').classList.contains('displayedMember')){
        document.getElementById('ryujin').classList.remove('displayedMember')
        document.getElementById('ryujin').classList.add('hiddenMember')
        
    } 
    if(document.getElementById('yuna').classList.contains('displayedMember')){
        document.getElementById('yuna').classList.remove('displayedMember')
        document.getElementById('yuna').classList.add('hiddenMember')
    } 
    if(document.getElementById('chaeryeong').classList.contains('displayedMember')){
        document.getElementById('chaeryeong').classList.remove('displayedMember')
        document.getElementById('chaeryeong').classList.add('hiddenMember')
    }
}

function YunaActive() {
    if(document.getElementById('yuna').classList.contains('hiddenMember')){
        document.getElementById('yuna').classList.remove('hiddenMember')
        document.getElementById('yuna').classList.add('displayedMember')
    }
    if(document.getElementById('yeji').classList.contains('displayedMember')){
        document.getElementById('yeji').classList.remove('displayedMember')
        document.getElementById('yeji').classList.add('hiddenMember')
    }
    if(document.getElementById('ryujin').classList.contains('displayedMember')){
        document.getElementById('ryujin').classList.remove('displayedMember')
        document.getElementById('ryujin').classList.add('hiddenMember')
        
    } 
    if(document.getElementById('lia').classList.contains('displayedMember')){
        document.getElementById('lia').classList.remove('displayedMember')
        document.getElementById('lia').classList.add('hiddenMember')
    } 
    if(document.getElementById('chaeryeong').classList.contains('displayedMember')){
        document.getElementById('chaeryeong').classList.remove('displayedMember')
        document.getElementById('chaeryeong').classList.add('hiddenMember')
    }
}

function ChaeryeongActive() {
    if(document.getElementById('chaeryeong').classList.contains('hiddenMember')){
        document.getElementById('chaeryeong').classList.remove('hiddenMember')
        document.getElementById('chaeryeong').classList.add('displayedMember')
    }
    if(document.getElementById('yeji').classList.contains('displayedMember')){
        document.getElementById('yeji').classList.remove('displayedMember')
        document.getElementById('yeji').classList.add('hiddenMember')
    }
    if(document.getElementById('ryujin').classList.contains('displayedMember')){
        document.getElementById('ryujin').classList.remove('displayedMember')
        document.getElementById('ryujin').classList.add('hiddenMember')
        
    } 
    if(document.getElementById('yuna').classList.contains('displayedMember')){
        document.getElementById('yuna').classList.remove('displayedMember')
        document.getElementById('yuna').classList.add('hiddenMember')
    } 
    if(document.getElementById('lia').classList.contains('displayedMember')){
        document.getElementById('lia').classList.remove('displayedMember')
        document.getElementById('lia').classList.add('hiddenMember')
    }
}

function KillMyDoubtActive() {
    if(document.getElementById('killMyDoubt').classList.contains('hiddenDisc')){
        document.getElementById('killMyDoubt').classList.remove('hiddenDisc')
        document.getElementById('killMyDoubt').classList.add('displayedDisc')
    }
    if(document.getElementById('cheshire').classList.contains('displayedDisc')){
        document.getElementById('cheshire').classList.remove('displayedDisc')
        document.getElementById('cheshire').classList.add('hiddenDisc')
    }
    if(document.getElementById('checkmate').classList.contains('displayedDisc')){
        document.getElementById('checkmate').classList.remove('displayedDisc')
        document.getElementById('checkmate').classList.add('hiddenDisc')
    }
    if(document.getElementById('crazyInLove').classList.contains('displayedDisc')){
        document.getElementById('crazyInLove').classList.remove('displayedDisc')
        document.getElementById('crazyInLove').classList.add('hiddenDisc')
    }
    if(document.getElementById('guessWho').classList.contains('displayedDisc')){
        document.getElementById('guessWho').classList.remove('displayedDisc')
        document.getElementById('guessWho').classList.add('hiddenDisc')
    }
}

function CheshireActive() {
    if(document.getElementById('cheshire').classList.contains('hiddenDisc')){
        document.getElementById('cheshire').classList.remove('hiddenDisc')
        document.getElementById('cheshire').classList.add('displayedDisc')
    }
    if(document.getElementById('killMyDoubt').classList.contains('displayedDisc')){
        document.getElementById('killMyDoubt').classList.remove('displayedDisc')
        document.getElementById('killMyDoubt').classList.add('hiddenDisc')
    }
    if(document.getElementById('checkmate').classList.contains('displayedDisc')){
        document.getElementById('checkmate').classList.remove('displayedDisc')
        document.getElementById('checkmate').classList.add('hiddenDisc')
    }
    if(document.getElementById('crazyInLove').classList.contains('displayedDisc')){
        document.getElementById('crazyInLove').classList.remove('displayedDisc')
        document.getElementById('crazyInLove').classList.add('hiddenDisc')
    }
    if(document.getElementById('guessWho').classList.contains('displayedDisc')){
        document.getElementById('guessWho').classList.remove('displayedDisc')
        document.getElementById('guessWho').classList.add('hiddenDisc')
    }
}

function CheckmateActive() {
    if(document.getElementById('checkmate').classList.contains('hiddenDisc')){
        document.getElementById('checkmate').classList.remove('hiddenDisc')
        document.getElementById('checkmate').classList.add('displayedDisc')
    }
    if(document.getElementById('cheshire').classList.contains('displayedDisc')){
        document.getElementById('cheshire').classList.remove('displayedDisc')
        document.getElementById('cheshire').classList.add('hiddenDisc')
    }
    if(document.getElementById('killMyDoubt').classList.contains('displayedDisc')){
        document.getElementById('killMyDoubt').classList.remove('displayedDisc')
        document.getElementById('killMyDoubt').classList.add('hiddenDisc')
    }
    if(document.getElementById('crazyInLove').classList.contains('displayedDisc')){
        document.getElementById('crazyInLove').classList.remove('displayedDisc')
        document.getElementById('crazyInLove').classList.add('hiddenDisc')
    }
    if(document.getElementById('guessWho').classList.contains('displayedDisc')){
        document.getElementById('guessWho').classList.remove('displayedDisc')
        document.getElementById('guessWho').classList.add('hiddenDisc')
    }
}

function CrazyInLoveActive() {
    if(document.getElementById('crazyInLove').classList.contains('hiddenDisc')){
        document.getElementById('crazyInLove').classList.remove('hiddenDisc')
        document.getElementById('crazyInLove').classList.add('displayedDisc')
    }
    if(document.getElementById('cheshire').classList.contains('displayedDisc')){
        document.getElementById('cheshire').classList.remove('displayedDisc')
        document.getElementById('cheshire').classList.add('hiddenDisc')
    }
    if(document.getElementById('checkmate').classList.contains('displayedDisc')){
        document.getElementById('checkmate').classList.remove('displayedDisc')
        document.getElementById('checkmate').classList.add('hiddenDisc')
    }
    if(document.getElementById('killMyDoubt').classList.contains('displayedDisc')){
        document.getElementById('killMyDoubt').classList.remove('displayedDisc')
        document.getElementById('killMyDoubt').classList.add('hiddenDisc')
    }
    if(document.getElementById('guessWho').classList.contains('displayedDisc')){
        document.getElementById('guessWho').classList.remove('displayedDisc')
        document.getElementById('guessWho').classList.add('hiddenDisc')
    }
}

function GuessWhoActive() {
    if(document.getElementById('guessWho').classList.contains('hiddenDisc')){
        document.getElementById('guessWho').classList.remove('hiddenDisc')
        document.getElementById('guessWho').classList.add('displayedDisc')
    }
    if(document.getElementById('cheshire').classList.contains('displayedDisc')){
        document.getElementById('cheshire').classList.remove('displayedDisc')
        document.getElementById('cheshire').classList.add('hiddenDisc')
    }
    if(document.getElementById('checkmate').classList.contains('displayedDisc')){
        document.getElementById('checkmate').classList.remove('displayedDisc')
        document.getElementById('checkmate').classList.add('hiddenDisc')
    }
    if(document.getElementById('crazyInLove').classList.contains('displayedDisc')){
        document.getElementById('crazyInLove').classList.remove('displayedDisc')
        document.getElementById('crazyInLove').classList.add('hiddenDisc')
    }
    if(document.getElementById('killMyDoubt').classList.contains('displayedDisc')){
        document.getElementById('killMyDoubt').classList.remove('displayedDisc')
        document.getElementById('killMyDoubt').classList.add('hiddenDisc')
    }
}

function radioChange() {
    document.getElementById('phoneRadio').checked ?  document.getElementById('emailError').style.display = 'none' :  document.getElementById('phoneError').style.display = 'none'
    document.getElementById('successSubmit').style.display = 'none'
}

function validateFields() {
    if(document.getElementById('phoneRadio').checked) {
        document.getElementById('phoneInput').value !== '' ?  document.getElementById('phoneError').style.display = 'none' : document.getElementById('phoneError').style.display = 'flex'
    } else {
        document.getElementById('emailInput').value !== '' ?  document.getElementById('emailError').style.display = 'none' : document.getElementById('emailError').style.display = 'flex'
    }
    document.getElementById('fName').value !== '' ?  document.getElementById('firstNameError').style.display = 'none' : document.getElementById('firstNameError').style.display = 'flex'
    document.getElementById('lName').value !== '' ?  document.getElementById('lastNameError').style.display = 'none' : document.getElementById('lastNameError').style.display = 'flex'
    document.getElementById('comments').value !== '' ?  document.getElementById('commentsError').style.display = 'none' : document.getElementById('commentsError').style.display = 'flex'
    if ( document.getElementById('fName').value !== '' &&  document.getElementById('lName').value !== '' && document.getElementById('comments').value !== '' && ( (document.getElementById('phoneInput').value !== '' && document.getElementById('phoneRadio').checked )||  (document.getElementById('emailInput').value !== '' &&   document.getElementById('emailRadio').checked ))) {
        document.getElementById('successSubmit').style.display = 'flex'
    }
}

function playGame() {
    let rng = Math.floor(Math.random() *10) +1
    if(rng === parseInt(document.getElementById('numGame').value)) {
        document.getElementById('winner').style.display = 'flex'
        document.getElementById('loser').style.display = 'none'
        document.getElementById('guess').style.display = 'flex'
        document.getElementById('guess').textContent = 'Your Guess ' + document.getElementById('numGame').value
        document.getElementById('rng').textContent =  'Winning Number: ' + rng
        document.getElementById('rng').style.display = 'flex'
    } else {
        document.getElementById('winner').style.display = 'none'
        document.getElementById('loser').style.display = 'flex'
        document.getElementById('guess').style.display = 'flex'
        document.getElementById('guess').textContent =  'Your Guess ' + document.getElementById('numGame').value
        document.getElementById('rng').textContent =  'Winning Number: ' + rng
        document.getElementById('rng').style.display = 'flex'
    }
}