import {generalFooter, generalFooter_2} from "./footerModel";

const footer = document.querySelector('#footer');

const footer_2 = document.querySelector('#footer_2');

let footerHtml = generalFooter.map((a) => {
    return `
   
    <div class="col-md-4">${a.text_1}</div>
    <div class="col-md-4">${a.text_2}</div>
    <div class="col-md-4">${a.text_3}</div>

    <div class="col-md-4">${a.p_1}</div>
    <div class="col-md-4">${a.p_2}</div>
    <div class="col-md-4">${a.p_3}</div>
   
    
    `
}).join(" ");



let footerHtml_2 = generalFooter_2.map((a) => {
    return `
        <div class="col-md-4">${a.a_1}</div>
        <div class="col-md-4">${a.a_2}</div>
        <div class="col-md-4">${a.a_3}</div>
    `
}).join(" ");


footer.insertAdjacentHTML('beforeend', footerHtml);
footer_2.insertAdjacentHTML('beforeend', footerHtml_2);
