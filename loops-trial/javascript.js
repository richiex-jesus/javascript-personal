function returnPrime(a, b) {
    if (a < b) {
        for (i = a; i <= b; i++) {
            for (x = 2; x < i; x++) {
                if (i % x == 0) break;
            }
            console.log(i);
        }
        
    }

    if (a > b) {
        for (i = b; i <= a; i++) {
            for (x = 2; x < i; x++) {
                if (i % x == 0) break;
            }
            console.log(i);
        }
    }
}

returnPrime(7, 2);