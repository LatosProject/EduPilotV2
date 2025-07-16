import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCheckroom_Rounded = class IconCheckroom_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M21.6 18.2 13 11.75v-.91a3.496 3.496 0 0 0-.18-6.75c-1.76-.4-3.37.53-4.02 1.98-.3.67.18 1.43.91 1.43.39 0 .75-.22.9-.57A1.5 1.5 0 0 1 12 6c.83 0 1.5.67 1.5 1.5 0 .84-.69 1.52-1.53 1.5-.54-.01-.97.45-.97.99v1.76L2.4 18.2c-.77.58-.36 1.8.6 1.8h18c.96 0 1.37-1.22.6-1.8zM6 18l6-4.5 6 4.5H6z"/>');
    }
};
IconCheckroom_Rounded.styles = style;
IconCheckroom_Rounded = __decorate([
    customElement('mdui-icon-checkroom--rounded')
], IconCheckroom_Rounded);
export { IconCheckroom_Rounded };
