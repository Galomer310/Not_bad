// 1
let star = '*';
let i = 0;
while (i <= 6) {    
    console.log(star.repeat(i));
    i++;
} 
// 2
for (let i = 1; i <= 6; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row.trim());  
}
