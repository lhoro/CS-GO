// -----  CALCULATOR  -----
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
  localStorage.setItem("calcItems", JSON.stringify([]))
}

// -----  ON/OFF SOUNDS  ------
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

// ----- PLAY SOUND ----- 
export const play = (sound) =>{
  if(localStorage.getItem("sound")==="ON"){
    if(sound==="switch")
      sound = "/sounds/effects/switch.wav";
    let player =  document.querySelector('.Player')
    player.volume = 0.2;
    player.src = sound;
  }
}






// ----- MOVE BETWEEN PAGES -----
var timeHandler, isMobile, isLandspace, initialHeight = 0; 

// sprawdzenie czy urządzenie jest mobilne 
// oraz ustawienie startowych wartości rozdzielczości
export const checkDevice = () => {
  // isMobile = window.matchMedia("only screen and (max-width: 1199px)").matches;
  isMobile = typeof window.orientation !== "undefined" || (navigator.userAgent.indexOf('IEMobile') !== -1);
  if(initialHeight===0){
    initialHeight = window.innerHeight;
    isLandspace = (window.innerWidth > window.innerHeight) ? true : false;
  }
}


const removeLoader = (loader) =>{
 loader.style.display= "none";
}
const removeLoaderGif = (loaderGif,loader) =>{
  loader.classList.add("Loader-Box-Shadow")
  loaderGif.style.display= "none";
 }

export const move = (component) =>{
  let w = window.innerWidth;
  let h = window.innerHeight;
  let scrBhw = "auto";
  const lock = document.querySelector(".Locked-Box");
  checkDevice();

  // wybór czy scrolowanie odbywa się między stronami czy też nie 
  // w celu ustawienia prędkości animacji dodaniu odpowiedniego /
  // do adresu oraz uruchomieniu dwięku
  if(component!==window.location.pathname){
    play("switch");
    window.history.pushState("object or string", "Page Title", component);
    scrBhw = "smooth";
  }
  else{
    //  uruchomienie loadera na kompterach przy zmienianiu wielkości okna
    if(!isMobile){
      const loader = document.querySelector(".Loader-Box");
      loader.classList.remove("Loader-Box-Shadow")
      const loaderGif = document.querySelector(".Loader-Gif");
      loader.style.display= "block";
      loaderGif.style.display= "block";
      clearTimeout( timeHandler )
      timeHandler = setTimeout(removeLoaderGif, 3000, loaderGif,loader)
      timeHandler = setTimeout(removeLoader, 4000, loader)
    }
    else{
      // debug rozdzielczości na mobilnych urzadzeniach
      // document.querySelector(".Image1").innerHTML = "HEIGHT:</br>current: "+window.innerHeight+"</br> initial: "+initialHeight;
      // document.querySelector(".Image2").innerHTML = "WIDTH:</br>current: "+window.innerWidth+"</br> initial: "+initialWidth;
    }
  }



    // if(isMobile && initialHeight > window.innerHeight)
  //   lock.style.display = "block";
    


  // pomijanie adresbarr i scrolowanie przy uruchomionej klawiaturze
  if(isMobile && (initialHeight === window.innerHeight && !isLandspace )){
    h=h+56;
  }   
  
  if((isMobile) && initialHeight > window.innerHeight){
    h=h+112;
  }




    
  // blokada pozioma dla mobilnych

  lock.style.display = "none";
  if(isMobile && (window.innerWidth > window.innerHeight)){
    lock.style.display = "block";
  }

  // h: 340
  // w: 800

  // funkcja przechodząca między modułami
  if(component==="/ranks"){
    window.scrollTo({ 
      left: w,
      top: 0, 
      behavior: scrBhw }); 
    return 0;
  }
  if(component==="/weapons"){
    window.scrollTo({ 
      left: 0,
      top: h, 
      behavior: scrBhw}); 
    return 0;
  }
  if(component==="/skins"){
    window.scrollTo({ 
      left: 2*w+5,
      top: h, 
      behavior: scrBhw}); 
    return 0;
  }
  if(component==="/calc"){
    window.scrollTo({ 
      left: w,
      top: 2*h+5, 
      behavior: scrBhw}); 
    return 0;
  }
  window.scrollTo({ 
    left: w,
    top: h, 
    behavior: scrBhw
  }); 
  return 0;
}

export const resizer = ()=> {
  move(window.location.pathname)
}










// -----  COIN FLIP ANIMATION  -----
const addAnim = (coins, anim) =>{
  coins.classList.add(anim);
}

const removeBlock = (coins) =>{
  coins.classList.remove("Block")
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
      }
      coins.classList.remove("Anim-Play");
      coins.classList.remove("Anim-Play2");
      coins.classList.remove("Anim2-Play");
      coins.classList.remove("Anim2-Play2");
      setTimeout(addAnim, 25, coins, anim);
      setTimeout(removeBlock, 3100, coins)
    }, 500);
  }
}


// -----  SKIN FLOAT  -----
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