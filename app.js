const counters = document.querySelectorAll(".counter")

counters.forEach((counter) =>{
    counter.innerText = '0'

    const updateCounter = () =>{
        const target = Number(counter.getAttribute("data-target"))
      //  console.log(target)

      const c = +counter.innerText

      const increment = target / 300

      if(c < target){
        counter.innerText =  `${Math.ceil(c+increment)}`
        setTimeout(updateCounter,1)
      }
      else{
        counter.innerText = target;
      }
    }
    updateCounter()
})