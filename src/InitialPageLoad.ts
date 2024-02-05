import './style.css';

class InitialPageLoad {
    #domElementId: string;
    #storeName: string;
    #storeDescription: string;
    #openingHours: string | null;

    constructor(domElementId: string, storeName: string, storeDescription: string) {
        this.#domElementId = domElementId;
        this.#storeName = storeName;
        this.#storeDescription = storeDescription;
    }

    public render() {
        const domElement = document.getElementById(this.#domElementId);
        if (domElement) {
            const storeHeader = document.createElement("h1");
            storeHeader.textContent = this.#storeName;

            const storeDescription = document.createElement("p");
            storeDescription.textContent = this.#storeDescription;

            const openingHoursHeader = document.createElement("h1");
            openingHoursHeader.textContent = "Opening Hours";
            const openHours = document.createElement("p");
            openHours.textContent = this.#openingHours
                ? this.#openingHours
                : "Please call for opening hours.";
            domElement.append(storeHeader, storeDescription, openingHoursHeader, openHours);
        }
    }

    public setOpeningHours(openingHours: string) {
        this.#openingHours = openingHours;
    }
}

export default InitialPageLoad;