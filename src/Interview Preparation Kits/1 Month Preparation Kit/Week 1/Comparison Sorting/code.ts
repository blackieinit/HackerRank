function countingSort(arr: number[]): number[] {
    
    let frequence = Array(100).fill(0);
        
    for (let i = 0; i < arr.length; i++) {
        let sum = arr.filter(element => element === i);
        frequence[i] = sum.length;
    }
    
    return frequence;

}
