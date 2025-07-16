import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBusinessCenter_Sharp = class IconBusinessCenter_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M10 16v-1H3.01v6H21v-6h-7v1h-4zm12-9h-6V5l-2-2h-4L8 5v2H2v7h8v-2h4v2h8V7zm-8 0h-4V5h4v2z"/>');
    }
};
IconBusinessCenter_Sharp.styles = style;
IconBusinessCenter_Sharp = __decorate([
    customElement('mdui-icon-business-center--sharp')
], IconBusinessCenter_Sharp);
export { IconBusinessCenter_Sharp };
