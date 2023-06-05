
const body = document.querySelector('body');
const createElm = (type,elmClass,src)=>{
      let elm = document.createElement(type);
      elmClass?elm.classList.add(elmClass):'';
      elm.src?elm.src=src:elm.href=src;
      type==="link"?elm.rel="stylesheet":'';
      return elm;
}
let link = createElm('link',false,`./css/global.css`);
document.head.appendChild(link)
const choseThem=(themName)=>{
    let link = createElm('link',false,`./css/${themName}.css`);
    document.head.appendChild(link)
}
choseThem('raval')