import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDoneOutline = class IconDoneOutline extends LitElement {
    render() {
        return svgTag('<path d="m19.77 5.03 1.4 1.4L8.43 19.17l-5.6-5.6 1.4-1.4 4.2 4.2L19.77 5.03m0-2.83L8.43 13.54l-4.2-4.2L0 13.57 8.43 22 24 6.43 19.77 2.2z"/>');
    }
};
IconDoneOutline.styles = style;
IconDoneOutline = __decorate([
    customElement('mdui-icon-done-outline')
], IconDoneOutline);
export { IconDoneOutline };
