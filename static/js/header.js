const wrapHeader = document.querySelector('.header-top');
const headerBottom = document.querySelector('.header-bottom');
const wrapSubHeader = document.querySelector('.wrap-sub-header');
const classHeader = document.querySelector('.class-header');
const gnb = document.querySelector('.gnb');
const languagesTxt = document.querySelector('.languages-txt');
const languagesArrowImg = document.querySelector('.languages-arrow').querySelector('img');
const allMenuImg = document.querySelector('.all-menu').querySelector('img');
const logoImg = document.querySelector('.logo').querySelector('img');
const logo = document.querySelector('.logo');

const liGNBs = document.querySelectorAll('.li-gnb');
const liGNB = document.querySelector('.li-gnb');

const subHeaders = document.querySelectorAll('.sub-header');

logo.addEventListener('click', ()=>{
    window.location.href = '/index.html';
});



liGNBs.forEach((item, index) => {
    item.addEventListener('click', ()=>{
        const link = item.querySelector('a');
        window.location.href = link.href;

    })

    item.addEventListener('mouseenter', ()=>{
        subHeaders.forEach( sh =>{
            sh.style.opacity = '0';
            sh.style.zIndex = "30";
        })
        subHeaders[index].style.opacity = '1';
        subHeaders[index].style.zIndex = '40';

    })
});

gnb.addEventListener('mouseover', function() {
    wrapSubHeader.style.display = 'flex';
    wrapHeader.style.backgroundColor ='#fff';
    wrapHeader.style.borderBottom = '1.7px solid #e6e6e6';
    headerBottom.style.height = '19em';
    headerBottom.style.opacity = '1';
    gnb.style.color = '#000';
    languagesTxt.style.color = '#000';
    languagesArrowImg.style.filter = 'invert(0)';
    allMenuImg.style.filter = 'invert(0)';
    logoImg.style.filter = 'none';

    wrapHeader.ontransitionend = ()=>{};
});

classHeader.addEventListener('mouseleave', function() {
    wrapHeader.style.backgroundColor ='#fff0';
    wrapHeader.style.borderBottom = '0';
    headerBottom.style.height = '0';
    headerBottom.style.opacity = '0';
    gnb.style.color = '#fff';
    languagesTxt.style.color = '#fff';
    languagesArrowImg.style.filter = 'invert(100%)';
    allMenuImg.style.filter = 'invert(100%)';
    logoImg.style.filter = 'invert(100%) saturate(0%) brightness(200%) ';

    wrapHeader.ontransitionend = () => {
        wrapSubHeader.style.display = 'none';
    }
});
