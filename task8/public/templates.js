    function f(){
    let x=document.getElementsByClassName("button_first")[0];
   x.addEventListener("click",(e)=>{
       let a=`
            
       <img class="picture1" src="author_tyan.png">
       <div class="filters">
           <input id=address type="text" class=filter placeholder="Email Address">
           <input id=password type="text" class=filter placeholder="Password">
       </div>
       <button class="log-in">
           Log in
       </button>
   
       `
       let element=document.getElementById("feed");
       element.innerHTML=a;
       let y=document.getElementsByClassName("log-in")[0];
        y.addEventListener("click",(e)=>{
            let a=`
            <div class="filters-container">
            <div class="add">
                <img class="AddMio" src="Mio.png"title="Mio">
    
                <button class="btn addphoto">
                     Add photo
                </button>
            </div>
    
             <div class="filters">
                 <img class="Yui" src="Yui.png" title="Filters">
                 <input id=author type="text" class=filter placeholder="username">
                 <input id=hashtags type="text" class=filter placeholder="#hashtags">
                <input  id=date type="text" class=filter  placeholder="dd.mm.yyyy">
                <button class="find">Find</button>
            </div>
        </div>

<div class="feed" id="feed">

    </div>

    <button class="btn btn-load-more">
        load more
    </button>
               `
               let element=document.getElementsByClassName("main")[0];
                element.innerHTML=a;
                let b=`
                <title>Ginpugramovich</title>
                <link rel="shortcut icon" href="Без названия.jpg" type="image/x-icon">
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                <link href="styles.css" rel="stylesheet">
                <script src="index.js"></script>
                <script src="script.js"></script>
                <script src="templates.js"></script>
                `
                element=document.getElementsByTagName("head")[0];
                element.innerHTML=b;
                b=`
                <div class="Logo">
                <img class="logo" src="logo.png" alt="Logo">
            </div>
    
            <div id="user-info">
                    <img class="user"src="15147547804090.png" title="Username">
            </div>
    
            <button class="btn btn-sign-out">
                <img class="signout" src="011_Veselyiy_rodzher-550x550.png" title="sign out">
            </button>
                `
                element=document.getElementsByClassName("header")[0];
                element.innerHTML=b;
                let x=document.getElementsByClassName("btn btn-load-more")[0];
                x.addEventListener("click",pressLoadMoreButton)
                x=document.getElementsByClassName("btn btn-sign-out")[0];
                x.addEventListener("click",(e)=>{
                  let  b=`
                    <div class="Logo">
                    <img class="logo" src="logo_for_author.png" alt="Logo">
                </div>
                `
                element=document.getElementsByClassName("header")[0];
                element.innerHTML=b;
                b=`
                    <div class="Logo">
                    <img class="logo" src="logo_for_author.png" alt="Logo">
                </div>
                `
                element=document.getElementsByClassName("header")[0];
                element.innerHTML=b;
                b=`
                <title>Ginpugramovich</title>
    <link rel="shortcut icon" href="Без названия.jpg" type="image/x-icon">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="styles_for_author.css" rel="stylesheet">
    <script src="index.js"></script>
    <script src="script.js"></script>
    <script src="templates.js"></script>
            `
            element=document.getElementsByTagName("head")[0];
            element.innerHTML=b;
            b=`
            <div class="feed" id="feed">
            <button class="button_first">
                Go to 
                authorization
            </button>
            </div>
        `
        element=document.getElementsByClassName("main")[0];
        element.innerHTML=b;
        f();
                })
                x=document.getElementsByClassName("find")[0];
                x.addEventListener("click",find)
            })
        })
    }
   
    

