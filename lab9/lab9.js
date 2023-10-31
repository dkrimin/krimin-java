let q = Number(0);
function task(a) {
    if (a !== null) {
        if (Object.getPrototypeOf(a) !== null) {
            q = q + 1;
            return task(Object.getPrototypeOf(a)); }
        else {
            return q }
        }
    else {
        return new Date().toISOString().split('T')[0].split('-').reverse().join('.');
    }
}

const w = {'Dima': '40'}
console.log(task(w                        ))
