import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCreate_Sharp = class IconCreate_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM21.41 6.34l-3.75-3.75-2.53 2.54 3.75 3.75 2.53-2.54z"/>');
    }
};
IconCreate_Sharp.styles = style;
IconCreate_Sharp = __decorate([
    customElement('mdui-icon-create--sharp')
], IconCreate_Sharp);
export { IconCreate_Sharp };
