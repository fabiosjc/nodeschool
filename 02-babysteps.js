var numbers = 0;
for (i = 2; i < process.argv.length; i++) {
    numbers += Number(process.argv[i]);
}

console.log(numbers);