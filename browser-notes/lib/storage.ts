import { Note } from "./type"

const STORAGE_KEY = "notes"

export function loadNotes(): Note[] {
    if (typeof window === "undefined") return [];

    const savedNotes = localStorage.getItem(STORAGE_KEY);
    if (savedNotes) { // 🔧 Hatalı olan `saveNotes` kontrolü düzeltildi
        try {
            return JSON.parse(savedNotes); // 🔧 `JSON.parse.` hatası düzeltildi
        } catch (error) {
            console.error("Failed to parse notes from localStorage", error);
            return [];
        }
    }
    return [];
}

export function saveNotes(notes: Note[]): void {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

export function formatDate(timestamp: number): string {
    return new Date(timestamp).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
    });
}
