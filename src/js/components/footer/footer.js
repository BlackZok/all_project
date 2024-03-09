import {generalFooter} from "./footerModel";

const footer = document.querySelector('#footer');

let footerHtml = generalFooter.map((a) => {
    return `
   
    <div class="col-md-4">${a.text_1}</div>
    <div class="col-md-4">${a.text_2}</div>
    <div class="col-md-4">${a.text_3}</div>
    
    `
}).join(" ");

footer.insertAdjacentHTML('beforeend', footerHtml);

