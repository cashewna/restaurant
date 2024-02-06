import Page from "./Page";

class About implements Page {
    #domElement: HTMLElement;
    #aboutContent: string = "";

    constructor(domElement: HTMLElement) {
        this.#domElement = domElement;
    }

    public render(): void {
        this.#domElement.innerHTML = "";
        const aboutContent = document.createElement("p");
        aboutContent.textContent = this.#aboutContent;
        this.#domElement.append(aboutContent);
    }
    
    public setAboutContent(content: string) {
        this.#aboutContent = content;
    }
}

export default About;