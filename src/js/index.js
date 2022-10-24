 const textComponent = () => {
     const elH1 = createElement('h1');
     elH1.innerHTML = 'Olá mundo';
     return elH1;
 }

 document.body.appendChild(textComponent());