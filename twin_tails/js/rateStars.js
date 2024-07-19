var selectedRating = 0;

function starRate(index) {
    // Reset all stars to gray before updating selected stars
    for (let i = 1; i <= 5; i++) {
        document.getElementById(i).style.color = "#b3b3b3";
    }

    // Update stars up to the selected index to orange
    for (let i = 1; i <= index; i++) {
        document.getElementById(i).style.color = "orange";
    }

    // Update selectedRating based on the index
    selectedRating = index;
}

function validateForm() {
    if (selectedRating === 0) {
        alert("Please rate us before submitting!");
        return false;
    }
    return true;
}


