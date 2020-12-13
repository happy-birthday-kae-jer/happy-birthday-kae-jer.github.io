const flip_cards = document.querySelectorAll('.flip-card-inner');

flip_cards.forEach((el) => {
  const flip_card_back = el.querySelector('.flip-card-back');
  el.addEventListener('click', () => {
    console.log(flip_card_back.offsetHeight);
    if (el.style.transform === 'rotateY(180deg)') {
      el.style.transform = 'rotateY(0)';
      el.parentNode.style.height = '200px';
    } else {
      el.style.transform = 'rotateY(180deg)';
      console.log(flip_card_back.offsetHeight);
      el.parentNode.style.height = flip_card_back.offsetHeight + 'px';
    }
  });
});
