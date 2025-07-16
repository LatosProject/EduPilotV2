import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLabelImportant = class IconLabelImportant extends LitElement {
    render() {
        return svgTag('<path d="m3.5 18.99 11 .01c.67 0 1.27-.33 1.63-.84L20.5 12l-4.37-6.16c-.36-.51-.96-.84-1.63-.84l-11 .01L8.34 12 3.5 18.99z"/>');
    }
};
IconLabelImportant.styles = style;
IconLabelImportant = __decorate([
    customElement('mdui-icon-label-important')
], IconLabelImportant);
export { IconLabelImportant };
