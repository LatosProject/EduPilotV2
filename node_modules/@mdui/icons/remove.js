import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRemove = class IconRemove extends LitElement {
    render() {
        return svgTag('<path d="M19 13H5v-2h14v2z"/>');
    }
};
IconRemove.styles = style;
IconRemove = __decorate([
    customElement('mdui-icon-remove')
], IconRemove);
export { IconRemove };
