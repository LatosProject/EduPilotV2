import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBackspace_Sharp = class IconBackspace_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M24 3H6l-6 9 6 9h18V3zm-5 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"/>');
    }
};
IconBackspace_Sharp.styles = style;
IconBackspace_Sharp = __decorate([
    customElement('mdui-icon-backspace--sharp')
], IconBackspace_Sharp);
export { IconBackspace_Sharp };
