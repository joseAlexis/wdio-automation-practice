/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class BasePage {
    private path = "";
    
    constructor(_path) {
        this.path = _path;
    }

    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open () {
        return browser.url(`${this.path}`)
    }
}
