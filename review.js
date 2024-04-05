const articles = [];
const avatar = document.getElementById('img');
const authorContainer = document.getElementById('author');
const jobContainer = document.getElementById('job');
const infoContainer = document.getElementById('info');

function setArticle({ imgSrc, author, job, info }) {
  avatar.src = imgSrc
  avatar.title = author.toUpperCase()
  authorContainer.textContent = author
  jobContainer.textContent = job
  infoContainer.textContent = info
}

function Article(imgSrc, author, job, info) {
  this.imgSrc = imgSrc;
  this.author = author;
  this.job = job;
  this.info = info;
}

articles.push(new Article(
  'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
  'Susan Smith',
  'user 1',
  'hasel e anvnas, voraky lavn e' 
));

articles.push(new Article(
  'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
  'Anna Johnson',
  'user 2',
  'indz shat dur ekav'
));

articles.push(new Article(
  'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
  'Peter Jones',
  'user 3',
  'aweome'
));

articles.push(new Article(
  'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
  'Bill Anderson',
  'user 4',
  'lavn e shat'
));

let curArticle = 0;

const [leftArrow, rightArrow] = document.getElementsByClassName('arrow-btn');

const showCurArticle = () => setArticle(articles[curArticle])

leftArrow.addEventListener('click', () => {
  const prevArticle = curArticle - 1;
  curArticle  = prevArticle >= 0 ? prevArticle : articles.length - 1;
  showCurArticle()
})

rightArrow.addEventListener('click', () => {
  const nextArticle = curArticle + 1;
  curArticle  = nextArticle < articles.length ? nextArticle : 0;
  showCurArticle()
})

document.getElementsByClassName('surprise-btn')[0]
  .addEventListener('click', () => {
    let newArticle = getRandomInt(articles.length, curArticle)
    curArticle =  newArticle
    showCurArticle()
  })

function getRandomInt(max, notEqual) {
  let random =  Math.floor(Math.random() * max)
  return random !== notEqual ? random : getRandomInt(max, notEqual)
}

window.addEventListener('load', () => showCurArticle())