//Jawaban 3
function solution(relation) {
    var answer = 0;
    const columns = relation[0].length;
    let i = 0;
    let iterator = 0;
    while (i < columns) {
        //Bentuk array baru
        var newArray = relation.map(function (item) {
            let items = [];
            items.push(item[i]);

            if (iterator !== i) {
                items.push(item[iterator]);
            }
            return items.toString();
        });
        //console.log(newArray);

        //Check array baru ada duplikat ato ngga
        let result = newArray.filter(function (item, index) {
            return newArray.indexOf(item) != index;
        });

        if (result.length == 0) {
            //Move to next
            answer++;
            i++;
            iterator = i;
        } else {
            if (iterator < columns || iterator == 1) {
                iterator++;
            } else {
                i++;
            }
        }
    }
    return answer;
}



var result = solution([
    ["2", "100", "ryan", "music"], ["2", "200", "apeach", "math"], ["3", "300", "tube", "computer"], ["4", "400", "con", "computer"], ["3", "500", "muzi", "music"], ["2", "600", "apeach", "music"]
]);
console.log(result);
