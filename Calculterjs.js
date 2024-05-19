let button=document.getElementById('button')
button.addEventListener('click',()=>{
    const dollar=parseFloat(document.getElementById('dollar').value);
    const rate=parseFloat(document.getElementById('rate').value);
    const charge=parseFloat(document.getElementById('charge').value);
    const paycharge=parseFloat(document.getElementById('paycharge').value);
    const naira=parseFloat(document.getElementById('naira').value);
    const result=document.getElementById('output');
    let dollar_status=false,rate_status=false,charge_status=false,paycharge_status=false,naira_status=false;
    
    if(dollar===''||isNaN(dollar)||(dollar<=0)){
        document.getElementById('dollar_error').innerHTML='请提供有效数字';
    }else{
        document.getElementById('dollar_error').innerHTML='';
        dollar_status=true;
    }
    if(rate===''||isNaN(rate)||(rate<=0)){
        document.getElementById('rate_error').innerHTML='请提供有效数字';
    }else{
        document.getElementById('rate_error').innerHTML='';
        rate_status=true;
    }
    if(charge===''||isNaN(charge)||(charge<=0)){
        document.getElementById('charge_error').innerHTML='请提供有效数字';
    }else{
        document.getElementById('charge_error').innerHTML='';
        charge_status=true;
    }
    if(paycharge===''||isNaN(paycharge)||(paycharge<=0)){
        document.getElementById('paycharge_error').innerHTML='请提供有效数字';
    }else{
        document.getElementById('paycharge_error').innerHTML='';
        paycharge_status=true;
    }
    if(naira===''||isNaN(naira)||(naira<=0)){
        document.getElementById('naira_error').innerHTML='请提供有效数字';
    }else{
        document.getElementById('naira_error').innerHTML='';
        naira_status=true;
    }
    if( dollar_status&&rate_status&&charge_status&&paycharge_status&&naira_status){
        const price=((dollar*rate-((dollar*rate)*(charge/100))-paycharge)*naira).toFixed(2);
        result.innerHTML='最终价格：'+price;
    }
    else{
        alert('表单有误');
        result.innerHTML='';
        
    }


});