import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDone_TwoTone = class IconDone_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>');
    }
};
IconDone_TwoTone.styles = style;
IconDone_TwoTone = __decorate([
    customElement('mdui-icon-done--two-tone')
], IconDone_TwoTone);
export { IconDone_TwoTone };
