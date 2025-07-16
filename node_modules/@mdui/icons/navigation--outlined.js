import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNavigation_Outlined = class IconNavigation_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m12 7.27 4.28 10.43-3.47-1.53-.81-.36-.81.36-3.47 1.53L12 7.27M12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z"/>');
    }
};
IconNavigation_Outlined.styles = style;
IconNavigation_Outlined = __decorate([
    customElement('mdui-icon-navigation--outlined')
], IconNavigation_Outlined);
export { IconNavigation_Outlined };
