function diagonalDifference(arr: number[][]): number {
    let diagonalLeft = 0;
    let diagonalRigth = 0;
    for (let i=0; i < arr.length; i++){
        for (let z=0; z < arr[i].length; z++){
            if (i === z) {
                diagonalLeft += (arr[i][i])
            } 
            if (((arr.length - 1) - i) === z) {
                diagonalRigth += (arr[i][(arr.length - 1) - i])
            }
        }
    }
    return (diagonalRigth - diagonalLeft) * 1; 
}