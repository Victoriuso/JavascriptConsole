//Answer no 1
function solution(record) {
    //Lets do dis boi
    var answer = [];

    //bikin dictionary buat nampung yah
    let map = [];
    const size = record.length;
    for (let i = 0; i < size; i++) {
        let data = record[i].toString().split(' ');
        if (data[0] !== 'Change') {
            const user = {
                status: data[0],
                id: data[1],
                name: data[2]
            };
            map.push(user);
        }

        //Setiap kali push, check aja, kalo ada yang sama, ganti namanya
        gantiNama(map, data[1], data[2]);
    }

    for (let i = 0; i < map.length; i++) {
        switch (map[i].status) {
            case 'Enter':
                answer.push(map[i].name + " came in.");
                break;
            case 'Leave':
                answer.push(map[i].name + " has left.");
                break;
        }
    }
    return answer;
}

function gantiNama(map, id, name) {
    for (let i = 0; i < map.length; i++) {
        if (map[i].id === id) {
            //Berarti ketemu ada yang sama
            if (name === 'undefined')
                name = map[i].name;
            map[i].name = name;
        }
    }
}



var record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"];
console.log(solution(record));