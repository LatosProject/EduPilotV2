import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconToggleOff_Sharp = class IconToggleOff_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zM7 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>');
    }
};
IconToggleOff_Sharp.styles = style;
IconToggleOff_Sharp = __decorate([
    customElement('mdui-icon-toggle-off--sharp')
], IconToggleOff_Sharp);
export { IconToggleOff_Sharp };
