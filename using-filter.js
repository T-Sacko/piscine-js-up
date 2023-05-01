function filterShortStateName(arr) {
    return arr.filter((item) => item.length < 7);
}

function filterStartVowel(arr) {
    return arr.filter((item) => /^[aeiou]/i.test(item));
}

function filter5Vowels(arr) {
    return arr.filter((item) => (item.match(/[aeiou]/gi) || []).length >= 5);
}

function filter1DistinctVowel(arr) {
    return arr.filter((item) => new Set(item.toLowerCase().match(/[aeiou]/gi) || []).size === 1);
}

function multiFilter(arr) {
    return arr.filter((item) => {
        const capital = item.capital.length >= 8;
        const name = !/^[aeiou]/i.test(item.name);
        const tag = /[aeiou]/i.test(item.tag);
        const region = item.region !== "South";
        return capital && name && tag && region;
    });
}
