<script>

function getNavElements(){
        const _groups = [], _buttons = [];
        
        document.querySelectorAll("div[class*='NAV_GROUP']")
        .forEach(e=>{_groups.push({
            parent_id: e.parentElement.id,
            order: e.className
        });});
        
        document.querySelectorAll("div[class*='NAV_BUTTON']")
        .forEach(e=>{_buttons.push({
            parent_id: e.parentElement.id,
            order: e.className
        });});
        
        _buttons.sort((a, b)=>{
            if(a.order < b.order)  return -1; 
            if(a.order > b.order)  return 1; 
            return 0;
        });
        _groups.sort((a, b)=>{
            if(a.order < b.order)  return -1;
            if(a.order > b.order)  return 1; 
            return 0;
        });

        const nav_items = [];
        for(let i = 0;  i < _groups.length; i++){
            nav_items.push({
                 btn: _buttons[i].parent_id,
                 grp: _groups[i].parent_id,
                 
                 order_btn: _buttons[i].order,
                 order_grp: _groups[i].order,
             });
        }
        return nav_items;
}

window.onload = function(e){ 
        nav_items = getNavElements();

        function navbarItemOnMouseHover(group_id, btn_id){
            //hide other showing groups
            for(let i=0; i < nav_items.length; i++){
                if(nav_items[i].grp != group_id){
                    let grp = document.getElementById(nav_items[i].grp);
                    let btn = document.getElementById(nav_items[i].btn);
                    grp.setAttribute('style', 'display:none !important;');
                    btn.setAttribute('style','color: white;');
                }
            }
            //show current group
            let group = document.getElementById(group_id);
            let button = document.getElementById(btn_id);

            group.setAttribute('style', 'display:block !important; z-index: 1; top: 80px;');
            button.setAttribute('style', 'color: #ff9900;');
        
        }
        
        
        function navbarItemOnMouseLeave(group_id){
            let target = document.getElementById(group_id);
            target.style.display = 'none';
        }

    
        for(let i=0; i < nav_items.length; i++){
            document.getElementById(nav_items[i].btn).onmouseover = function(){
                navbarItemOnMouseHover(nav_items[i].grp, nav_items[i].btn);
            };
            document.getElementById(nav_items[i].grp).onmouseleave = function(){
                navbarItemOnMouseLeave(nav_items[i].grp);
            };    
        }
    
    
    //onmouseleave
    
}
</script>
