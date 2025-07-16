import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNearMe_Sharp = class IconNearMe_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 3 3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"/>');
    }
};
IconNearMe_Sharp.styles = style;
IconNearMe_Sharp = __decorate([
    customElement('mdui-icon-near-me--sharp')
], IconNearMe_Sharp);
export { IconNearMe_Sharp };
