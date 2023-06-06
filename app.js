
const body = document.querySelector('body');
const createElm = (type,elmClass,src)=>{
      let elm = document.createElement(type);
      elmClass?elm.classList.add(elmClass):'';
      elm.src?elm.src=src:elm.href=src;
      type==="link"?elm.rel="stylesheet":'';
      return elm;
}
let link = createElm('link',false,`https://raw.githack.com/hesham156/salla/main/css/global.css`);
document.head.appendChild(link)
const addCompanyName =(companyName,url)=>{
    let h5 = createElm('h5','text-center');
    h5.innerHTML=`صنع بحب بواسطه <a href=${url}>${companyName}</a>`;
    document.querySelector('footer').appendChild(h5);
}
const choseThem=(themName,siteName,logo,BG,PColor,SColor,companyName,companyUrl)=>{
    let style = document.createElement('style');
    style.innerHTML=`
        :root{
            --primary-color:${PColor};
            --secendery-color:${SColor};
            --logo:url('${logo}');
            --body-bg:url('${BG}');
            --site-name:'الحقوق محفوظه لدي ${siteName}'
        
    }
    `
    let link = createElm('link',false,`https://raw.githack.com/hesham156/salla/main/css/${themName}.css`);
    document.head.appendChild(link)
    addCompanyName(companyName,companyUrl)

}
  
choseThem('raval')
