var operand1=null;
var operand2=null;
var operator=null;
let flag=false;
var isoperatorPressed=true;

//clearing input field
function AC(){
     operand1=null;
     operand2=null;
     operator=null;
     flag=false;
     isoperatorPressed=true;
    document.getElementById('input').value='';
}
//removing the last number that might be incorrectly entered
function removeOne(){
    let x=document.getElementById('input').value;
    console.log(x);
    let length=x.length;
    console.log(length);
    if(length>0)
    {
    document.getElementById('input').value=x.slice(0,length-1);
    if(operand2==null)
    {
        operand1=null;
    }
    }
    else{
        window.alert('cannot remove from empty');
    }
}

function getPercentage(x)
{
    if(document.getElementById('input').value==0)
    {
        window.alert('enter value')
    }
    else{
        let val=document.getElementById('input').value;
        document.getElementById('input').value=val/100;
        operand1=document.getElementById('input').value;
        isoperatorPressed=false;
        
    }
}

function operatorPressed(x){
    
   console.log(operand1,operand2);
    if(operand1==null)
    {
        operand1=document.getElementById('input').value;
        console.log(operand1);
        if(operand1==0)
        {
        console.log('no operand value');
        alert('no operand value');
        return null;
        }
        else{
            var string=x.innerHTML;
            
            operator=x.innerHTML;
            isoperatorPressed=true;
        }
    }
    else if(operand2==null)
    {
        if(isoperatorPressed==false)
        {
            document.getElementById('input').value='';
            isoperatorPressed=true;
            operator=x.innerHTML;
            return;
        }
        operand2=document.getElementById('input').value;
        if(operand2==0)
        {
            console.log('no operand value');
            alert('no operand value');
            return null;   
        }
        else{
            console.log('working');
            console.log(operand1,operand2,operator);
            document.getElementById('input').value=operate(operator,operand1,operand2);
            operator=x.innerHTML;
            return;
        }


    }

 
}


//append the text in input div 
function appendOnscreen(x){
    if(x.innerHTML=='.')
    {
        let v=document.getElementById('input').value;
        let list=v.split('.');
        if(list.length>1)
        {
            window.alert('this operation is not allowed');
            return;
        }
    }
    
    if(operand1==null)
    {
        let number1=x.innerHTML;
        let number2=document.getElementById('input').value;
        let y=number2+number1;
        document.getElementById('input').value=y;
        
    }
    else{
        if(flag==false)
        {
            document.getElementById('input').value="";
            flag=true;
        }
        let number1=x.innerHTML;
        let number2=document.getElementById('input').value;
        let y=number2+number1;
        document.getElementById('input').value=y;

    }
}

//calculate the operate
function calculate(){
    console.log(operand1,operand2);
    if(operand1==null)
    {
        window.alert("can't perform this action");
        return;
    }
    else if(document.getElementById('input').value==0)
    {
        window.alert("can't perform this action");
        return;

    }
    
    if(operator!='=')
    {
    operand2=document.getElementById('input').value;
    }
    
    document.getElementById('input').value=operate(operator,operand1,operand2);
    isoperatorPressed=false;


}

//perform calculation
function operate(operator,v1,v2)
{
    console.log(operator,v1,v2);
    let val1=Number(v1);
    let val2=Number(v2);
    operand2=null;
    flag=false;
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
                    return 'not suitable operation';
                }
    }
}
