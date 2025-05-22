// break -- Menghentikan looping
for(let a = 1; a <= 5; a++){
    if (a % 2 == 0){
        console.log(a);
        break;
    }
}

// continue -- Men-skip 1x looping
for(let b = 1; b <= 5; b++){
    if (b == 3) continue;{
        console.log(b);
    }
}
