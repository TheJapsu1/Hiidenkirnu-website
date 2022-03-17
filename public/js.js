window.onscroll = function() {
    var pageOffset = document.documentElement.scrollTop || document.body.scrollTop,
        btn = document.getElementById('totop');
    if (btn) 
        {   
            btn.style.transform = pageOffset > 450 ? 'rotate(0deg)' : 'rotate(-180deg)';
            btn.style.opacity = pageOffset > 450 ? '1' : '0';
            if(btn.style.opacity > 0){
                btn.style.visibility = 'visible';
            }else
            {
                btn.style.visibility = 'hidden';
            }
        }
};