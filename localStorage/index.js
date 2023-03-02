const fromText = document.querySelector('.fromText');
const inputNane = document.querySelector('.inputNane');
const inputAge = document.querySelector('.inputAge');
const buttonSubmit = document.querySelector('.buttonSubmit');
const listName = document.querySelector('.listName')

if(fromText){
    var ArrayName = []
    let myStorage = window.localStorage
    let listAll = []

    if(myStorage.ArrayName){
        const listlocalStorage = JSON.parse(myStorage.ArrayName)
        for(var i = 0; i < listlocalStorage.length; i++){
            console.log(listlocalStorage[i])
            ArrayName.push({
                name:listlocalStorage[i].name,
                age:Number(listlocalStorage[i].age)
            })
        }
    }

    if(listName){
        for(var i = 0; i < ArrayName.length; i++){
            let max = `<li>${ArrayName[i].name} <span>${ArrayName[i].age}</span></li>`
            listAll.push(max)
        }
        
        listName.innerHTML = listAll
        
        for(var i = 0; i < listName.childNodes.length;i++){
            if(listName.childNodes[i].textContent === ','){
                listName.childNodes[i].textContent = ''
            }
        }
    }

    buttonSubmit.onclick = () => {
        
        if(inputNane.value.length >=1 && inputAge.value.length >=1){
            ArrayName.push({
                name:inputNane.value,
                age:Number(inputAge.value)
            })
    
            localStorage.setItem('ArrayName', JSON.stringify(ArrayName))
            inputNane.value = ""
            inputAge.value = ""
        }
    }
}

// sunMoon start

const sunMoon = document.querySelector('.sunMoon');

if(sunMoon){
    let sunMoonOpen = true
    
    const sunLink = document.querySelector('.sunLink');
    const moonLink = document.querySelector('.moonLink');
    sunLink.style.display = 'none'

    const bode = document.querySelector('body')
    let listSunMoon = window.localStorage

    function updateSunMoon(){
        if(listSunMoon.sunMoonOpen == 'true'){
            bode.classList.add('active')
            moonLink.style.display = 'none'
            sunLink.style.display = 'block'
        }else if(listSunMoon.sunMoonOpen == 'false'){
            bode.classList.remove('active')
            moonLink.style.display = 'block'
            sunLink.style.display = 'none'
        }
    }
    updateSunMoon()
    

    moonLink.onclick = () => {
        localStorage.setItem('sunMoonOpen', JSON.stringify(sunMoonOpen = true))
        updateSunMoon();
    }

    sunLink.onclick = () => {
        localStorage.setItem('sunMoonOpen', JSON.stringify(sunMoonOpen = false))
        updateSunMoon();
    }
}

// sunMoon end