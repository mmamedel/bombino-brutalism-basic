declare module 'brutalism' {
    import { VueConstructor } from 'vue';
    
    interface Brutalism {
        openURL(url: string): void;
        copy(text: string): any;
        /** Promisified wrapper around CSInterface.evalScript
         * Returns a promise/thenable object which is pre-parsed if JSON
         * If not in a CEP panel (and in browser/panelify, return second param as result) */
        evalScript(text: string, defs?: object, autoparse?: boolean): any;
        /** Opens a native save dialog and returns the target file
         * This should append file type, but currently does not */
        saveDialog(title: string, filetypes: Array<string>): { err: string|null; path: string|null };
         /** Opens a native open dialog and returns the target folder/file path as obj.path */
        openDialog(title: string, isFolder?: boolean): { err: string|null; path: string|null };
        /** Loads/executes .jsx script into memory from any path */
        loadScript(path: string): any;
        /**
         * Converts a RGB color array to hexadecimal format
         *
         * @param {array} val          The array of floating values (eg. from shapes.c.k, like below:
         *                                      [ 0.525490224361, 0.262745112181, 0.262745112181, 1 ]
         * @param {boolean} hashed     If false, don't prepend # to result
         *
         * @return {string}   The final hexademical color string (eg. '#b2bce')
         */
        rgbToHex(val: Array<number>, hashed?: boolean): string;
        readDir(path: string): Promise<any>;
        writeFile(path: string, data: any): Promise<any>;
        Anno: VueConstructor<Vue>;
        Alert: VueConstructor<Vue>;
        ButtonGroup: VueConstructor<Vue>;
        Button: VueConstructor<Vue>;
        Col: VueConstructor<Vue>;
        Divider: VueConstructor<Vue>;
        Dropdown: VueConstructor<Vue>;
        Dropzone: VueConstructor<Vue>;
        FileInput: VueConstructor<Vue>;
        Fold: VueConstructor<Vue>;
        Footer: VueConstructor<Vue>;
        Link: VueConstructor<Vue>;
        Grid: VueConstructor<Vue>;
        Icon: VueConstructor<Vue>;
        InputScroll: VueConstructor<Vue>;
        Input: VueConstructor<Vue>;
        Menus: VueConstructor<Vue>;
        PanelInfo: VueConstructor<Vue>;
        Panel: VueConstructor<Vue>;
        Row: VueConstructor<Vue>;
        Tabs: VueConstructor<Vue>;
        TextArea: VueConstructor<Vue>;
        Toggle: VueConstructor<Vue>;
        Wrapper: VueConstructor<Vue>;
        FilePicker: VueConstructor<Vue>;
        ColorPicker: VueConstructor<Vue>;
    }
    var brutalism: Brutalism
    export = brutalism
}