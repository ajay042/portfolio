let toggleBtn = document.querySelector('#toggleBtn'),
    tabs = document.querySelector('#tabs'),
    tabsLis = document.querySelectorAll('#tabs li a'),
    filterLi = document.querySelectorAll('.filter li'),
    profileBox = document.querySelectorAll('.portfolio-container .box'),
    sections = document.querySelectorAll('.section'),
    home = document.querySelector('[data-sec="home"]');
   
toggleBtn.addEventListener('click', () => {
    tabs.classList.toggle('active');
});


filterLi.forEach((li) => {
    li.addEventListener('click', (e) => {
        filterLi.forEach((li) => {
            li.classList.remove('active');
        });
        li.classList.add('active');
        profileBox.forEach((box) => {
            box.classList.remove('active');
        });
        
    });
});

tabsLis.forEach((tab) => {
    tab.addEventListener('click', (e) => {
        tabsLis.forEach((tab) => {
            tab.classList.remove('active');
        });
        tab.classList.add('active');
        sections.forEach((section) => {
            section.classList.remove('active');
        });
        document.querySelector('#' + e.currentTarget.dataset.sec).classList.add('active');
    });
});

home.addEventListener('click', (e) => {
    sections.forEach((section) => {
        section.classList.remove('active');
    });
    document.querySelector('#' + e.currentTarget.dataset.sec).classList.add('active');
});
