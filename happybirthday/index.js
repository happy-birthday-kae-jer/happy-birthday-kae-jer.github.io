const data = [data1, data2, data3, data4, data5];
const col1 = document.querySelector('#col1');
const col2 = document.querySelector('#col2');
const col3 = document.querySelector('#col3');
const col4 = document.querySelector('#col4');
const col5 = document.querySelector('#col5');

const cols = [col1, col2, col3, col4, col5];
for (let idx = 0; idx <= 4; idx++) {
  let html = '';
  for (const card_info of data[idx]) {
    if (card_info.avatar) {
      html += `<div class="card_wrap">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img class="avatar" src=${card_info.avatar} alt="Avatar" />
                  </div>
                  <div class="flip-card-back">
                  ${card_info.words}
                  </div>
                </div>
              </div>`;
    } else {
      html += `<div class="image-card">
                <img class="pic" src="${card_info.pic}" alt="" />
              </div>`;
    }
    cols[idx].innerHTML = html;
  }
}

const flip_cards = document.querySelectorAll('.flip-card-inner');
const image_cards = document.querySelectorAll('.flip-card-inner');

flip_cards.forEach((el) => {
  const flip_card_back = el.querySelector('.flip-card-back');
  el.addEventListener('click', () => {
    console.log(flip_card_back.offsetHeight);
    if (el.style.transform === 'rotateY(180deg)') {
      el.style.transform = 'rotateY(0)';
      el.parentNode.style.height = '200px';
    } else {
      el.style.transform = 'rotateY(180deg)';
      el.parentNode.style.height = flip_card_back.offsetHeight + 'px';
    }
  });
});
