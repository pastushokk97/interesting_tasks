function minWalk(gridList, startX, startY, endX, endY) {
  const dots = [];

  const DENIED_POINT = 'X';
  let currentX = startX;
  let currentY = startY;
  
  while(currentX !== endX) {
    if (gridList[startY][currentX] === DENIED_POINT) {
      break;
    }

    dots.push(`${startY}.${currentX}`);
    currentX > endX ? currentX-- : currentX++;
  }

  while(currentY !== endY) {
    if (gridList[startX][currentY] === DENIED_POINT) {
      break;
    }

    dots.push(`${startX}.${currentY}`);
    currentY > endY ? currentY-- : currentY++;
  }

  return dots.filter((dot, i, dots) => dots.indexOf(dot) === i).length;
}