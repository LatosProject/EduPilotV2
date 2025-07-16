import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBook_Sharp = class IconBook_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M20 2H4v20h16V2zM6 4h5v8l-2.5-1.5L6 12V4z"/>');
    }
};
IconBook_Sharp.styles = style;
IconBook_Sharp = __decorate([
    customElement('mdui-icon-book--sharp')
], IconBook_Sharp);
export { IconBook_Sharp };
