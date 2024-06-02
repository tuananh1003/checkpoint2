const checkpoint=document.querySelector('.checkpoint')
fetch('https://6586d405468ef171392ed2c5.mockapi.io/sanpham/checkpoint', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(tasks => {
  // Do something with the list of tasks
  tasks.forEach((hehe) => {
    const product=document.createElement('div')
    product.classList.add('product')
    product.innerHTML=`
    <img src=${hehe.image}>
    <p>${hehe.title}</p>
    <p>${hehe.price}</p>
    `
    checkpoint.appendChild(product)
  });
}).catch(error => {
  // handle error
})