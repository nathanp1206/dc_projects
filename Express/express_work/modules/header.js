module.exports = function header(){
    return `<div class="toolbar">
        <div class="home-button">
            <form method="get" action="/">
                <button class="home">Home</button>
            </form>
        </div>
        <div>
            <form method="get" action="/contact">
                <button class="contact">Contact Us</button>
            </form>
            </div>
            <div>
            <form method="get" action="/legal">
                <button class="legal">Legal</button>
            </form>
            </div>
            <div>
            <form method="get" action="/about">
                <button class="legal">About Us</button>
            </form>
            </div>
    </div>
    `
}