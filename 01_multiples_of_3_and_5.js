const multiplesOf3and5 = int => {
    let multiples = []
    for (let i=0; i<int; i++) if (i%3 === 0 || i%5 === 0) multiples.push(i)
    return multiples.reduce((start,next) => { return start + next},0)
}

console.log(multiplesOf3and5(1000))
