function getDatesArray(startDate, endDate) {
    const datesArray = [];
    let currentDate = new Date(startDate);

    while (currentDate <= new Date(endDate)) {
        datesArray.push(currentDate.toISOString().split('T')[0]);
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return datesArray;
}

module.exports = getDatesArray;