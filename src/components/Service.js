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
    window.scrollTo(2*w, h); 
    return 0;
  }

  if(dir==="down"){
    window.scrollTo(w, 2*h); 
    return 0;
  }

  window.scrollTo(w, h); 
  return 0;
}