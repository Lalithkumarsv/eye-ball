const eyes = document.querySelectorAll('.eye');
    const pupils = document.querySelectorAll('.pupil');

    document.addEventListener('mousemove', (e) => {
      eyes.forEach(eye => {
        const pupil = eye.querySelector('.pupil');
        const rect = eye.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
        const radius = 30;

        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        pupil.style.transform = `translate(${x}px, ${y}px)`;
      });
    });

    function setMood(mood) {
      eyes.forEach(eye => {
        const pupil = eye.querySelector('.pupil');
        switch(mood) {
            case 'normal':
                eye.style.background = '#040303'; 
                pupil.style.width = '30px';
                pupil.style.height = '30px';
                break;
          case 'happy':
            eye.style.background = '#FFD700'; 
            pupil.style.width = '20px';
            pupil.style.height = '20px';
            break;
          case 'sad':
            eye.style.background = '#2196f3'; 
            pupil.style.width = '15px';
            pupil.style.height = '15px';
            break;
          case 'angry':
            eye.style.background = '#f44336';
            pupil.style.width = '40px';
            pupil.style.height = '40px';
            break;
        }
      });
    }
    document.querySelector('.normal-btn').addEventListener('click', () => setMood('normal'));
    document.querySelector('.happy-btn').addEventListener('click', () => setMood('happy'));
    document.querySelector('.sad-btn').addEventListener('click', () => setMood('sad'));
    document.querySelector('.angry-btn').addEventListener('click', () => setMood('angry'));