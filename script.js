function changeColor(elementList, colorList) {
  for (let i = 0; i < elementList.length; i += 1) {
    elementList[i].style.backgroundColor = colorList[i];
  }
}
function mountRgbColor(colorList) {
  const color = [];
  for (let i = 0; i < colorList.length; i += 1) {
    color.push(`rgb(${colorList[i][0]}, ${colorList[i][1]}, ${colorList[i][2]} )`);
  }
  return color;
}
function generateRandomNumber(limit) {
  return Math.floor(Math.random() * limit);
}
function colorAslist() {
  return [generateRandomNumber(254), generateRandomNumber(254), generateRandomNumber(254)];
}
function mountBoard(size) {
  const board = document.getElementById('pixel-board');
  for (let index = 0; index < size; index += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.className = 'line';
    for (let i = 0; i < size; i += 1) {
      const pixel = document.createElement('div');
      pixel.addEventListener('click', (e) => {
        const color2 = document.getElementsByClassName('selected')[0].style.backgroundColor;
        e.target.style.backgroundColor = color2;
      });
      pixel.className = 'pixel';
      pixelLine.appendChild(pixel);
    }
    board.appendChild(pixelLine);
  }
}
function setColorPaletteEventClick (color) {
  for (let i = 0; i < color.length; i += 1) {
    color[i].addEventListener('click', (e) => {
      for (let j = 0; j < color.length; j += 1) {
        if ([...color[j].classList].includes('selected')) {
          color[j].classList.remove('selected');
        }
      }
      e.target.className += ' selected';
    });
  }
}
const button = document.getElementById('clear-board');
function clearBoard(pixelList) {
  button.addEventListener('click', () => {
    for (let i = 0; i < pixelList.length; i += 1) {
      pixelList[i].style.backgroundColor = 'white';
    }
  });
}

function boardSize() {
  const boardSizeButton = document.getElementById('generate-board');
  boardSizeButton.addEventListener('click', () => {
    const input = document.getElementById('board-size');
    if (input.value === '') {
      alert('Board inválido!');
    } else {
      const board = document.getElementById('pixel-board');
      while (board.children.length !== 0) {
        board.removeChild(board.children[0]);
      }
      if (Number(input.value) < 5) mountBoard(5);
      else if (Number(input.value) > 50) mountBoard(50);
      else { mountBoard(Number(input.value)); }
    }
  });
}
window.onload = () => {
  const InitialPalette = [[0, 0, 0], colorAslist(), colorAslist(), colorAslist()];
  const color = document.getElementsByClassName('color');
  changeColor(color, mountRgbColor(InitialPalette));
  mountBoard(5);
  setColorPaletteEventClick(color);
  const pixelList = document.getElementsByClassName('pixel');
  clearBoard(pixelList);
  boardSize();
};
