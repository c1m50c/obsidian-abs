import { AzureBlobStorageSettings } from "./types";
import { Plugin } from "obsidian";

const DEFAULT_SETTINGS: AzureBlobStorageSettings = {
    storageAccountSas: "",
};

export default class AzureBlobStorage extends Plugin {
    settings: AzureBlobStorageSettings | undefined;

    async onload(): Promise<void> {
        this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());

        this.addCommand({
            name: "Azure Blob Storage: Save Changes",
            id: "save-to-azure-blob-storage",
            callback: () => { },
        });
    }
}