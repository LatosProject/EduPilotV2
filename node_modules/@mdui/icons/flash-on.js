import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFlashOn = class IconFlashOn extends LitElement {
    render() {
        return svgTag('<path d="M7 2v11h3v9l7-12h-4l4-8z"/>');
    }
};
IconFlashOn.styles = style;
IconFlashOn = __decorate([
    customElement('mdui-icon-flash-on')
], IconFlashOn);
export { IconFlashOn };
