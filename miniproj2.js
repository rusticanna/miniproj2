function sleepHours (sleepHours, age, region) {
    if ((sleepHours < 8 && age > 40) || (sleepHours < 6 && age <= 40)) {
        document.write("Sleep Deprived!");
    } else {
        document.write("Healthy!");
    }
    if (region.toLowerCase() === "america") {
        alert("87% of highschool students in America are sleep deprived");
    }
}
