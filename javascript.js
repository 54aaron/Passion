const origin = "file://wsl%24/Ubuntu-18.04/home/aaron/digi_proj/passion/index.html"

// const request = `https://random-word-api.herokuapp.com/word/${part}`
const headersList = {'Access-Control-Allow-Origin': 'file://wsl%24/Ubuntu-18.04/home/aaron/digi_proj/passion/index.html',
                    'Access-Control-Allow-Methods': 'GET, POST',
                    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'}

document.querySelector("#go").addEventListener("click", async function(){
    
    //declare arrays with parts of speech and empty arrays
    let speech = ["verb", "adjective", "noun"]
    let promises = []
    let words = []

    //make call to api and retrieve promises
    speech.map((part) => {
        promises.push( fetch( `https://random-word-api.herokuapp.com/word`))
    })

    const data = await Promise.all(promises);

    //convert JSON and retrieve promises
    data.map((obj) => {
        // console.log(obj)
        words.push(obj.json())
    })

    const objs = await Promise.all(words)

    console.log(objs)

    //Sentence construction ... maybe a more elegant way to go about this but idgaf
    sentence =  `To <i>${objs[0][0]}</i> a <u>${objs[1][0]}</u> ${objs[2][0]}`
    document.querySelector("#passionText").innerHTML = sentence

    $('#urPassion').textfill({
        maxFontPixels: 132,
        innerTag: 'p',
        success: function() {
            console.log("yay!")
        },
        fail: function() {
            alert("awwww")
        }
    })

    $("body").toggleClass("blue");
    $("body").toggleClass("pink");

    //Show sentence and handle reverse
    slideUp.play()
    slideUp.finished.then(() => {
        slideUp.reverse();
      })

})

document.querySelector("#restart").addEventListener("click", function(){
    slideUp.play()
    slideUp.finished.then(() => {
        slideUp.reverse();
        $("body").toggleClass("blue");
        $("body").toggleClass("pink");
      })
})

document.querySelector("#download").addEventListener("click", function(){
    var element = document.getElementById('body');

    html2canvas(element).then((canvas) => {
        const base64image = canvas.toDataURL("image/png");
        var anchor = document.createElement('a');
        anchor.setAttribute("href", base64image);
        anchor.setAttribute("download", "my-image.png")
        anchor.click();
        anchor.remove()
    });

})

let slideUp = anime({
    targets: '#title, #after',
    translateY: -1050,
    autoplay: false
});


$(document).ready(function(){
    console.log("hey")

    $('#urPassion').textfill({
        maxFontPixels: 148,
        innerTag: 'p',
        success: function() {
            console.log("yay!")
        },
        fail: function() {
            alert("awwww")
        }
    })
})





