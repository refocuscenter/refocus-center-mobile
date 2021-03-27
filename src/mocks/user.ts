import { User } from "../types/interfaces";
import { randomInt } from "../utils/random";
import { produtosMercadinho } from "./productsCategories";
import { senhorDosPasteisStore } from "./store";

function randomProductsAndPortions() {
    const len = produtosMercadinho.length;
    const sliceStart = randomInt(0, len);
    const sliceEnd = randomInt(sliceStart, len);
    const portion = () => randomInt(1, 5);

    return produtosMercadinho.slice(sliceStart, sliceEnd).map(p => { return {
        portion: portion(), 
        product: p.product
    }})
}

export const user: User = {
    id: 1,
    displayName: "Conrado Pinheiro",
    token: "tIWXMAAAsTAAALEwEAmpwYAAAAArs4c",
    profilePhoto: "data:image/png;base64,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",
    userAccountInStore: [{
        balance: 100,
        store: senhorDosPasteisStore,
        basket: {
            productPortions: randomProductsAndPortions()
        }
    }]
}