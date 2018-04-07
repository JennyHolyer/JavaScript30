const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return;

  key.classList.add('playing')

  audio.currentTime = 0;
  audio.play();


};

const findCodeAndPlay = (e) => {
  let el;
  console.log('e', e);
  console.log('e.target.parentElement',e.target.parentElement);
  if (e.target.hasAttribute('data-key')) el = e.target;
  else el = e.target.parentElement;
  
  const keyCode = el.getAttribute('data-key');
  playSound({ keyCode });
}

const removeTransition = (e) => {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('click', findCodeAndPlay);
  key.addEventListener('transitionend', removeTransition);
});
window.addEventListener('keydown', playSound);