var URLFORDATA= 'http://api.quotable.io/random'
// fetch(URLFORDATA)
// .then(response=>response.json())
// .then(data=>{
//     data.content
//     console.log(data.content)
// })
var datas;
async function datagetter(){
   await fetch(URLFORDATA)
.then(response=>response.json())
.then(data=>{
    data.content
    datas=data.content
   
    test(data.content)
})
}
datagetter()
var problem=false;
function test(data){
    
    var arr=data.split('');
    console.log(arr)
    arr.forEach((value)=>{
        var ele=document.createElement('span')
        ele.innerText=value
        document.querySelector('.quote').appendChild(ele)
        
    })
    document.getElementById('quote-input').addEventListener("input",(value)=>{
      
        var characterspan=document.getElementById('quote-input').value
       document.querySelectorAll('span').forEach((value,index)=>{
           
            if(characterspan[index]===undefined){
                value.classList.remove('incorrect')
                value.classList.remove('correct')
                problem=false;
            }
           else if(value.innerText===characterspan[index])
            {
                value.classList.remove('incorrect')
                value.classList.add('correct')
                problem=true
            }
            else if(value.innerText!=characterspan[index]){
                value.classList.remove('correct')
                value.classList.add('incorrect')
                problem=false;
            }
       })
      if(problem===true){
        document.getElementById('qoute-input').value=''
        document.querySelector('.quote').innerText=''
        datagetter()
      }
    })
  
  
}
