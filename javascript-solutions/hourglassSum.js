function hourglassSum(arr) {
    let largetSum = -1000;
    let currentSum = 0;
    // While there is 3 numbers in a row, move over 1
    for (let i=0; i<= 3; i++) {
        // While there is 3 numbers in a column, move down 1
        for (let j=0; j <= 3; j++) {
            // sum the hourglass numbers
            currentSum += arr[i][j] + arr[i][j+1] + arr[i][j+2] +
                arr[i+1][j+1] +
                arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            // set largest sum if it is greater than the last
            if (currentSum > largetSum) {
                largetSum = currentSum;
            }
            currentSum = 0;
        }
    }
    return largetSum;
}
