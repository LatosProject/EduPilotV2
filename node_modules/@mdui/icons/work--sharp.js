import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWork_Sharp = class IconWork_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 6h-6V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H2v15h20V6zm-8 0h-4V4h4v2z"/>');
    }
};
IconWork_Sharp.styles = style;
IconWork_Sharp = __decorate([
    customElement('mdui-icon-work--sharp')
], IconWork_Sharp);
export { IconWork_Sharp };
