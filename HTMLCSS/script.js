window.dom=(function(){

var user="AG";

if (!user) {
    let button = document.createElement("button")
    button.classList.add("btn");
    button.classList.add("btn-sign-in");
    button.innerText = "sign in";
    document.querySelector(".add").remove();
    document.querySelector(".btn-sign-out").replaceWith(button);
} 

    return {
        posts: 0,

        showPosts(posts) {
            let elements = document.getElementById('feed')
            for (post of posts) {
                let element = document.createElement("div");
                element.id = post.id;
                element.classList.add("posts");
                let a = `
            <div class="feed" id="feed">

            <div class="post"> 

<div class="post-toolbar"> 

<div class="post-upload-data"> 
${post.createdAt.getDate()}.${post.createdAt.getMonth() + 1}.${post.createdAt.getFullYear()}
</div> 
<i class="like-icon material-icons">favorite_border</i> 
<i class="edit-icon material-icons">mode_edit</i> 
<div class="post-username">${post.author}</div> 
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
            dom.page = 0;
            let elements = document.getElementById('feed')
            while (elements.firstChild) {
                elements.removeChild(elements.firstChild);
            }
            this.showPosts(this.getFilters())
        },

        getFilters() {
            let authors = document.getElementById('author').value
            let date = document.getElementById('date').value
            let hashtags = document.getElementById('hashtags').value
            let filter = {}
            if (authors) filter.author = authors;
            if (date) {
                let date_el = date.split(/\D/);
                filter.Date = new Date(date_el[0], date_el[1], date_el[2], date_el[3], date_el[4]);
            }
            if (hashtags) { 
                filter.hashtags = hashtags.split(',');
            }
            let offset = 0
            let count = dom.posts
            return photoPosts.getPhotoPosts(dom.posts, 5, filter);
        },

        loadMorePosts() { 
            this.posts += 10;
            this.showPosts(this.getFilters())
        },

        editPhotoPost(id, post) {
            let oldPost = document.getElementById(id);
            if (oldPost) {
                let element = document.createElement("div");
                element.id = post.id;
                element.classList.add("post");
                let a = `
            <div class="feed" id="feed">

            <div class="post"> 

<div class="post-toolbar"> 

<div class="post-upload-data"> 
${post.createdAt.getDate()}.${post.createdAt.getMonth()}.${post.createdAt.getFullYear()}
</div> 
<i class="like-icon material-icons">favorite_border</i> 
<i class="edit-icon material-icons">mode_edit</i> 
<div class="post-username">${post.author}</div> 
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
                oldPost.replaceWith(element);
            }
        },
        
        removePhotoPost(id) {
            let element = document.getElementById(id);
            if (element) { 
                element.remove();
                return true;
            }
            return false;
        },

        HTMLforUser(){
                let elements = document.getElementById('user-info')
                let a=`
                <div id="user-info">
                <img class="user"src="15147547804090.png" title="Username">
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

function Username(){
    dom.HTMLforUser();
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
    if (photoPosts.editPhotoPost(id,  photoPosts.getPhotoPost(id))) {
        dom.editPhotoPost(id, post);
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

window.addEventListener('load', () => {
    Username();
    showPosts();
    let post1 = {
        id:'',
        description: 'Me',
        createdAt: new Date(2021, 2, 11, 22, 11),
        author: 'Gomel',
        photoLink: 'https://www.otpusk.by/upload/resize_cache/iblock/a69/600_400_2/nasledie-gomelskoy-zemli.jpg',
        hashtags: ['#Gomel'],
        likes: ['Gimpukisreal']
    }
    addPhotoPost(post1);
    removePhotoPost('20');
    pressLoadMoreButton()
})