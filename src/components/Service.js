export const play = (sound) =>{
  if(sound==="switch")
    sound = "/sounds/switch.wav";
  
  let player =  document.querySelector('.Player')
  player.volume = 0.2;
  player.src = sound;
}


export const move = (dir) =>{
  const w = window.innerWidth;
  const h = window.innerHeight;
    
  if(dir==="up"){
    window.scrollTo(w, 0); 
    return 0;
  }

  if(dir==="left"){
    window.scrollTo(0, h); 
    return 0;
  }

  if(dir==="right"){
    window.scrollTo(2*w+5, h); 
    return 0;
  }

  if(dir==="down"){
    window.scrollTo(w, 2*h); 
    return 0;
  }

  window.scrollTo(w, h); 
  return 0;
}

export const coin_flip = ()=>{
  const coins = document.querySelector(".Coins");
  if(coins.classList.value.indexOf("Block")<0){
    coins.classList.add("Block");
    setTimeout(()=>{
      const coins = document.querySelector(".Coins");
      let anim = "Anim-Play";
      
      if(coins.classList.value.indexOf("Play2")<0){
        let random = (Math.random());
        if(random>0.4)
          anim = "Anim-Play2";
      }else{
        anim = "Anim2-Play";
        let random = (Math.random());
        if(random>0.4)
          anim = "Anim2-Play2";
      }
      
      const coin1 = document.querySelector(".Side1");
      if(coin1.classList.value.indexOf("CTT")>-1){
        coin1.classList.add("CT");
        coin1.classList.remove("CTT");
        console.log("kk")
      }

      coins.classList.remove("Anim-Play");
      coins.classList.remove("Anim-Play2");
      coins.classList.remove("Anim2-Play");
      coins.classList.remove("Anim2-Play2");
      coins.classList.add(anim);

      setTimeout(()=>{
        const coins = document.querySelector(".Coins");
        coins.classList.remove("Block");
      },5000)

    }, 500);
  }
}