var operand1=null;
var operand2=null;
var operator=null;
let flag=false;
let input=document.getElementById('input');
let isoperatorPressed=false;
//clearing input field
function AC(){
    operand1=null;
    operand2=null;
    operator=null;
    flag=false;
    isoperatorPressed=true;
   document.getElementById('input').value='';
}

//function getting percentage


function deleteOne()
{
    if(flag==false)
    {
        if(input.value==='')
        {
            window.alert('you cannot delete from empty box');
            return ;
        }
    let v=input.value;
    input.value=v.slice(0,v.length-1);
    }
}

function operatorPressed(x){
    if(input.value==='')
    {
        window.alert("couldn't perform action");
        return ;
    }
    
    if(operand1==null)
    {
        if(x.innerHTML=='=')
        {
            window.alert('illegal operation');
            return ;
        }
        /* if(x.innerHTML=='%')
        {
            operand1=input.value/100;
            input.value=operand1;
        } */

        operand1=input.value;
        operator=x.innerHTML;
        
        isoperatorPressed=true;
    }
    else{
        
        operand2=input.value;
      
       
        

        
        
        input.value=operate(operator,operand1,operand2);
        if(x.innerHTML=='=')
        {
            operator=null;
            operand1=null;
            isoperatorPressed=false;
            //flag=true;
            return;
        }
        
        operator=x.innerHTML; 

    }
    flag=true;

}


//appending value onScreen
function appendOnscreen(x)
{
    if(x.innerHTML=='%')
    {
        if(!flag)
        {
            if(input.value=='')
            {
                window.alert('operation not allowed');
                AC();
            }
            else{
                input.value=input.value/100;
            }
            return;
        }
    }
    if(x.innerHTML=='.')
    {
        let v=input.value.split('.')
        if(v.length>1)
        {
            window.alert('illegal operation');
            AC();
            return ;
        }
    }
    if(flag==true)
    {
        input.value="";
        flag=false;
    }
    let variable1=input.value;
    let variable2=x.innerHTML;
    input.value=variable1+variable2;
}

//perform calculation
function operate(operator,v1,v2)
{
    console.log(operator,v1,v2);
    let val1=Number(v1);
    let val2=Number(v2);
    operand2=null;
    //flag=false;
    switch(operator)
    {
        case '+':operand1=val1+val2;
                return operand1;
        case '-':operand1=val1-val2;
                return operand1;
        case 'x':operand1=val1*val2;
                return operand1;
        case '/':if(operand1!=0)
                {
                    operand1=val1/val2;
                    return operand1;
                }
                else{
                    window.alert('Illegal operation');
                    AC();
                    return '';
                }
        default:window.alert('not applicable');
                return operand1;
    }
}