class Menu {
    #domElement: HTMLElement;
    #menuItems: string[] = [];
    constructor(domElement: HTMLElement, menuItems: string[]) {
        console.log("Menu constructor");
        this.#domElement = domElement;
        this.#menuItems = menuItems;
    }
}

export default Menu;