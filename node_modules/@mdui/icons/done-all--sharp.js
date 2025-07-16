import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDoneAll_Sharp = class IconDoneAll_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m18 7-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41 6 19l1.41-1.41L1.83 12 .41 13.41z"/>');
    }
};
IconDoneAll_Sharp.styles = style;
IconDoneAll_Sharp = __decorate([
    customElement('mdui-icon-done-all--sharp')
], IconDoneAll_Sharp);
export { IconDoneAll_Sharp };
