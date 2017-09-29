function getTriangleArea(a, h) {
  if ((a < 0) && (h > 0)) {
      return ("A is less than zero, but H is cool");
  }
  else if ((a > 0) && (h < 0)) {
      return ("A is cool, but H is less than zero");
  }
  else if ((a === 0) && (h === 0)) {
      return("A equals zero, H equals zero")
  }
  else if ((a <0) && (h <0)) {
      return("A is less than zero, so is H");
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

var triangleArea5 = getTriangleArea (-1, -1);
  console.log(triangleArea5);
