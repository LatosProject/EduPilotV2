import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWallpaper_Sharp = class IconWallpaper_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M4 4h7V2H2v9h2V4zm6 9-4 5h12l-3-4-2.03 2.71L10 13zm7-4.5c0-.83-.67-1.5-1.5-1.5S14 7.67 14 8.5s.67 1.5 1.5 1.5S17 9.33 17 8.5zM22 2h-9v2h7v7h2V2zm-2 18h-7v2h9v-9h-2v7zM4 13H2v9h9v-2H4v-7z"/>');
    }
};
IconWallpaper_Sharp.styles = style;
IconWallpaper_Sharp = __decorate([
    customElement('mdui-icon-wallpaper--sharp')
], IconWallpaper_Sharp);
export { IconWallpaper_Sharp };
