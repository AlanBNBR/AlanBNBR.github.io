// FEITO POR ALAN E JOÃO
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
let isOverlayShowing = false;
let tempoAberto = 3000;
const myImage = document.getElementById('caixa-misteriosa');
const menuIcon = document.getElementById('menu');
const infoIcon = document.getElementById('info');
const collectionIcon = document.getElementById('collection');
const menuLateral = document.getElementById('menu-lateral');
const caixaAberta = "imagens/caixaAberta.png";
const caixaFechada = "imagens/caixalegal.png";
const WIP = "imagens/WIP.png";
const infoIconOG = "imagens/info.png";
const menuIconOG = "imagens/menu.png";
const collectionIconOG = "imagens/colecao.png";

//Lista das imagens que sairão da caixa:
const images = [
    "imagens/itens/1.png",
    "imagens/itens/2.png",
    "imagens/itens/3.png",
    "imagens/itens/4.png",
    "imagens/itens/5.png",
    "imagens/itens/6.png",
    "imagens/itens/7.png",
    "imagens/itens/8.png",
    "imagens/itens/9.png",
    "imagens/itens/10.png",
    "imagens/itens/11.png",
    "imagens/itens/12.png",
    "imagens/itens/13.png",
    "imagens/itens/14.png",
    "imagens/itens/15.png"
];

//Função para escolher uma imagem aleatória da lista
function randomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}


// Caixa aberta e fechada ao clicar
myImage.onclick = () => {
    if (isOverlayShowing) {
        return;
    }
    const randomImg = randomImage();
    const overlayImg = document.createElement('img');
    overlayImg.setAttribute('src', randomImg);
    overlayImg.setAttribute('class', 'overlay-img');
    document.body.appendChild(overlayImg);
    isOverlayShowing = true;
    
    setTimeout(() => {
        overlayImg.classList.add('show');
    }, 100);
    myImage.setAttribute("src", caixaAberta);

    setTimeout(() => {
        myImage.setAttribute("src", caixaFechada);
        overlayImg.classList.add('shrink');
        overlayImg.addEventListener('transitionend', () => {
            document.body.removeChild(overlayImg);
        });
        isOverlayShowing = false;
    }, tempoAberto);
}

menuIcon.onclick = () => {
    menuIcon.setAttribute("src", WIP);
    setTimeout(() => {
        menuIcon.setAttribute("src", menuIconOG);
    }, 1000);
};

infoIcon.onclick = () => {
    infoIcon.setAttribute("src", WIP);
    setTimeout(() => {
        infoIcon.setAttribute("src", infoIconOG)
    }, 1000);
}

collectionIcon.onclick = () => {
    collectionIcon.setAttribute("src", WIP);
    setTimeout(() => {
       collectionIcon.setAttribute("src", collectionIconOG) 
    }, 1000);
}

//Função para cadastrar usuário
function setUsername() {
    const myName = prompt("Por favor, digite seu nome");
    if (!myName) {
        setUsername();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Bem vindo ao caixa misteriosa, ${myName}`;
    }
}

//Botão de alterar usuário
myButton.onclick = () => {
    setUsername();
}

//Caso usuário não esteja cadastrado:
if (!localStorage.getItem("name")) {
    setUsername();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Bem vindo ao caixa misteriosa, ${storedName}`;
}

