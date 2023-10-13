const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d")

// ctx.fillRect(100, 100, 100, 100);
// ctx.fillRect(200, 200, 100, 100);
// ctx.fillRect(300, 300, 100, 100);
// ctx.fillRect(400, 400, 100, 100);
// ctx.fillStyle = 'blue'

// ctx.beginPath();
// ctx.moveTo(30, 500)
// ctx.lineTo(30,800)
// ctx.lineTo(1500,1100);
// ctx.strokeStyle = 'red'
// ctx.stroke();



// ctx.beginPath()
// ctx.arc(500,500, 30, 0, Math.PI * 2);
// ctx.strokeStyle = 'blue'
// ctx.stroke();

// for(let i=0; i<10; i++) {
//     ctx.beginPath();
//     ctx.arc(100 + (Math.random() * window.innerWidth), 100 + (Math.random() * window.innerHeight), 50, 0, Math.PI * 2);
//     ctx.strokeStyle = "rgba(" + Math.random() * 255 +","+ Math.random() * 255 + "," + Math.random() * 255 + ")"
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.fillRect(100 + (Math.random() * window.innerWidth), 100 + (Math.random() * window.innerHeight), 20, 20)
//     ctx.fillStyle = "rgba(" + Math.random() * 255 +","+ Math.random() * 255 + "," + Math.random() * 255 + ")" 
//     ctx.stroke();

// }
let x = 0, y = 0
const moveElement = (e) => {
    ctx.beginPath();
    document.addEventListener('keyup', (e) => {
        console.log(e.key)
        if(e.key == 'ArrowUp') y = y + 1
        if(e.key == 'ArrowDown') y = y - 1
    })
    ctx.arc(x, y, 30, 0 , Math.PI * 2)
    ctx.strokeStyle = 'red'
    ctx.stroke();
    console.log(x,y)
    requestAnimationFrame(moveElement)
}
moveElement(ctx, 0, 0)

