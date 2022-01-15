var container = document.getElementsByClassName("imgs-container")[0]
var img
var imgs_arr = [1, 4, 6, 3, 5, 2, 4, 1, 3, 6, 5, 2]
var checked = []
var clicked_id
var first
var second
var score = 0
var score_display = document.getElementById("score_display")
var won = document.getElementById("won")

var flip_sound = new Audio("./assets/sounds/flip.mp3")
var flip_back_sound = new Audio("./assets/sounds/flip_back.mp3")
var win_sound = new Audio("./assets/sounds/win.mp3")

// shuffleImgs()
createImages()



container.addEventListener("click", function (e) {
    if (e.target !== this) {
        clicked_id = e.target.getAttribute("id")
        // console.log(clicked_id)
        if (checked.length == 2) {
            if (imgs_arr[checked[0]] != imgs_arr[checked[1]]) {
                // console.log(checked)
                // console.log(imgs_arr[checked[0]])
                // console.log(imgs_arr[checked[1]])
                flipbackWrongImgs()

            } else {
                dimRightImgs()
                score++
                checkForWinning()
                // console.log(score)
                score_display.textContent = score
                // console.log(score_display)
                checked = []
            }

        } else {

            flip(e.target)
        }

        // console.log(e.target)
    }


})

//get an prev_image
//if next_image==prev_img
//set them both to open
//emphty array
//else get rid of them



function createImages() {

    console.log("here")
    for (var i = 0; i < 12; i++) {
        var new_div = document.createElement("div")
        new_div.setAttribute("class", "card")
        new_div.setAttribute("id", i)
        // new_div.style.backgroundImage = url("./assets/images/back-1.jpg")
        // img = document.createElement("img")
        // img.setAttribute("src", "./assets/images/back-1.jpg")
        // img.setAttribute("id", i)
        container.append(new_div)
    }

}

function checkForWinning() {
    console.log("won")
    if (score == 5) {
        won.textContent = "Congratulations!!! You WOn!!!"
        win_sound.play()
    }
}

function shuffleImgs() {
    imgs_arr.sort(function () {
        return 0.5 - Math.random()
    })
}

function flipbackWrongImgs() {
    setTimeout(function () {
        checked.forEach(function (img_id) {
            // document.getElementById(img_id).setAttribute("src", "./assets/images/back-1.jpg")
            document.getElementById(img_id).style.backgroundImage = 'url("./assets/images/back-1.jpg")'
            document.getElementById(img_id).style.backgroundSize = "cover"
            flip_back_sound.play()

        })
        console.log(imgs_arr)
        checked = []
    }, 10);
}

function dimRightImgs() {
    checked.forEach(function (img_id) {
        // console.log("in dimmer")
        // console.log(img_id)
        // imgs_arr.splice(img_id, 1)
        document.getElementById(img_id).style.filter = "brightness(0.5)"

        // console.log(score)
        // console.log(imgs_arr)
    })
}

function flip(clicked_img) {
    if (!clicked_img.classList.contains("flipped")) {
        // clicked_img.setAttribute('src', "./assets/images/" + imgs_arr[clicked_id] + ".png")
        console.log(clicked_img)
        console.log(imgs_arr[clicked_id])
        clicked_img.style.backgroundImage = `url("./assets/images/${imgs_arr[clicked_id]}.png")`
        clicked_img.style.backgroundSize = "contain"
        flip_sound.play()
        checked.push(clicked_id)
    }
}