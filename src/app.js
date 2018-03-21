import { http } from './http';
import { ui } from './ui';

// Get post on DOMload
document.addEventListener('DOMContentLoaded', getPost);

document.querySelector('.post-submit').addEventListener('click', submitPost);

function getPost() {
    http.get('http://localhost:3000/posts')
        .then(data => ui.showPost(data)) 
        .catch(err => console.log(err));
}

function submitPost() {
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;
    
    const data = {
        title,
        body
    }
    
    http.post('http://localhost:3000/posts', data)
        .then(data => {
            ui.showAlert('Post added', 'alert alert-success');
            ui.clearFields()
            getPost();
        })
        .catch(err => console.log(err));
}