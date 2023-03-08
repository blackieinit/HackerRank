function pangrams(s: string): string {
    const abecedary = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"
    const abecedaryArray = abecedary.split(',');
    const sSplit = s.toLocaleLowerCase();
    let numberLetters = 0;
    
    for (let i=0; i < abecedaryArray.length; i++){
        for (let z=0; z < sSplit.length; z++){
            if( abecedaryArray[i] === sSplit[z] ) {
                numberLetters++;
                break;
            }
        }
    }
    
    if (numberLetters >= 26) {
        return "pangram"
    } else {
        return "not pangram";
    }
}
