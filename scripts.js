function getTriangleArea(a, h) {
  if ((a < 0) && (h > 0)) {
      return ("A mniejsze od zera, ale H jest spoko");
  }
  else if ((a > 0) && (h < 0)) {
      return ("A jest spoko, ale H mniejsze od zera");
  }
  else if ((a === 0) && (h === 0)) {
      return("A równe zero, H równe zero")
  }
  return a * h/2;
}
var triangleArea1 = getTriangleArea(-5, 5);
  console.log(triangleArea1);

var triangleArea2 = getTriangleArea(4, 2);
  console.log(triangleArea2);

var triangleArea3 = getTriangleArea(10, -2);
  console.log(triangleArea3);

var triangleArea4 = getTriangleArea (0, 0);
  console.log(triangleArea4);




