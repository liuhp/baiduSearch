var oinput = document.getElementsByTagName('input')[0],
    oul = document.getElementsByTagName('ul')[0];

oinput.oninput = function(){
    var val = this.value;
    var oscript = document.createElement('script');
    oscript.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + val +'&cb=ojson'
    document.body.appendChild(oscript);
}


function ojson(data){
    console.log(data);
    var s = data.s;
    console.log(s);
    var str = '';
    if(s.length>0){
        s.forEach(function(ele,index){
            str += '<li><a href = https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=SE_Pclogo_6ysd4c7a&wd=' + ele +'>'+ ele +'</a></li>' ;
        })
        oul.innerHTML = str;
        oul.style.display = 'block';
        oinput.style.borderBottom = 'none';
    }else{
        oul.style.display = 'none';
    }
    
}


