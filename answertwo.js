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
        console.log(size);
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
    console.log(dictionary);
    return answer;
}

function quickSort(arrays, start, end) {
    if (start < end) {
        const pivot = arrays[end];
        let increment = start - 1;
        for (let i = start; i < end - 1; i++) {
            if (arrays[i] <= pivot) {
                increment++;
                let temp = arrays[increment];
                arrays[increment] = arrays[i];
                arrays[i] = temp;
            }
        }

        //Swap pivot
        increment++;
        let temp = arrays[end];
        arrays[end] = arrays[increment];
        arrays[increment] = temp;

        //Quick sort kiri
        quickSort(arrays, start, increment - 1);

        //Quick sort kanan
        //console.log(increment + 1);
        quickSort(arrays, increment + 1, end);
    }
}

console.log(solution(5, [2,1,2,6,2,4,3,3]));
//console.log(solution(5, [4, 3, 6]));