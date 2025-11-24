const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

departments.forEach(dep => {
    let performance = dep[1] >= 90 ? "Excellent" :
                      dep[1] >= 75 ? "Good" :
                      dep[1] >= 60 ? "Average" : "Needs Improvement";
    console.log(dep[0] + ": " + performance);
});