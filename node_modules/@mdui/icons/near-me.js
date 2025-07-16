import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNearMe = class IconNearMe extends LitElement {
    render() {
        return svgTag('<path d="M21 3 3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"/>');
    }
};
IconNearMe.styles = style;
IconNearMe = __decorate([
    customElement('mdui-icon-near-me')
], IconNearMe);
export { IconNearMe };
