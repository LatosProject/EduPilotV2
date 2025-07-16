import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPiano_Sharp = class IconPiano_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3v18h18V3zm-8 11.5h1.25V19h-4.5v-4.5H11V5h2v9.5zM5 5h2v9.5h1.25V19H5V5zm14 14h-3.25v-4.5H17V5h2v14z"/>');
    }
};
IconPiano_Sharp.styles = style;
IconPiano_Sharp = __decorate([
    customElement('mdui-icon-piano--sharp')
], IconPiano_Sharp);
export { IconPiano_Sharp };
