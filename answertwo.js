//Jawaban nomor 2
function solution(N, users) {
    var answer = [];
    let dictionary = [];
    let size = users.length;
    users.sort((a, b) => {
        return a - b;
    });

    //Masukin data ke dictionary
    for (let i = 1; i <= N; i++) {
        let value = 0;
        for (let j = 0; j < users.length; j++) {
            if (users[j] == i) {
                value++;
            }
        }
        const item = {
            stage: i,
            value: value,
            failure: 0
        }
        dictionary.push(item);
    }

    //Hitung failure stage
    for (let i = 0; i < dictionary.length; i++) {
        let value = dictionary[i].value;
        dictionary[i].failure = value / size;
        size -= value;
    }

    //Sort ulang berdasarkan nilai failure
    dictionary.sort((a, b) => {
        return b.failure - a.failure
    });

    //Looping lagi untuk insert yeay
    for (let i = 0; i < dictionary.length; i++) {
        answer.push(dictionary[i].stage);

    }
    return answer;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));