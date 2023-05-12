const moveRight = (element) => {
    const parent = element.parentNode;
    const parentWidth = parent.clientWidth;
    const elementWidth = element.clientWidth;
    const currentLeft = parseInt(element.style.left) || 0;
    const newLeft = currentLeft + 10;
    if (newLeft + elementWidth <= parentWidth) {
      element.style.left = newLeft + 'px';
      setTimeout(() => moveRight(element), 100);
    }
  };

const child = document.getElementById('child');
moveRight(child);
  