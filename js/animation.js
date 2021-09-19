// name animation // 
anime({
    targets: '#tester path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInElastic(1, 0.9)',
    duration: 2500,
    delay: function(el, i) { return i * 200 },
    direction: 'alternate',
    loop: false
  });
  
  //  timeout for name animation 
  
  setTimeout(() => {
    let aaa = document.querySelector('#tester');
  aaa.classList.add('add');
  }, 9000);
  
  setTimeout(() => {
    let aaa = document.querySelector('#tester');
  aaa.classList.add('addtwo');
  }, 9000);