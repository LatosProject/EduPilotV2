import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNavigation_Rounded = class IconNavigation_Rounded extends LitElement {
    render() {
        return svgTag('<path d="m12.93 4.26 6.15 14.99c.34.83-.51 1.66-1.33 1.29l-5.34-2.36c-.26-.11-.55-.11-.81 0l-5.34 2.36c-.82.36-1.67-.46-1.33-1.29l6.15-14.99c.33-.83 1.51-.83 1.85 0z"/>');
    }
};
IconNavigation_Rounded.styles = style;
IconNavigation_Rounded = __decorate([
    customElement('mdui-icon-navigation--rounded')
], IconNavigation_Rounded);
export { IconNavigation_Rounded };
