// function redirect(){
//     window.location ="form.html";
//     console.log(redirect);
// }

let name=document.getElementById('fname')
let email=document.getElementById('eml')
let username=document.getElementById('username')
let image1=document.getElementById('img1')
let image2=document.getElementById('img2')
let image3=document.getElementById('img3')
let image4=document.getElementById('img4')
let form=document.getElementById('userForm')
let userDetail_name=document.getElementById('userDetail_name')
let userDetail_username=document.getElementById('userDetail_username')
let diceImage=document.getElementById('dice_image')
let number=document.getElementById('randomNumber')
let outputAfterCount=document.getElementById('badLuck')
let finalOutput=document.getElementById('randomText')
let sum=document.getElementById('sum')
let congratulationImage=document.getElementById('congratulationImage')

function show(){
     form.style.display="block";
     diceImage.style.display="none";
     congratulationImage.style.display="none"
    //  show().disabled=false;
    image1.onclick=null;
}

function showOutput(){
    form.style.display="none";
    congratulationImage.style.display="none"
    // diceImage.style.display="none";
    userDetail_name.innerText="Name : "+name.value;
    userDetail_username.innerText="Username : "+username.value;
    image2.onclick=null;
}

// Make 2 functions
// on cliking the third image call a function which should change display styling of the third image from block to none
// change the styling of dice image from noen to block
function function2(){
    diceImage.style.display="block";
    userDetail_name.style.display="none";
    userDetail_username.style.display="none";
    congratulationImage.style.display="none"
    finalOutput.style.display="none";
    image3.onclick=null;
    //image3.style.display="none";
    // function rolldice(btn_id){
    //btns[btn_id].disabled = true
    }
    // let diceSum=0;
    // let countDice=0;
    // let countDiceAttempt=0;
    // let clickImage4 = 0;
    // function clicked(){
    //     if(countDice<3){
    // let  arr= ["1", "2", "3", "4", "5", "6"]
    // let randomIndex = Math.floor(Math.random() * 6) // 0 - 5 only integers
    // let randomDice = arr[randomIndex]
    //  diceSum+=Number(randomDice);
    // number[0].innerText = randomDice;
    // countDice++;
    // countDiceAttempt++;
    //     } 
    //         else{
    //             alert("3 coutns done")
    //         }
    // }

    let diceSum=0;
    let countDiceClick=0;
    let countDiceAttempt=0;
    let clickImage4 = 0;
    let  arr= [1, 2, 3, 4, 5, 6];
    function clickDice(){
        if(countDiceClick <3 && countDiceAttempt<2){
            let randomIndex = Math.floor(Math.random() * 6) // 0 - 5 only integers
            let randomDiceNumber = arr[randomIndex];
            diceSum += randomDiceNumber;
            number.innerText="Dice click Value = "+randomDiceNumber;
            // sum.innerText="Sum of dices = "+diceSum;
            countDiceClick++;
        }
        if(countDiceClick === 3 && diceSum <=10 && countDiceAttempt===1){
            // console.log("randomDiceNumber",randomDiceNumber);
            clickImage4 = 0;
            countDiceAttempt++;
            diceSum=0;
            countDiceClick=0;
            const op="bad luck"
            outputAfterCount.innerText=op;
        }
        else if(countDiceClick === 3 && diceSum <= 10){
            clickImage4 = 0;
            countDiceAttempt++;
            diceSum=0;
            countDiceClick=0;
            alert("please try again");
        }
        else if(countDiceClick === 3 && diceSum > 10){
            clickImage4 = 1;
            countDiceAttempt++;
            // countDiceAttempt=0;
        }
    //     if(countDiceClick<=3){
    // let  arr= ["1", "2", "3", "4", "5", "6"]
    
    // let randomIndex = Math.floor(Math.random() * 6) // 0 - 5 only integers
    // let randomDice = arr[randomIndex]
    //  count1+=Number(randomDice);
    //  console.log(randomDice)
    //  console.log(count1)
    // number[diceImage].innerText = randomDice
    // count++;
    //     }
    }
    function createRandom(){
        image4.onclick=null;
        diceImage.style.display="none";
        number.style.display="none";
        sum.style.display="none";
        var random='';
        var characters='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz'
        for(var i=0;i<12;i++){
            random+=characters.charAt(Math.floor(Math.random() *characters.length));
        }
        finalOutput.innerText=random;
        //congratulationImage.src="https://thumbs.dreamstime.com/z/congratulations-slogan-well-done-chalkboard-celebration-thumbs-up-76886933.jpg";
        congratulationImage.style.display="block"
    }




















// // function redirect(){
// //     window.location ="form.html";
// //     console.log(redirect);
// // }

// // let fname=document.getElementById('fname')
// // let email=document.getElementById('eml')
// // let username=document.getElementById('username')
// let image1=document.getElementById('img1')
// // let image2=document.getElementById('img2')
// let image3=document.getElementById('img3')
// let image4=document.getElementById('img4')
// let form=document.getElementById('userForm')
// let userDetail_name=document.getElementById('userDetail_name')
// let userDetail_username=document.getElementById('userDetail_username')
// let message=document.getElementsByClassName('abc')

// let count=0;
// function show(){
//      form.classList.toggle("userDataForm")
// }

// //image2.addEventListener('img1',showOutput)

// function showOutput(){
//     // message.classList.toggle("abc")
//     //message.setAttribute('class',"xyz")
//    // document.getElementsByClassName('abc').classList.add('xyz'); 
//    const row=document.createElement('div')
//    row.innerHTML=`
//    <p  id="userDetail_name">
// 1234
//             </p>
//    ` 
//    message.appendChild(row)
// }
// //  function submit(e){
// //     e.preventDefault();
// //     let fname=document.getElementById('fname')
// //     let email=document.getElementById('eml')
// //     let username=document.getElementById('username')
// //     //let image2=document.getElementById('img2')
// //      userDetail_name.innerText=fname;
// //      userDetail_username.innerText=username;
// //     //showOutput()
// // }
// //let fname,username;
//     form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     let fname=document.getElementById('fname')
//     let email=document.getElementById('eml')
//     let username=document.getElementById('username')
//     let image2=document.getElementById('img2')
//     //showOutput()
//       userDetail_name.innerText=fname.value;
//       userDetail_username.innerText=username.value;
//     console.log(fname.value)
//     console.log(userDetail_name)
// }
// )
// form.addEventListener('submit',(e)=>{
  
// }
// )
// // Make 2 functions
// // on lciking the third image call a function which should change display styling of the third image from block to none
// // change the styling of dice image from noen to block