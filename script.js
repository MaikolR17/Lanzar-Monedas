function tossCoin() {
  return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
    return new Promise((resolve, reject) => { 
        let headsCount = 0;
        let attempts = 0;
        while (headsCount < 5) {
            attempts++;
            console.log(tossCoin())
            if (tossCoin() === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }

            if (attempts > 100) {
                reject("It took more than 100 attempts to get 5 heads in a row.");
                return;
            }
        }
        if (headsCount === 5) {
            resolve(`You got 5 heads in a row! It took ${attempts} tries.`);
        }
    });
}
fiveHeads()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
console.log("When does this run now?");