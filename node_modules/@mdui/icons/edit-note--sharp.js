import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconEditNote_Sharp = class IconEditNote_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 10h11v2H3v-2zm0-2h11V6H3v2zm0 8h7v-2H3v2zm15.01-3.13 1.41-1.41 2.12 2.12-1.41 1.41-2.12-2.12zm-.71.71-5.3 5.3V21h2.12l5.3-5.3-2.12-2.12z"/>');
    }
};
IconEditNote_Sharp.styles = style;
IconEditNote_Sharp = __decorate([
    customElement('mdui-icon-edit-note--sharp')
], IconEditNote_Sharp);
export { IconEditNote_Sharp };
