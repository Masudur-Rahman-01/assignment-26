
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import 'bootstrap/js/dist/modal'
import 'bootstrap/js/dist/alert'
import axios from 'axios'
import Post from './components/Post'
import Alert from './components/Alert'

//Dom loading operations
document.addEventListener('DOMContentLoaded', getPosts)


// To make various action
const msg = document.getElementById('msg')

//Get all posts from axios
function getPosts() {
    axios.get('http://localhost:5050/posts').then(res => Post.showPosts(res.data))
}

let form_info = document.getElementById('create-post-form')
    form_info.addEventListener('submit', function(e) {
        e.preventDefault()


    let form_data = new FormData(e.target)
    
    let data = Object.fromEntries(form_data.entries())
    
       
    if (data.name == '' || data.user_photo == '' || data.content == '') {
        
        msg.innerHTML = Alert.danger('All fields are required')

    } else{
        axios.post('http://localhost:5050/posts', {
            name: data.name,
            user_photo: data.uphoto,  
            content: data.content,
            post_photo: data.photo,
            
        }).then(res => {  
            
            form_info.reset()
            getPosts()
            msg.innerHTML = Alert.success('Post created successfully')
            
        })
     
    }
    
}
)

