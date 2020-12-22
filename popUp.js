
  const api= "https://coronavirus-19-api.herokuapp.com/countries";
  const cases = document.querySelector(".cases");
  const loading= document.querySelector(".loading");
  const country = document.querySelector(".search");
  const error = document.querySelector(".error");
  const form = document.querySelector(".form");
  const deaths = document.querySelector(".deaths")
  const todayCases = document.querySelector(".todayCases");
  const data = document.querySelector(".data");
  const todayDeaths =document.querySelector(".todayDeaths")


  loading.style.display="none";
  error.style.display ="none";
  data.style.display="none";

  
   const getData= async (countryName)=>{
    loading.style.display="block";
    data.style.display="none";
    const response= await axios.get(`${api}/${countryName}`);
    console.log(response.data);
    if(response.data === "Country not found"){
        error.style.display="block";
        data.style.display="none";
        loading.style.display="none";
    }else{
        error.style.display="none";
        loading.style.display="none";
        data.style.display="block";
        cases.innerHTML=response.data.cases;
        todayCases.innerHTML =response.data.todayCases;
        deaths.innerHTML= response.data.deaths;
        todayDeaths.innerHTML = response.data.todayDeaths;
    }
  } 

   const handleSubmit =(e)=>{
       e.preventDefault();
       getData(country.value);
       console.log(country.value);
   }

  form.addEventListener("submit",(e)=>{
      handleSubmit(e);
  })
  

  
  

