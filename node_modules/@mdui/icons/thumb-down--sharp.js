import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconThumbDown_Sharp = class IconThumbDown_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M9.83 23 17 15.82V3H4.69L1 11.6V16h8.31l-1.12 5.38zM19 3h4v12h-4z"/>');
    }
};
IconThumbDown_Sharp.styles = style;
IconThumbDown_Sharp = __decorate([
    customElement('mdui-icon-thumb-down--sharp')
], IconThumbDown_Sharp);
export { IconThumbDown_Sharp };
