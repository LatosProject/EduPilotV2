import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTextRotateVertical = class IconTextRotateVertical extends LitElement {
    render() {
        return svgTag('<path d="M15.75 5h-1.5L9.5 16h2.1l.9-2.2h5l.9 2.2h2.1L15.75 5zm-2.62 7L15 6.98 16.87 12h-3.74zM6 19.75l3-3H7V4.25H5v12.5H3l3 3z"/>');
    }
};
IconTextRotateVertical.styles = style;
IconTextRotateVertical = __decorate([
    customElement('mdui-icon-text-rotate-vertical')
], IconTextRotateVertical);
export { IconTextRotateVertical };
