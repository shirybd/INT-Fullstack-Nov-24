// base requirements:
// multiple pages
// forms
// manage array of objects
// relation to other objects

// office
// manage inventory
// manage employees
// manage loaned equipment

// Model
type ConsumableItem = {
    id: string,
    name: string,
    category: "Supplies",
    description?: string,
    priceInAgorot: number,
};

type EquipmentItem = {
    id: string,
    name: string,
    category: "Furniture" | "IT",
    description?: string,
    priceInAgorot: number,
};

type Item = ConsumableItem | EquipmentItem;

type Stock = { itemId: string, quantity: number }[];
type Inventory = { itemId: string, serial: string }[];

// API
const itemsStorageKey = "items";

let items: Item[] = JSON.parse(localStorage.getItem(itemsStorageKey)) ?? [];
let stock: Stock = [];
let inventory: Inventory = [];

export function getItems() {
    return items.slice();
}

export function getItem(itemId: string) {
    const item = items.find((i) => i.id === itemId);

    return item ?? `Item with id "${itemId}" doesn't exist.`;
}

export function addItem(item: Item) {
    if (items.some((i) => i.id === item.id)) {
        return `Id "${item.id}" already exists`;
    }

    items.push(item);

    localStorage.setItem(itemsStorageKey, JSON.stringify(items));

    return "Success";
}

export function editItem(item: Item) {
    const itemToEdit = getItem(item.id);

    if (typeof itemToEdit === "string") {
        return itemToEdit;
    }

    itemToEdit.name = item.name;
    itemToEdit.description = item.description;
    itemToEdit.priceInAgorot = item.priceInAgorot;

    localStorage.setItem(itemsStorageKey, JSON.stringify(items));

    return "Success";
}

export function addToStock(itemId: string, amount: number) {}

export function consume(itemId: string, quantity: number) {}

export function acquire(itemId: string, serial: string) {}

export function decomission(serial: string) {}
