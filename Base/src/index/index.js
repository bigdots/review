import axios from 'axios'

axios.get('/pages').then(function(res){
  console.log(res.data)
  const data = res.data;
  let li = '';
  for(let key in data){
    li += `<li><a href=${data[key]}>${key}</a></li>`
  }
  document.getElementById("root").innerHTML = li
  
}).catch(function(e){
  console.log(e)
})