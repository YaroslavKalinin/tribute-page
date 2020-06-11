function changeTab(target){
    const targetTab = document.getElementById(target);
    const currentTab = document.querySelector('.active');
    /* do not transition cause you are already in target tab */
    if(targetTab === currentTab) return;
    else {
        currentTab.classList.remove('active');
        targetTab.classList.add('active');
    }
    
}



/* subscribe handlers to all nav-links */
document.querySelectorAll(".nav-item").forEach((item) => {
    const target = item.dataset.target;
    item.addEventListener('click', (e) => {
            document.querySelector('.current').classList.remove('current');
            e.target.classList.add('current');
            changeTab(target);
        }
    );
});