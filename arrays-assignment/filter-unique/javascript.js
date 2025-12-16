let strings = ["Richard", "Richard", "Shelly", "Shelly", "Bob", "Bob", "Bob", "Sandy", "Patrick", "Patrick", "Richie", "Richie"];

function unique(arr) {
    let newArray = [...new Set(strings)]; // learning point: [...new Set(arr)] allows you to filter out duplicates.
    console.log(newArray);
}

unique(strings);