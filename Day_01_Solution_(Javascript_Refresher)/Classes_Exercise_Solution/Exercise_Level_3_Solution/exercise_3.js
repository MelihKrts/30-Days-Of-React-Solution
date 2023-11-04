// Classes Exercise Solution

// Exercise Level 3 Solution

// Exercise 3.1

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

class Statistic {
    constructor(data) {
        this.data = data
    }

    count() {
        return this.data.length
    }

    sum() {
        return this.data.reduce((sum, acc) => sum + acc, 0);
    }

    min() {
        return Math.min(...this.data);
    }

    max() {
        return Math.max(...this.data);
    }

    range() {
        return this.max() - this.min();
    }

    mean() {
        return this.sum() / this.count();
    }

    median() {
        const sort = this.data.slice().sort((a, b) => a - b);
        const middleValue = Math.floor(sort.length / 2);
        if (sort % 2 == 0) {
            return (sort[middleValue - 1] + sort[middleValue]) / 2;
        }
        else {
            return sort[middleValue];
        }
    }

    mode() {
        const frequencyMap = new Map();
        this.data.forEach(value => {
            frequencyMap.set(value, (frequencyMap.get(value) || 0) + 1);
        });

        let modeValue = null;
        let maxFrequency = 0;

        frequencyMap.forEach((frequency, value) => {
            if (frequency > maxFrequency) {
                maxFrequency = frequency;
                modeValue = value;
            }
        });

        const modes = [];
        frequencyMap.forEach((frequency, value) => {
            if (frequency === maxFrequency) {
                modes.push(value);
            }
        });

        return modes.length === 1 ? modes[0] : modes;
    }


    var() {
        const mean = this.mean();
        const squarred = this.data.map((val) => (val - mean) ** 2);
        return this.sumOfArray(squarred) / this.count();
    }

    std() {
        return Math.sqrt(this.var());
    }

    freqDist() {
        const frequency = {};
        this.data.forEach((val) => {
            frequency[val] = (frequency[val] || 0) + 1;
        })
        const sortedFrequency = Object.entries(frequency).sort((a, b) => b[1] - a[1]);
        return sortedFrequency.map(([value, count]) => [count, Number(value)]);
    }

    sumOfArray(array) {
        return array.reduce((acc, val) => acc + val, 0);
    }

    describe() {
        return `Count: ${this.count()}\nSum: ${this.sum()}\nMin: ${this.min()}\nMax: ${this.max()}\nRange: ${this.range()}\nMean: ${this.mean()}\nMedian: ${this.median()}\nMode: ${this.mode()}\nVariance: ${this.var()}\nStandard Deviation: ${this.std()}\nFrequency Distribution: ${this.freqDist()}`;
    }
}

const statistic = new Statistic(ages);

console.log(statistic.describe());