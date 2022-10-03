var images;


images = ['https://media1.giphy.com/media/o75ajIFH0QnQC3nCeD/200.webp?cid=ecf05e4716u45gxbd7vpi1gwz1p28uc0njp75rwn923cglv0&rid=200.webp&ct=g', 'https://media0.giphy.com/media/wrl9kk3w9Y3ME4tCMT/giphy.webp?cid=ecf05e47fpefsgo3h28yorgdrvear8kvfjru4xei718mtht9&rid=giphy.webp&ct=g', 'https://media1.giphy.com/media/CyoQdbc7FHqqTpkSPI/200.webp?cid=ecf05e47fpefsgo3h28yorgdrvear8kvfjru4xei718mtht9&rid=200.webp&ct=g'];

let element_pics = document.getElementById('pics');
images.push(images[0]);
element_pics.setAttribute("src", images.shift());


document.getElementById('previous').addEventListener('click', (event) => {
  let element_pics2 = document.getElementById('pics');
  images.unshift(images.slice(-1)[0]);
  element_pics2.setAttribute("src", images.pop());

});

document.getElementById('next').addEventListener('click', (event) => {
  let element_pics3 = document.getElementById('pics');
  images.push(images[0]);
  element_pics3.setAttribute("src", images.shift());

});