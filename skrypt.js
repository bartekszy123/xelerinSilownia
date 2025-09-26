function highlightArea(x1, y1, x2, y2) {
    const box = document.getElementById('highlightBox');
    box.style.left = x1 + 'px';
    box.style.top = y1 + 'px';
    box.style.width = (x2 - x1) + 'px';
    box.style.height = (y2 - y1) + 'px';
    box.style.display = 'block';
  }

     function showHover(x1, y1, x2, y2) {
    const box = document.getElementById('hoverBox');
    box.style.left = x1 + 'px';
    box.style.top = y1 + 'px';
    box.style.width = (x2 - x1) + 'px';
    box.style.height = (y2 - y1) + 'px';
    box.style.display = 'block';
  }

  function hideHover() {
    document.getElementById('hoverBox').style.display = 'none';
  }