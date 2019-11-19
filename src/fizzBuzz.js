const fizz = (number) => {
    if (number%3 === 0){
        return "Fizz";
    } else
    return number.toString();
};

module.exports = fizz;
