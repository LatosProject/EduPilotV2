import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDoneOutline_TwoTone = class IconDoneOutline_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="m19.77 4.93 1.4 1.4L8.43 19.07l-5.6-5.6 1.4-1.4 4.2 4.2L19.77 4.93m0-2.83L8.43 13.44l-4.2-4.2L0 13.47l8.43 8.43L24 6.33 19.77 2.1z"/>');
    }
};
IconDoneOutline_TwoTone.styles = style;
IconDoneOutline_TwoTone = __decorate([
    customElement('mdui-icon-done-outline--two-tone')
], IconDoneOutline_TwoTone);
export { IconDoneOutline_TwoTone };
