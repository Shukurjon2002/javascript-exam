// // ALL POSTS 


document.addEventListener('DOMContentLoaded', function() {
  const allPosts = document.getElementById('allPosts');
  searchInput = document.getElementById('searchInput');
  const pagination = document.getElementById('pagination');
  const postsPerPage = 4;

  let currentPage = 1;


  fetch('http://localhost:3000/posts')
      .then(response => response.json())
      .then(postsData => {
          AllPosts(postsData);
      });

  function AllPosts(posts) {
      posts.forEach(post => {
        const postItem = document.createElement('div');
        postItem.classList.add('post-item');
  
        const postImageContainer = document.createElement('div');
        postImageContainer.classList.add('post-image-container');
  
        const postImage = document.createElement('img');
        postImage.classList.add('post-image');
        postImage.src = post.image;
        postImage.alt = post.title;
  
        const postDetailsContainer = document.createElement('div');
        postDetailsContainer.classList.add('post-details-container');
  
        const postAuthor = document.createElement('p');
        postAuthor.classList.add('post-author');
        postAuthor.textContent = `Author: ${post.author}`;
  
        const postDate = document.createElement('p');
        postDate.classList.add('post-date');
        postDate.textContent = `Date: ${post.date}`;
  
        const postCategory = document.createElement('p');
        postCategory.classList.add('post-category');
        postCategory.textContent = `Category: ${post.category}`;
  
        postImageContainer.appendChild(postImage);
  
        postDetailsContainer.appendChild(postAuthor);
        postDetailsContainer.appendChild(postDate);
        postDetailsContainer.appendChild(postCategory);
  
        postItem.appendChild(postImageContainer);
        postItem.appendChild(postDetailsContainer);
  
        allPosts.appendChild(postItem);
      });
  }

  

});


// pagination 







