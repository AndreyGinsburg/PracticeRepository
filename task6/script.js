window.dom=(function(){ 
    
    return { 
    posts_show: 0, 
    
    showPosts(posts) { 
    let elements = document.getElementById('feed') 
    for (post of posts) { 
    let element = document.createElement("div"); 
    element.id = post.id; 
    element.classList.add("posts"); 
    let a = ` 
    <div class="feed" id="feed"> 
    
    <div class="post" id=${post.id}> 
    
    <div class="post-toolbar"> 
    
    <div class="post-upload-data" id= ${post.createdAt}>
    ${new Date(post.createdAt).getDate()}.${new Date(post.createdAt).getMonth() + 1}.${new Date(post.createdAt).getFullYear()} 
    </div> 
    <i class="like-icon material-icons">favorite_border</i> 
    <i class="edit-icon material-icons">mode_edit</i> 
    <div class="post-username" id=${post.author}>${post.author}</div> 
    <i class="delete-icon material-icons">delete</i> 
    
    </div> 
    
    <img class ="posts" src=${post.photoLink} alt="photo"> 
    
    <div class="post-info"> 
    
    <div class="description"> 
    ${post.description} 
    </div> 
    
    <div class="hashtags"> 
    ${post.hashtags.join(" ")} 
    </div> 
    
    </div> 
    </div> 
    
    </div>` 
    element.innerHTML = a; 
    elements.appendChild(element); 
    } 
    }, 
    
    applyFilters() { 
        this.clearPosts();
        this.Clear();
        this.showPosts(this.getFilters());
    }, 

    clearPosts() {
        let a=`
        `
        let element=document.getElementsByClassName("feed")[0];
        element.innerHTML=a;
    },
    
    getFilters() { 
    let authors = document.getElementById("author").value 
    let date = document.getElementById("date").value 
    let hashtags = document.getElementById("hashtags").value 
    let filter = {} 
    if (authors) filter.author = authors; 
    if (date) { 
    let date_el = date.split('.'); 
    filter.Date = new Date(date_el[2], date_el[1], date_el[0]); 
    } 
    if (hashtags) { 
    filter.hashtags = hashtags.split(' '); 
    } 
    let count = dom.posts_show; 
    return photoPosts.getPhotoPosts(dom.posts_show, 5, filter); 
    }, 

    Clear(){
        this.posts_show=0;
    },
    
    loadMorePosts() { 
    this.posts_show += 5; 
    this.showPosts(this.getFilters()) 
    }, 
    
    removePhotoPost(id) { 
    let element = document.getElementById(id); 
    if (element) { 
    element.remove(); 
    return true; 
    } 
    return false; 
    }, 
    
    HTMLforUser(user){ 
    let elements = document.getElementById('user-info') 
    let a=` 
    <div id="user-info"> 
    <p id="textuser">${user}</p> 
    </div> 
    ` 
    let element = document.createElement("div"); 
    element.innerHTML = a; 
    element.classList.add("user-info"); 
    elements.appendChild(element); 
    }, 
    } 
    })(); 
    
    function Username(user){ 
    dom.HTMLforUser(user); 
    } 
    
    function Clear(){
        dom.Clear();
    }

    function find(){
        Clear();
        dom.applyFilters();
    }

    function returnUser(){
        return dom.user;
    }

    function showPosts() { 
    dom.showPosts(dom.getFilters()); 
    } 
    
    function addPhotoPost(post) { 
    if (photoPosts.addPhotoPost(post)) { 
    dom.applyFilters(); 
    return true; 
    } 
    else return false; 
    } 
    
    function editPhotoPost(id, post) { 
    if (photoPosts.editPhotoPost(id, photoPosts.getPhotoPost(id))) { 
    dom.removePhotoPost(id); 
    if (photoPosts.addPhotoPost(post)) 
    dom.applyFilters(); 
    return true; 
    } 
    return false; 
    } 
    
    function removePhotoPost(id) { 
    if (photoPosts.removePhotoPost(id)) { 
    if (dom.removePhotoPost(id)) { 
    dom.applyFilters(); 
    } 
    return true; 
    } 
    return false; 
    } 
    
    function pressLoadMoreButton() { 
    dom.loadMorePosts(); 
    } 
   