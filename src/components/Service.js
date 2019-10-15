export const calcItems = (obj) =>{
  if(localStorage.getItem("calcItems")){
    const calcItems = JSON.parse(localStorage.getItem("calcItems"))
    calcItems.push(obj)
    localStorage.setItem("calcItems", JSON.stringify(calcItems))
  }
  else{
    const calcItems = []
    calcItems.push(obj)
    localStorage.setItem("calcItems", JSON.stringify(calcItems))
  }
}
export const dropItem = (id) =>{
  const calcItems = JSON.parse(localStorage.getItem("calcItems"))
  calcItems.splice(id,1)
  localStorage.setItem("calcItems", JSON.stringify(calcItems))
}
export const dropAllItem = () =>{
  localStorage.setItem("calcItems", [])
}
// ON/OFF SOUNDS
export const sound = () =>{
  const options = document.querySelector(".Options-Box");
  if(options.classList.value.indexOf("ON")>-1){
    options.classList.remove("Sound-ON");
    options.classList.add("Sound-OFF");
    localStorage.setItem("sound" , "OFF")
  }
  else{
    options.classList.remove("Sound-OFF");
    options.classList.add("Sound-ON");
    localStorage.setItem("sound" , "ON")
  }
}

// PLAY SOUND
export const play = (sound) =>{
  if(localStorage.getItem("sound")==="ON"){
    if(sound==="switch")
      sound = "/sounds/effects/switch.wav";
    let player =  document.querySelector('.Player')
    player.volume = 0.2;
    player.src = sound;
  }
}


// MOVE BETWEEN PAGES
export const move = (dir) =>{
  const w = window.innerWidth;
  const h = window.innerHeight;
  play("switch");
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


//COIN FLIP ANIMATION
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


// SKIN FLOAT
export  const   float_skin = (event,float) =>{
  const id_skin = "#"+event.name_weapon+event.name_skin
  const skin_img = document.querySelector(id_skin)
  if(float === "fn"){
    if(event.cost_factory !== "Not Possible"){
      skin_img.src= event.img_skin_fn
    }else{
      return 0;
    }
  }else if(float === "mw"){
    if(event.cost_minimal !== "Not Possible"){
      skin_img.src= event.img_skin_mw
    }else{
      return 0;
    }
  }else if(float === "ft"){
    if(event.cost_field !== "Not Possible"){
      skin_img.src= event.img_skin_ft
    }else{
      return 0;
    }
  }else if(float === "ww"){
    if(event.cost_wellworm !== "Not Possible"){
      skin_img.src= event.img_skin_ww
    }else{
      return 0;
    }
  }else if(float === "bs"){
    if(event.cost_battle !== "Not Possible"){
      skin_img.src= event.img_skin_bs
    }else{
      return 0;
    }
  }else{
    skin_img.src= event.img_skin_fn
  }
}
export const def_float = (event) =>{
  const id_skin = "#"+event.name_weapon+event.name_skin
  const skin_img = document.querySelector(id_skin)
  skin_img.src= event.img_skin
}