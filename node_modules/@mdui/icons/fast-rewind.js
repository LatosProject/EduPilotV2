import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFastRewind = class IconFastRewind extends LitElement {
    render() {
        return svgTag('<path d="M11 18V6l-8.5 6 8.5 6zm.5-6 8.5 6V6l-8.5 6z"/>');
    }
};
IconFastRewind.styles = style;
IconFastRewind = __decorate([
    customElement('mdui-icon-fast-rewind')
], IconFastRewind);
export { IconFastRewind };
