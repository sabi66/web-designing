const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for(a=1;a<=5;a++)
{
const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + a + '.jpg');
  thumbBar.appendChild(newImage);
  newImage.onclick = function(b) 
  	{
    displayedImage.src = b.target.src;
	}	
}
/* Wiring up the Darken/Lighten button */
btn.onclick = function()
{
  const btnClass = btn.getAttribute('class');
  if(btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}
