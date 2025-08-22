let name: string = "Joseph Akpan"
console.log(name);

const number = (first: number, last: number): void => {
    let num: string = ""

    if (first < last) {
        for (let i = first; i <= last; i++) {
            num += `${i}  `
        }
        console.log(num);
    } else {
        console.log("First number should be less than the last number");
    }
}
number(1, 500)

