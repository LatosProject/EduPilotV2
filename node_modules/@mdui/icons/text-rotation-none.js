import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTextRotationNone = class IconTextRotationNone extends LitElement {
    render() {
        return svgTag('<path d="M12.75 3h-1.5L6.5 14h2.1l.9-2.2h5l.9 2.2h2.1L12.75 3zm-2.62 7L12 4.98 13.87 10h-3.74zm10.37 8-3-3v2H5v2h12.5v2l3-3z"/>');
    }
};
IconTextRotationNone.styles = style;
IconTextRotationNone = __decorate([
    customElement('mdui-icon-text-rotation-none')
], IconTextRotationNone);
export { IconTextRotationNone };
