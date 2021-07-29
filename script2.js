var request=new XMLHttpRequest();
//2.opening a connection(specify the URL)
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//3.sending a connection 
request.send();
//4.once the server responded successfully then we have to process the data
request.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data);
    var rdata=data.filter((ele)=>ele.region==='Asia');
    console.log(rdata);

    var rdata1=data.filter((ele)=>ele.population<200000);
    console.log(rdata1);

    var rdata2=data.filter((ele)=>{
        for(let i in ele.currencies){
            if(ele.currencies[i].code==='USD'){
                return true;
            }
        }
    });
    console.log(rdata2);

    var rdata3 = (accumulator, currentValue) => accumulator + currentValue;
    console.log(data.population.reduce(rdata3));
    
}

