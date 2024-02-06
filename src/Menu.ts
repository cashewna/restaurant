import Page from "./Page";

class Menu implements Page {
    #domElement: HTMLElement;
    #menuItems: string[] = [];
    constructor(domElement: HTMLElement, menuItems: string[]) {
        this.#domElement = domElement;
        this.#menuItems = menuItems;
    }
    
    public render(): void {
        this.#domElement.innerHTML = "";
        const menuHeader = document.createElement("h1");
        menuHeader.textContent = "Menu";
        const menuList = document.createElement("ul");
        menuList.classList.add("menu-list");
        this.#menuItems.forEach((item) => {
            const menuItem = document.createElement("li");
            menuItem.textContent = item;
            menuList.append(menuItem);
        });
        this.#domElement.append(menuHeader, menuList);
    }
}

export default Menu;