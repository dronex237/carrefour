const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const menuList = document.getElementById('menu-list');
    const croix = document.querySelector('.croix');
    const menu = document.querySelector('.menu');
    const dropdownLinks = document.querySelectorAll('#menu-list > li > a');

    menuIcon.addEventListener('click', () => {
        menuList.classList.add('active');
        menu.style.display = 'none';
        croix.style.display = 'block';
    });

    closeIcon.addEventListener('click', () => {
        menuList.classList.remove('active');
        croix.style.display = 'none';
        menu.style.display = 'block';
    });

    dropdownLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const submenu = link.nextElementSibling;
            if (submenu && submenu.tagName === 'UL') {
                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            }
        });
    });