import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconContrast_Rounded = class IconContrast_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm1-17.93c3.94.49 7 3.85 7 7.93s-3.05 7.44-7 7.93V4.07z"/>');
    }
};
IconContrast_Rounded.styles = style;
IconContrast_Rounded = __decorate([
    customElement('mdui-icon-contrast--rounded')
], IconContrast_Rounded);
export { IconContrast_Rounded };
