import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArtTrack_Sharp = class IconArtTrack_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zM12 7v10H2V7h10zm-1.5 8-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z"/>');
    }
};
IconArtTrack_Sharp.styles = style;
IconArtTrack_Sharp = __decorate([
    customElement('mdui-icon-art-track--sharp')
], IconArtTrack_Sharp);
export { IconArtTrack_Sharp };
