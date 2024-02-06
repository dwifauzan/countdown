const parag1 = document.getElementById('p1')
const parag2 = document.getElementById('p2')

let ago, ago2, p1 = 100, p2 = 100

ago = setInterval(() => {
    p1--
    if (p1 >= 9) {
        ago = setInterval(() => {
            p1--
            if (p1 >= 9) {
                parag1.innerHTML = p1
                if (p1 == 9) {
                    ago2 = setInterval(() => {
                        p2--
                        if (p2 >= 9) {
                            parag2.innerHTML = p2
                        }
                    }, 100)
                }
            }
        }, 100)
    }
}, 100)
