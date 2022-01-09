const app = document.getElementById('root')


var out;
var request = new XMLHttpRequest()
request.open('GET','https://restcountries.eu/rest/v2/name/united')
request.onload = function f1(){
    var data = JSON.parse(this.response)
    if(request.status >=200 && request.status<400)
    {
        var country = document.getElementById('search').value;
        for(i=0;i<data.length;i++)
        {
            console.log(country);
            console.log(data[i].name)
            
            if(country.localeCompare(data[i].name)==0)
            {
                out = '<a href=country_details.html onclick='+passing(JSON.stringify(data[i]))+'>' + data[i].name+ '</a><br><img src='+data[i].flag+'>';
    localStorage.setItem("country",data[i]);
    }
  }
  document.getElementById("root").innerHTML = out;
  }
  xmlhttp.open("GET", "https://restcountries.eu/rest/v2/name/united", true);
xmlhttp.send();

};

function passing(value)
{
    localStorage.setItem("country_result",value);
    return false;
}
