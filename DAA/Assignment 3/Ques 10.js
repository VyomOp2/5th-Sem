function minCoins(coins, m, V) {
    const dp = Array(V + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 0; i < m; i++) {
        for (let j = coins[i]; j <= V; j++) {
            if (dp[j - coins[i]] !== Infinity) {
                dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
            }
        }
    }
    return dp[V] === Infinity ? -1 : dp[V];
}

const coins = [1, 2, 5];
const V = 11;
const m = coins.length; 
console.log(minCoins(coins, m, V)); 
