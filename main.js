function randomAdvice(){
  fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => {
    let div1 = document.getElementById("advice")
    let div2 = document.getElementById("random_text")

    div1.innerText="advice # " + data.slip.id
    div2.innerText=data.slip.advice
    console.log(data);
  })
}





