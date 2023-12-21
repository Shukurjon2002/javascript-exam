document.addEventListener('DOMContentLoaded', function() {
   const lastThreePostsContainer = document.getElementById('lastThreePostsContainer');

   const postthreeItem = document.createElement('div');
           postthreeItem.classList.add('post--three-item');

   fetch('http://localhost:3000/posts')
       .then(response => response.json())
       .then(postsData => {
           const lastThreePosts = postsData.slice(-3); // Oxirgi uchta postni olish
           renderLastThreePosts(lastThreePosts);
       });

   function renderLastThreePosts(posts) {
       posts.forEach(post => {

           

           const postItem = document.createElement('div');
           postItem.classList.add('post-item');

           const postImage = document.createElement('img');
           postImage.classList.add('post-image');
           postImage.src = post.image;
           postImage.alt = post.title;

           const postTitle = document.createElement('div');
           postTitle.classList.add('post-title');
           postTitle.textContent = post.title;

           const postDescription = document.createElement('p');
           postDescription.classList.add('post-description');
           postDescription.textContent = post.description;

           const postDetails = document.createElement('div');
           postDetails.classList.add('post-details');
           postDetails.innerHTML = `<p>Author: ${post.author}</p>
                                   <p>Date: ${post.date}</p>
                                   <p class="post-category">Category: ${post.category}</p>`;

          
           postItem.appendChild(postImage);
           postItem.appendChild(postTitle);
           postItem.appendChild(postDescription);
           postItem.appendChild(postDetails);

           postthreeItem.appendChild(postItem)

           lastThreePostsContainer.appendChild(postthreeItem);

           postImage.style.width = '100%'; // Rasmni divning to'la enigacha kengaytirish
           postImage.style.height = 'auto'; // Rasmni to'la eni bo'yicha shakllantirish

       });
   }
});

