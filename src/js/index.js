 import '../css/styles.scss';
 import img from '../assets/doguinho.jpg';
 
 const textComponent = () => {
     const elH1 = document.createElement('h1');
     elH1.innerHTML = 'Olá mundo!';
     elH1.classList.add("title");
     return elH1;
 }

 const imgComponent = () => {
     const elImg = new Image(300, 150);
     elImg.src = img;
     return elImg;
 }

 document.body.appendChild(textComponent());
 document.body.appendChild(imgComponent());