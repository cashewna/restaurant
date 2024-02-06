import Page from "./Page";

class Home implements Page {
    #domElement: HTMLElement;
    #storeName: string;
    #storeDescription: string;
    #openingHours: string | null;
    #bgPath: string | null;

    constructor(domElement: HTMLElement, storeName: string, storeDescription: string) {
        this.#domElement = domElement;
        this.#storeName = storeName;
        this.#storeDescription = storeDescription;
    }

    public render(): void {
        this.#domElement.innerHTML = "";
        const storeIntroDiv = document.createElement("div");
        storeIntroDiv.classList.add("store-intro");
        const storeHeader = document.createElement("h1");
        storeHeader.textContent = this.#storeName;

        const storeDescription = document.createElement("p");
        storeDescription.textContent = this.#storeDescription;
        storeIntroDiv.append(storeHeader, storeDescription);

        const openingHoursDiv = document.createElement("div");
        openingHoursDiv.classList.add("opening-hours");
        const openingHoursHeader = document.createElement("h2");
        openingHoursHeader.textContent = "Opening Hours";
        const openHours = document.createElement("p");
        openHours.textContent = this.#openingHours
            ? this.#openingHours
            : "Please call for opening hours.";

        openingHoursDiv.append(openingHoursHeader, openHours);
        this.#domElement.append(storeIntroDiv, openingHoursDiv);

        if (this.#bgPath) {
            this.#domElement.style.backgroundImage = `url("${this.#bgPath}")`;
            this.#domElement.style.backgroundRepeat = "no-repeat";
            this.#domElement.style.backgroundSize = "cover";
            this.#domElement.style.backgroundPosition = "center";
        }
    }

    public setOpeningHours(openingHours: string) {
        this.#openingHours = openingHours;
    }

    public setLandingBackgroundImage(bgPath: string) {
        this.#bgPath = bgPath;
    }
}

export default Home;