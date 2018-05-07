let user;
    function f(){
    if(localStorage.getItem("posts")===null){
        localStorage.setItem("posts", JSON.stringify(photoPosts));
        }
    let x=document.getElementsByClassName("button_first")[0];
    x.addEventListener("click",(e)=>{
       let a=`
            
       <img class="picture1" src="author_tyan.png">
       <div class="filters">
           <input id="address" type="text" class=filter placeholder="Email Address">
           <input id="password" type="text" class=filter placeholder="Password">
       </div>
       <button class="log-in">
           Log in
       </button>
   
       `
       let element=document.getElementById("feed");
       element.innerHTML=a;
       a=`

       <button class="btn btn-sign-out">
            <img class="signout" src="signin.png" title="sign out">
        </button>

        <div class="Logo">
            <img class="logo" src="logo_for_author.png" alt="Logo">
        </div>

        `
        element=document.getElementsByClassName("header")[0];
        element.innerHTML=a;
       let y=document.getElementsByClassName("log-in")[0];
       y.addEventListener("click",k);
   })
}
function k(){
    photoPosts=JSON.parse(localStorage.getItem("posts"));
    let addr=document.getElementById("address");
    if (addr){
        user=addr.value;
    }
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
        <script src="events.js"></script>
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
        Username(user);
        Clear();
        showPosts();
        let x=document.getElementsByClassName("btn btn-load-more")[0];
        x.addEventListener("click",pressLoadMoreButton)
        x=document.getElementsByClassName("btn btn-sign-out")[0];
        x.addEventListener("click",w);
        x=document.getElementsByClassName("find")[0];
        x.addEventListener("click",find)
        x=document.getElementsByClassName("btn addphoto")[0];
        x.addEventListener("click",(e)=>{
            Username(user);
            let a=`
            <div class="feed">

    <img class="picture1" src="add1.png" >
    
    <div class="addchange">
    <input id="link" type="text" class=date placeholder="link">
    <input id="description" type="text" class=date placeholder="description">
    <input  id="hashtags" type="text" class=date  placeholder="#hashtags">
    <button class="addph">
    Add
    </button>
    </div>
    
    <img class="picture2" src="add2.png">

</div>
`
let x=document.getElementsByClassName("main")[0];
x.innerHTML=a;
a=`
<title>Ginpugramovich:Add</title>
<link rel="shortcut icon" href="Без названия.jpg" type="image/x-icon">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="styles_for_add.css" rel="stylesheet">
<script src="index.js"></script>
<script src="script.js"></script>
<script src="events.js"></script>
`
x=document.getElementsByTagName("head")[0];
x.innerHTML=a;
a=`
<div class="Logo">
    <img class="logo" src="logo_for_add.png" alt="Logo">
</div>

<div id="user-info">
        <img class="user"src="15147547804090_for_add.png" title="Username">
</div>

<button class="btn btn-sign-out">
    <img class="signout" src="011_Veselyiy_rodzher-550x550.png" title="sign out">
</button>
`
x=document.getElementsByClassName("header")[0];
x.innerHTML=a;
Username(user);
x=document.getElementsByClassName("btn btn-sign-out")[0]
x.addEventListener("click",w);
x=document.getElementsByClassName("addph")[0];
x.addEventListener("click",(e)=>{
    let link = document.getElementById("link").value 
    let description = document.getElementById("description").value 
    let hashtags = document.getElementById("hashtags").value 
    let tags=hashtags.split(','); 
    let author=returnUser()
    let post1 = {
        id:'',
        description: description,
        createdAt: new Date(2026, 2, 5, 22, 11),
        author: user,
        photoLink: link,
        hashtags: [],
        likes: []
    }
    k();
    addPhotoPost(post1);
    localStorage.setItem("posts", JSON.stringify(photoPosts));
})
localStorage.setItem("posts", JSON.stringify(photoPosts));
        })
    }
    function w(){
            Clear();
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
    }
    window.addEventListener('load', f)
    

