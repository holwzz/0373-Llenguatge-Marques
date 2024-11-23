function showIframe(index) {

    const iframes = document.querySelectorAll('.sketchfab-embed-wrapper');
    iframes.forEach(iframe => iframe.style.display = 'none');
  
    const iframeToShow = document.getElementById(`iframe${index}`);
    if (iframeToShow) {
      iframeToShow.style.display = 'flex';
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    const background = document.querySelector('.background');
  
    function createStar() {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      const size = Math.random() * 3 + 1; // Tamaños aleatorios entre 1px y 4px
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.animationDuration = `${Math.random() * 5 + 5}s`;
      background.appendChild(star);
  
      setTimeout(() => {
        star.remove();
      }, 10000);
    }
  
    setInterval(createStar, 100);
  });

  document.addEventListener('DOMContentLoaded', function() {
    const mainTitle = document.querySelector('.main-title');
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffffff'];
    let colorIndex = 0;
  
    function changeColor() {
      mainTitle.style.color = colors[colorIndex];
      colorIndex = (colorIndex + 1) % colors.length;
    }
  
    setInterval(changeColor, 3000); // Cambia de color cada 3 segundos
  });

  document.addEventListener('DOMContentLoaded', function() {
    const timerElement = document.getElementById('timer');
    let seconds = 0;
  
    function updateTimer() {
      seconds++;
      const minutes = Math.floor(seconds / 60);
      const displaySeconds = seconds % 60;
      timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(displaySeconds).padStart(2, '0')}`;
    }
  
    setInterval(updateTimer, 1000); // Actualiza el contador cada segundo
  });

  function showText(container) {
    const image = container.querySelector('.gallery-image');
    const text = container.querySelector('.hidden-text');
    image.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    image.style.color = 'black';
    text.style.display = 'block';
  }
  
  function hideText(container) {
    const image = container.querySelector('.gallery-image');
    const text = container.querySelector('.hidden-text');
    image.style.backgroundColor = '';
    image.style.color = '';
    text.style.display = 'none';
  }

  function openPasswordForm() {
    document.getElementById('passwordModal').style.display = 'block';
  }
  
  function closePasswordForm() {
    document.getElementById('passwordModal').style.display = 'none';
  }
  
  function validatePassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');
  
    if (password === confirmPassword) {
      message.style.color = 'green';
      message.textContent = 'Password correcta!';
      return true;
    } else {
      message.style.color = 'red';
      message.textContent = 'La password no es igual, torna a intentar';
      return false;
    }
  }
  
  window.onclick = function(event) {
    const modal = document.getElementById('passwordModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  }