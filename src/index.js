const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
   
      card.classList.toggle('turned');
    card.classList.toggle('blocked');
    console.log('Card clicked: ', card);
  
      
      // TODO: write some code here
      console.log(`Card clicked: ${card}`);
      if (!card.classList.contains('blocked')) {
        card.classList.toggle('turned');


        const pickedCards = document.querySelectorAll('.turned');

        if (pickedCards.length === 2) {
          const [card1, card2] = pickedCards;

          const isPair = checkIfPair(card1.dataset.cardName, card2.dataset.cardName);
          if (isPair) {
            card1.classList.add('blocked');
            card2.classList.add('blocked');
            document.getElementById('pairs_guessed').textContent = Number(document.getElementById('pairs_guessed').textContent) + 1;
          } else {
            setTimeout(() => {
              card1.classList.toggle('turned');
              card2.classList.toggle('turned');
            }, 1000);
          }

          document.getElementById('pairs_clicked').textContent = Number(document.getElementById('pairs_clicked').textContent) + 1;
          pickedCards.forEach(card => card.classList.remove('turned'));

          if (checkIfFinished()) {
            alert('You won!!!');
          }
        }
      }

    });
  });
});