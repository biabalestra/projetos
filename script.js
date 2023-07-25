window.onload = () => {
    let InitialPalette = [[0, 0, 0], [0, 0, 100], [50,0,50], [15,21,48]]
    let color = document.getElementsByClassName('color')  
    changeColor(color,mountRgbColor(InitialPalette))
} 
function changeColor(elementList, colorList) {
   for (let i = 0; i < elementList.length; i += 1) {
    elementList[i].style.backgroundColor = colorList[i]
   } 
}
function mountRgbColor(colorList) {
    let color = []
    for (let i = 0; i < colorList.length; i += 1) {
        color.push(`rgb(${colorList[i][0]}, ${colorList[i][1]}, ${colorList[i][2]} )`)
    }  
    return color;
}
function generateRandomNumber(limit) {
    return Math.floor(Math.random()*limit)
}
function colorAslist() {
 return [generateRandomNumber(255),generateRandomNumber(255),generateRandomNumber(255)]
}