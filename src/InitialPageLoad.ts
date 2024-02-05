class InitialPageLoad {
    #domElementId: string;
    #storeName: string;
    #storeDescription: string;
    #openingHours: string | null;
    #bgPath: string | null;

    constructor(domElementId: string, storeName: string, storeDescription: string) {
        this.#domElementId = domElementId;
        this.#storeName = storeName;
        this.#storeDescription = storeDescription;
    }

    public render() {
        const domElement = document.getElementById(this.#domElementId);
        if (domElement) {
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
            domElement.append(storeIntroDiv, openingHoursDiv);
            
            if (this.#bgPath) {
                domElement.style.backgroundImage = `url("${this.#bgPath}")`;
                domElement.style.backgroundRepeat = "no-repeat";
                domElement.style.backgroundSize = "cover";
                domElement.style.backgroundPosition = "center";
            }
        }
    }

    public setOpeningHours(openingHours: string) {
        this.#openingHours = openingHours;
    }

    public setLandingBackgroundImage(bgPath: string) {
        this.#bgPath = bgPath;
    }
}

export default InitialPageLoad;