import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMuseum_Sharp = class IconMuseum_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 11V9L12 2 2 9v2h2v9H2v2h20v-2h-2v-9h2zm-6 7h-2v-4l-2 3-2-3v4H8v-7h2l2 3 2-3h2v7z"/>');
    }
};
IconMuseum_Sharp.styles = style;
IconMuseum_Sharp = __decorate([
    customElement('mdui-icon-museum--sharp')
], IconMuseum_Sharp);
export { IconMuseum_Sharp };
