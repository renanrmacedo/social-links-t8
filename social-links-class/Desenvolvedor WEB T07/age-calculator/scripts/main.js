const inputDay = document.getElementById("day");
const inputMonth = document.getElementById("month");
const inputYear = document.getElementById("year");

function check(event) {
    const input = event.target;
    const date = input.id; // day | month | year

    if (input.value === "" || input.value === "0") {
        return error(input, "This field is required!");
    }

    const validations = {
        day: () => checkDay(input),
        month: () => checkMonth(input),
        year: () => checkYear(input),
    };

    const isValid = validations[date]();

    if (!isValid) {
        if (date === "year") {
            if (inputDay.value === "" || inputMonth.value === "") {
                return error(input, "Please fill day and month!");
            }
            return error(input, "Must be in past");
        }

        return error(input, `Must be a valid ${date}`)
    }

    input.style.border = '';
    input.nextElementSibling.innerText = '';
}

function checkDay(input) {
    const day = input.value;
    const monthDays = monthTotalDays(inputYear.value, inputMonth.value);

    if (day < 1 || day > monthDays) {
        return false;
    }

    return true;
}

function checkMonth(input) {
    const month = input.value;

    if (month > 12 || month < 1) {
        return false;
    }

    return true;
}

function checkYear(input) {
    const today = new Date().setHours(0, 0, 0, 0);
    const birthday = new Date(`${input.value}-${inputMonth.value}-${inputDay.value}`).setHours(0, 0, 0, 0);

    if (birthday <= today) return true;

    return false;
}

function monthTotalDays(year, month) {
    return new Date(year, month, 0).getDate();
}

function limit(event, maxLength = 2) {
    event.target.value = event.target.value.slice(0, maxLength);
}

function error(input, msg) {
    input.style.border = '0.5px solid red';
    input.nextElementSibling.innerText = msg;
}
