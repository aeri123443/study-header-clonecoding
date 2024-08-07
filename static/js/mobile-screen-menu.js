// 클릭 감지 요소
const wrapMobileMenu1st = document.querySelectorAll('.wrap-mobile-menu-1st');
const mobileMenu2ndItem = document.querySelectorAll('.mobile-menu-2nd-item');
let openedMobileMenu2ndItemEles = [];
// const wrapMobileMenu3rd = document.querySelectorAll('.wrap-mobile-menu-3rd');
const wrapMobileMenu2nd = document.querySelectorAll('.wrap-mobile-menu-2nd');

// 숨길 요소
const sectionMobileMenu2nd = document.getElementsByClassName('section-mobile-menu-2nd');
const wrapMobileMenu3rd = document.getElementsByClassName('wrap-mobile-menu-3rd');

// 색상 변경 요소
const mobileMenu1stItem = document.getElementsByClassName('mobile-menu-1st-item');
const mobileMenu1stToggle = document.getElementsByClassName('mobile-menu-1st-toggle'); //.querySelector('img');

HTMLCollection.prototype.forEach = Array.prototype.forEach;


wrapMobileMenu1st.forEach((item_1st, index_1st) => {
    item_1st.addEventListener('click', () => {

        // 클릭한 요소가 열려있으면 닫음
        if (item_1st.dataset.opened === "true") {
            item_1st.dataset.opened = "false";
            sectionMobileMenu2nd[index_1st].style.display = "none";
            mobileMenu1stItem[index_1st].classList.remove("close-toggle");
            mobileMenu1stToggle[index_1st].querySelector('img').classList.remove("close-toggle");

        } else {
            wrapMobileMenu1st.forEach((item_1st_, index_1st_) => {
                // 클릭할 요소가 닫혀있으면, 해당되는 요소를 열고 다른 모든 요소는 닫음
                if(index_1st_===index_1st) {
                    item_1st_.dataset.opened = "true";
                    sectionMobileMenu2nd[index_1st_].style.display = "block";
                    mobileMenu1stItem[index_1st_].classList.add("close-toggle");
                    mobileMenu1stToggle[index_1st_].querySelector('img').classList.add("close-toggle");
                    
                } else {
                    item_1st_.dataset.opened = "false";
                    sectionMobileMenu2nd[index_1st_].style.display = "none";
                    mobileMenu1stItem[index_1st_].classList.remove("close-toggle");
                    mobileMenu1stToggle[index_1st_].querySelector('img').classList.remove("close-toggle");
                }
            })
        }
    })
});


wrapMobileMenu2nd.forEach((item_2nd, index_2nd) => {
    item_2nd.addEventListener('click', () => {
        
        // 클릭한 요소가 열려있으면 닫음
        if (item_2nd.dataset.opened === "true") {
            item_2nd.dataset.opened = "false";
            const tem_ele = item_2nd.getElementsByClassName("wrap-mobile-menu-3rd")[0]
            if (tem_ele) {
                tem_ele.style.display = "none";
            } 
            
        } else {
            wrapMobileMenu2nd.forEach((item_2nd_, index_2nd_) => {
                const tem_ele = item_2nd_.getElementsByClassName("wrap-mobile-menu-3rd")[0]
                // 클릭할 요소가 닫혀있으면, 해당되는 요소를 열고 다른 모든 요소는 닫음
                if(index_2nd_===index_2nd) {
                    item_2nd_.dataset.opened = "true";
                    if (tem_ele) {
                        tem_ele.style.display = "block";
                    } 

                } else {
                    item_2nd_.dataset.opened = "false";
                    if (tem_ele) {
                        tem_ele.style.display = "none";
                    } 

                }
            })
        }
    });
});