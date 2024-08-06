const screenMenu = document.querySelector('#screen-menu');
const headerTop = document.querySelector('#header-top');
const headerBottom = document.querySelector('.header-bottom');
const wrapSubHeader = document.querySelector('.wrap-sub-header');
const classHeader = document.querySelector('.class-header');
const gnb = document.querySelector('.gnb');
const languagesTxt = document.querySelector('.languages-txt');
const languagesArrowImg = document.querySelector('.languages-arrow').querySelector('img');
const allMenuImg = document.querySelector('.all-menu').querySelector('img');
const logoImg = document.querySelector('.logo').querySelector('img');
const logo = document.querySelector('.logo');
const logoScreen = document.querySelector('.logo-screen');

const allMenu = document.querySelector('.all-menu');
const closeMenu = document.querySelector('.close-menu');
const root = document.documentElement;

const liGNBs = document.querySelectorAll('.li-gnb');
const liGNB = document.querySelector('.li-gnb');

const subHeaders = document.querySelectorAll('.sub-header');

let preScrollTop = 0;

// 사용자 정의 속성
const topBlur = {
    true: () => {
        console.log('topBlur true');
        headerTop.style.backdropFilter = 'blur(4px)';
        headerTop.style.backgroundColor ='#fff7';
        gnb.style.color = '#000';
        languagesTxt.style.color = '#000';
        languagesArrowImg.style.filter = 'invert(0)';
        allMenuImg.style.filter = 'invert(0)';
        logoImg.style.filter = 'none';
    },
    false: () => {
        console.log('topBlur false');
        headerTop.style.backdropFilter = 'none';
        headerTop.style.backgroundColor ='#fff0';
        gnb.style.color = '#fff';
        languagesTxt.style.color = '#fff';
        languagesArrowImg.style.filter = 'invert(100%)';
        allMenuImg.style.filter = 'invert(100%)';
        logoImg.style.filter = 'invert(100%) saturate(0%) brightness(200%)';
    },
};

const bottomExpand = {
    true: () => {
        console.log('bottomExpand T');
        wrapSubHeader.style.display = 'flex';
        headerTop.style.backgroundColor ='#fff';
        headerTop.style.borderBottom = '1.7px solid #e6e6e6';
        headerBottom.style.height = '19em';
        headerBottom.style.opacity = '1';
        gnb.style.color = '#000';
        languagesTxt.style.color = '#000';
        logoImg.style.filter = 'none';
        languagesArrowImg.style.filter = 'invert(0)';
        allMenuImg.style.filter = 'invert(0)';
        headerTop.ontransitionend = ()=>{};
    },
    false: () => {
        console.log('bottomExpand F');
        headerTop.style.borderBottom = '0';
        headerBottom.style.height = '0';
        headerBottom.style.opacity = '0';
    
        headerTop.dataset.blur === "true" ? topBlur.true() : topBlur.false();
    
        headerTop.ontransitionend = () => {
            wrapSubHeader.style.display = 'none';
        }
    }
};

const topHidden = {
    true: () => {
        if ( (((window.location.pathname) === '/') || ((window.location.pathname) === '/index.html')) ){
            const mainTopHight = document.getElementById("main-top").offsetHeight;
            
            if (scrollTop < mainTopHight/2){
                headerTop.style.top = '0';
            } else{
                if (headerTop.dataset.expand === "true") { headerTop.style.top = '0'}
                else {headerTop.style.top = '-5em'}
            }

            
        } else {
            if (headerTop.dataset.expand === "true") { headerTop.style.top = '0'}
            else {headerTop.style.top = '-5em'}
        } 
        
    },
    false: () => {
        headerTop.style.top = '0';
    },
};

const viewScreenMenu = {
    true: () => {  
        console.log('viewScreenMenu T');
        // headerTop.ontransitionend = ()=>{};
        screenMenu.style.display = "flex";
        screenMenu.style.opacity = '1';
        root.style.overflowY = "hidden";
        screenMenu.ontransitionend = ()=>{
            
        };
        
        // screenMenu.style.display = "flex";
    },
    false: () => {
        console.log('viewScreenMenu F');
        screenMenu.style.opacity = '0';
        root.style.overflowY = "scroll";
        
        screenMenu.ontransitionend = ()=>{
            screenMenu.style.display = "none";
        };
        // screenMenu.style.display = "none";
    }
};


// 속성 변화시 ..
const callback = () => {
    headerTop.dataset.viewscreenmenu === "true" ? viewScreenMenu.true(): viewScreenMenu.false();
    headerTop.dataset.hidden === "true" ? topHidden.true() : topHidden.false();
    headerTop.dataset.blur === "true" ? topBlur.true() : topBlur.false();
    headerTop.dataset.expand === "true" ? bottomExpand.true(): bottomExpand.false();
};

// 속성 변화 감지
const observer = new MutationObserver(callback);
const config = { attributes: true, attributeFilter: ['data-blur', 'data-expand', 'data-transparency', 'data-viewscreenmenu'] };

observer.observe(headerTop, config);


logo.addEventListener('click', ()=>{
    window.location.href = '/index.html';
});

logoScreen.addEventListener('click', ()=>{
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
    headerTop.dataset.expand = "true";
});

classHeader.addEventListener('mouseleave', function() {
    headerTop.dataset.expand = "false";
});

allMenu.addEventListener('click', ()=>{
    headerTop.dataset.viewscreenmenu = true;
});

closeMenu.addEventListener('click', ()=>{
    headerTop.dataset.viewscreenmenu = false;
});

// 스크롤 감지

window.addEventListener('scroll', function() {
    
    let nextScrollTop = $(window).scrollTop();
  
    // 스크롤 다운/업 감지
	if(scrollTop < nextScrollTop) {
      console.log('Down!');
      headerTop.dataset.hidden = "true";
    }
	else {
      console.log('Up!');
      headerTop.dataset.hidden = "false";
    }

	scrollTop = nextScrollTop;

    // main화면 최상단에 스크롤이 있을 경우 블러 제거
    if ( (((window.location.pathname) === '/') || ((window.location.pathname) === '/index.html')) ){
        const mainTopHight = document.getElementById("main-top").offsetHeight;
        
        if (scrollTop < mainTopHight) {
            headerTop.dataset.blur = "false";
            console.log(headerTop.dataset.blur);
        } else {
            headerTop.dataset.blur = "true";
            console.log(headerTop.dataset.blur);
        }
        
    } else {
        headerTop.dataset.blur = "true";
        console.log(headerTop.dataset.blur);
    }
});


// 기본 호출 시 실행

let scrollTop = $(window).scrollTop();

wrapSubHeader.style.display = 'none';

if ( ((window.location.pathname) === '/') || ((window.location.pathname) === '/index.html') ){
    const mainTopHight = document.getElementById("main-top").offsetHeight;

    if( scrollTop < mainTopHight ) {
        headerTop.dataset.blur = "false";
        console.log(headerTop.dataset.blur);
    } else {
        headerTop.dataset.blur = "true";
        console.log(headerTop.dataset.blur);
    }

} else {
    headerTop.dataset.blur = "true";
    console.log(headerTop.dataset.blur);
}

