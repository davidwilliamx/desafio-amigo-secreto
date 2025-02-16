//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Campo input name
const inputName = document.querySelector('.input-name');
// Botão adicionar amigo
const addButton = document.querySelector('.button-add');
// Botão sortear amigo
const drawButton = document.querySelector('.button-draw');
// Botão resetar jogo
const resetButton = document.querySelector('.button-reset');
// Seleciona a <ul> correta para a lista de amigos
const friendListUl = document.getElementById('listaAmigos');
// Seleciona a <ul> correta para o resultado
const resultUl = document.getElementById('resultado');

// Array para armazenar os nomes dos amigos
const friends = [];

function adicionarAmigo() {
    // Obtém o valor do input e remove espaços em branco extras
    const friendName = inputName.value.trim();

    if (friendName === '') {
        // Validação: Alerta se o campo estiver vazio
        alert('Por favor, digite um nome válido.');
        // Sai da função se o nome for inválido
        return;
    };

    // Adiciona o nome ao array de amigos
    friends.push(friendName);
    // Atualiza a lista de amigos na tela
    updateFriendList();
    // Limpa o campo do input após adicionar o nome
    inputName.value = '';
    // Devolve o foco para o campo de input para facilitar a digitação do próximo nome
    inputName.focus();
};

function updateFriendList() {
    // Limpa a lista de amigos na tela antes de atualizar
    friendListUl.innerHTML = '';

    friends.forEach(friend => {
        // Cria um elemento <li> para cada amigo
        const listItem = document.createElement('li');
        // Capitalização da primeira letra do nome:
        const capitalizedFriendName = friend.charAt(0).toUpperCase() + friend.slice(1);
        // Define o texto do <li> com o nome do amigo
        //listItem.textContent = friend;
        listItem.textContent = capitalizedFriendName;
        // Adiciona o <li> à <ul> da lista de amigos
        friendListUl.appendChild(listItem);
    });
};

function sortearAmigo() {
    if (friends.length === 0) {
        // Alerta se a lista estiver vazia
        alert('Adicione amigos à lista antes de sortear.');
        // Sai da função se não houver amigos na lista
        return;
    };

    // Gera um índice aleatório
    const randomIndex = Math.floor(Math.random() * friends.length);
    // Obtém o nome do amigo sorteado
    const amigoSorteado = friends[randomIndex];

    // Exibe o resultado do sorteio
    displayResult(amigoSorteado);
};

function displayResult(amigoSorteado) {
    resultUl.innerHTML = '';

    // Cria um <li> para o título do resultado
    const resultTitle = document.createElement('li');
    // Define o título
    resultTitle.textContent = 'O amigo secreto sorteado é: ';
    // Adiciona uma classe para estilização
    resultTitle.classList.add('result-title');

    // Cria um <li> para o nome sorteado
    const resultName = document.createElement('li');
    // Define o nome sorteado
    resultName.textContent = amigoSorteado;
    // Adiciona uma classe para estilização
    resultName.classList.add('result-name');

    // Adiciona o título à <ul> de resultados
    resultUl.appendChild(resultTitle);
    // Adiciona o nome sorteado à <ul> de resultados
    resultUl.appendChild(resultName);
};

function resetGame() {
    // Limpa o array de amigos (esvazia o array)
    friends.length = 0; 
    // Atualiza a lista de amigos na tela para refletir o array vazio
    updateFriendList(); 
    // Limpa a área de resultados do sorteio
    resultUl.innerHTML = ''; 
    // Limpa o campo de input de nome
    inputName.value = ''; 
    // Devolve o foco para o campo de input para o usuário começar a digitar novamente
    inputName.focus(); 
};

// Atribui a função adicionarAmigo ao evento de clique do botão "Adicionar"
addButton.onclick = adicionarAmigo;
// Atribui a função sortearAmigo ao evento de clique do botão "Sortear Amigo"
drawButton.onclick = sortearAmigo;
// Atribui a função resetGame ao evento de clique do botão "Reiniciar Jogo"
resetButton.onclick = resetGame; 


// Adiciona um event listener quando apertar enter a função adicionarAmigo é acionada
inputName.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});
