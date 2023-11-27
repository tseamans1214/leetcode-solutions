function jump(nums: number[]): number {
    if (nums.length <= 1) {
        return 0;
    }

    let jumps: number = 0;  // Number of jumps required
    let farthest: number = 0;  // Index up to which the current jump can reach
    let currentEnd: number = 0;  // Endpoint of the current jump

    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);

        if (i === currentEnd) {
            jumps++;
            currentEnd = farthest;
        }
    }

    return jumps;
};
