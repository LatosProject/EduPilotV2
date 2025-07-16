import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconColorize = class IconColorize extends LitElement {
    render() {
        return svgTag('<path d="m20.71 5.63-2.34-2.34a.996.996 0 0 0-1.41 0l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42zM6.92 19 5 17.08l8.06-8.06 1.92 1.92L6.92 19z"/>');
    }
};
IconColorize.styles = style;
IconColorize = __decorate([
    customElement('mdui-icon-colorize')
], IconColorize);
export { IconColorize };
