const lut=["U'","U\u2190","D'","D\u2190","R'","R\u2193","L'","L\u2191","B'","B\u21b7","F'","F\u21b6","M'","M\u2193","u2","u2!","u'","u\u21c7!","d2","d2!","d'","d\u21c7!","r2","r2!","r'","r\u21ca!","l2","l2!","l'","l\u21c8!","b'","b\u21ba!","f'","f\u21ba!","u ","u\u21c9! ","d ","d\u21c9! ","r ","r\u21c8! ","l ","l\u21ca! ","b ","b\u21ba! ","f ","f\u21bb! ","U ","U\u2192 ","D ","D\u2192 ","R ","R\u2191 ","L ","L\u2193 ","B ","B\u21b6 ","F ","F\u21b7 ","M ","M\u2191 ","u)","u\u21c9!)","d)","d\u21c9!)","r)","r\u21c8!)","l)","l\u21ca!)","b)","b\u21ba!)","f)","f\u21bb!)","U)","U\u2192)","D)","D\u2192)","R)","R\u2191)","L)","L\u2193)","B)","B\u21b6)","F)","F\u21b7)","M)","M\u2191)"]
function get(){
  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
  let userinput = document.getElementById("input").value;
  const t_space = document.getElementById("t-space");
  const exclamation_on_off = document.getElementById("exclamation");
  if (t_space.checked == true) { 
  const number_select = document.getElementById("number-select").value;
  let spaces = ""
  for (let i=0;i < clamp(Math.abs(number_select), 2, 10); i+=1) {
      if (spaces.length % 2 == 0) {
      spaces+=" "
      } else {
      spaces+="&nbsp"
      }
  }
  userinput = userinput.replaceAll(" ",spaces)
  }
  userinput = userinput+" "

  for (let i=0;i < lut.length; i+=2) {
  let added = i+1
  userinput=(userinput.replaceAll(lut[i],lut[added]))
  if (i == lut.length-2) {
  }
  }
  if (exclamation_on_off.checked == false) {
  userinput=userinput.replaceAll('!','')
  }
  document.getElementById("output").innerHTML=userinput+'\u200b'
}

var root = document.querySelector(':root');

function mode_set() {
  if (document.getElementById("lightbox").checked == false) {
    root.style.setProperty('--white', '#353535');
    root.style.setProperty('--grey', '#202020');
    root.style.setProperty('--text', 'white'); 
    document.getElementById("modeout").innerHTML='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="45px" height="45px" style="background: var(--white);border:2px solid var(--grey);padding:5px;" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512"><path d="m256,105.5c-83.9,0-152.2,68.3-152.2,152.2 0,83.9 68.3,152.2 152.2,152.2 83.9,0 152.2-68.3 152.2-152.2 0-84-68.3-152.2-152.2-152.2zm0,263.5c-61.4,0-111.4-50-111.4-111.4 0-61.4 50-111.4 111.4-111.4 61.4,0 111.4,50 111.4,111.4 0,61.4-50,111.4-111.4,111.4z"/><path d="m256,74.8c11.3,0 20.4-9.1 20.4-20.4v-23c0-11.3-9.1-20.4-20.4-20.4-11.3,0-20.4,9.1-20.4,20.4v23c2.84217e-14,11.3 9.1,20.4 20.4,20.4z"/><path d="m256,437.2c-11.3,0-20.4,9.1-20.4,20.4v22.9c0,11.3 9.1,20.4 20.4,20.4 11.3,0 20.4-9.1 20.4-20.4v-22.9c0-11.2-9.1-20.4-20.4-20.4z"/><path d="m480.6,235.6h-23c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h23c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4z"/><path d="m54.4,235.6h-23c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h22.9c11.3,0 20.4-9.1 20.4-20.4 0.1-11.3-9.1-20.4-20.3-20.4z"/><path d="M400.4,82.8L384.1,99c-8,8-8,20.9,0,28.9s20.9,8,28.9,0l16.2-16.2c8-8,8-20.9,0-28.9S408.3,74.8,400.4,82.8z"/><path d="m99,384.1l-16.2,16.2c-8,8-8,20.9 0,28.9 8,8 20.9,8 28.9,0l16.2-16.2c8-8 8-20.9 0-28.9s-20.9-7.9-28.9,0z"/><path d="m413,384.1c-8-8-20.9-8-28.9,0-8,8-8,20.9 0,28.9l16.2,16.2c8,8 20.9,8 28.9,0 8-8 8-20.9 0-28.9l-16.2-16.2z"/><path d="m99,127.9c8,8 20.9,8 28.9,0 8-8 8-20.9 0-28.9l-16.2-16.2c-8-8-20.9-8-28.9,0-8,8-8,20.9 0,28.9l16.2,16.2z"/></svg>';
  } else {
    root.style.setProperty('--white', 'white');
    root.style.setProperty('--grey', 'lightgrey');
    root.style.setProperty('--text', 'black');  
    document.getElementById("modeout").innerHTML='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="45px" height="45px" style="background: var(--white);border:2px solid var(--grey);padding:5px;" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512"><path d="m275.4,500.7c-135,0-244.7-109.8-244.7-244.7 1.06581e-14-134.9 109.8-244.7 244.7-244.7 8.2,0 16.4,0.4 24.6,1.2 7.2,0.7 13.5,5.2 16.5,11.7s2.4,14.2-1.6,20.2c-23,33.8-35.2,73.3-35.2,114.2 0,105 78.7,192.2 183.2,202.6 7.2,0.7 13.5,5.2 16.5,11.7 3.1,6.5 2.4,14.2-1.6,20.2-45.8,67.4-121.4,107.6-202.4,107.6zm-12.5-448c-106.5,6.5-191.2,95.2-191.2,203.3 1.42109e-14,112.3 91.4,203.7 203.7,203.7 56.4,0 109.6-23.4 147.8-63.7-46.2-11.7-88.1-36.8-120.8-72.6-41.1-45.2-63.8-103.6-63.8-164.6 0.1-37.1 8.4-73.2 24.3-106.1z"/></svg>';
}}
