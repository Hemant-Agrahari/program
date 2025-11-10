function printFinonacciSeries(n) {
    let fibonaciSeries = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            fibonaciSeries.push(0);
        } else if (i === 1) {
            fibonaciSeries.push(1);
        } else {
            let nextNumber = fibonaciSeries[i - 1] + fibonaciSeries[i - 2];
            fibonaciSeries.push(nextNumber);
        }
    }
    return fibonaciSeries;
}
console.log(printFinonacciSeries(5)); // [0, 1, 1, 2, 3]
console.log(printFinonacciSeries(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]