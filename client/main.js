console.log("connected to main.js")

let imgTag = document.querySelector("img")

let video = document.querySelector("#embed-video")

imgTag.addEventListener("click", () => {
   video.style.display = "block"
})

