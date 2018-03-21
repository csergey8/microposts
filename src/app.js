import { http } from './http';
import { ui } from './ui';

// Get post on DOMload
document.addEventListener('DOMContentLoaded', getPost);

function getPost() {
    http.get('http://localhost:3000/posts')
        .then(data => ui.showPost(data)) 
        .catch(err => console.log(err));
}