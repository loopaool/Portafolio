let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Desarrollo sitios web y ayudo a crear una experiencia óptima para el usuario.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
