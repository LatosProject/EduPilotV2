import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCircle_Rounded = class IconCircle_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"/>');
    }
};
IconCircle_Rounded.styles = style;
IconCircle_Rounded = __decorate([
    customElement('mdui-icon-circle--rounded')
], IconCircle_Rounded);
export { IconCircle_Rounded };
