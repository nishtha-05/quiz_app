/*array of objects*/ 
const question = [{
    'que': 'Which tag do we use to make a row?',
    'a' :'trow',
    'b' :'tr',
    'c' :'row',
    'd' :'td',
    'correct':'b'
},
{
    'que': 'css full form?',
    'a' :'Cascading style sheet',
    'b' :'hyper text amrkup language',
    'c' :'jason object notation',
    'd' :'helicopter terminal' ,
    'correct': 'a'
},
{
    'que': 'Which of the following is markup language?',
    'a' :'PHP',
    'b' :'CSS',
    'c' :'JavaScript',
    'd' :'HTML' ,
    'correct': 'd'
}
] 
let index =0;
let total = question.length;
let right = 0;
    wrong = 0;
const quebox = document.getElementById("quebox");
const Optioninput =document.querySelectorAll(".options")
const loadquestion = () =>{
    if(index === total){
        return endquiz()
    }
    reset();
    const data =question[index]
    quebox.innerText = `${index+1}) ${data.que}`;//gives option to use variable inside string
    Optioninput[0].nextElementSibling.innerText = data.a;
    Optioninput[1].nextElementSibling.innerText = data.b;
    Optioninput[2].nextElementSibling.innerText = data.c;
    Optioninput[3].nextElementSibling.innerText = data.d;

}
const submitquiz = ()=>{
    const data= question[index];
    const ans = getanswer()
    if (ans == data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadquestion();
    return;

}

const getanswer = () =>{
    let answer;
    Optioninput.forEach(
        (input) => {
            if(input.checked){
                answer =input.value;
               
            }
        }
    )
    return answer;
}
const reset =() =>{
    Optioninput.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
const endquiz = () =>{
    document.getElementById("box").innerHTML=`
    <div style ="text-align:center">
    <h3>Thank you for playing quiz</h3>
    <h2>${right} / ${total} are corret</h2
    </div>
    `
}


//inital call
loadquestion();

