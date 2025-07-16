import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconExplicit_Sharp = class IconExplicit_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3v18h18V3zm-6 6h-4v2h4v2h-4v2h4v2H9V7h6v2z"/>');
    }
};
IconExplicit_Sharp.styles = style;
IconExplicit_Sharp = __decorate([
    customElement('mdui-icon-explicit--sharp')
], IconExplicit_Sharp);
export { IconExplicit_Sharp };
