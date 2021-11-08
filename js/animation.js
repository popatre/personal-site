// name animation //
anime({
    targets: "#tester path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInElastic(1, 0.9)",
    duration: 2500,
    delay: function (el, i) {
        return i * 200;
    },
    direction: "alternate",
    loop: false,
});

//  timeout for name animation

setTimeout(() => {
    let aaa = document.querySelector("#tester");
    aaa.classList.add("add");
}, 9000);

setTimeout(() => {
    let aaa = document.querySelector("#tester");
    aaa.classList.add("addtwo");
}, 9000);

var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
};

//  *************** typing carousel *************** //

TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};
setTimeout(() => {
    var elements = document.getElementsByClassName("txt-rotate");
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute("data-rotate");
        var period = elements[i].getAttribute("data-period");
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
}, 8000);

const typingSubs = document.querySelector(".dev-subs");
const nameAni = document.querySelector("#tester");

typingSubs.style.visibility = "visible";
nameAni.style.visibility = "visible";
