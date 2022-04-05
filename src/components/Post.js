

class Post{
    constructor() {
        this.post_timeline = document.getElementById('post-timeline-load')
    }

     showPosts(posts) {
        
        let post = ''
        posts.reverse().map((data, index) => {

            let { id, name, user_photo, content, post_photo } = data
            
            post += `
            <div class="card shadow my-3">
                <div class="card-body">

                    <div class="user-timeline-info d-flex justify-content-between">
                        
                        <div class="user-info d-flex align-items-center">
                            <img  src="${user_photo}" alt="">
                            <h5 class="ms-3">${name}</h5>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                        </svg>

                    </div>
                    <div class="user-post-content">
                        <p>${content}</p>
                        <img src="${post_photo}" alt="">
                    </div>

                </div>
            </div>       
            
            `
        })
         
         this.post_timeline.innerHTML = post
    }

}
let post = new Post
export default post  