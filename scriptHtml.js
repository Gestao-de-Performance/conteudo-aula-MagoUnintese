const loadPostsBtn = document.getElementById('loadPostsBtn');
const postsContainer = document.getElementById('posts-container');

loadPostsBtn.addEventListener('click', fetchPosts);

// 1. Usamos 'async' para poder usar 'await' dentro da função
async function fetchPosts() {
    postsContainer.innerHTML = '<p>Carregando...</p>'; // Feedback para o usuário
    
    try {
        // 2. 'await' pausa a função até que o 'fetch' termine
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5'); // Pegando só 5 posts
        
        // 3. Verifica se a resposta da rede foi OK
        if (!response.ok) {
            throw new Error('Falha ao carregar os dados. Código: ' + response.status);
        }

        // 4. 'await' de novo para converter a resposta em JSON
        const posts = await response.json();
        
        // 5. Chama a função para mostrar os posts na tela
        displayPosts(posts);

    } catch (error) {
        // 6. Captura qualquer erro (de rede, de JSON, etc.)
        console.error('Erro ao buscar posts:', error);
        postsContainer.innerHTML = '<p>Houve um erro ao carregar os posts.</p>';
    }
}

function displayPosts(posts) {
    // Limpa o container (remove o "Carregando...")
    postsContainer.innerHTML = '';
    
    // 7. Loop para criar elementos HTML para cada post
    posts.forEach(post => {
        // Cria um novo 'div' para o post
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        
        // Cria o título
        const titleElement = document.createElement('h3');
        titleElement.textContent = post.title;
        
        // Cria o corpo
        const bodyElement = document.createElement('p');
        bodyElement.textContent = post.body;
        
        // Adiciona título e corpo ao div do post
        postElement.appendChild(titleElement);
        postElement.appendChild(bodyElement);
        
        // Adiciona o post completo ao container na página
        postsContainer.appendChild(postElement);
    });
}