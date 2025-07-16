import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconGasMeter_Rounded = class IconGasMeter_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M16 4h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1h-2V3c0-.55-.45-1-1-1s-1 .45-1 1v1H8C5.79 4 4 5.79 4 8v10c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm-4 14c-1.38 0-2.5-1.1-2.5-2.46 0-1.02.38-1.35 2.12-3.35.2-.23.56-.23.75 0 1.73 1.99 2.12 2.34 2.12 3.35C14.5 16.9 13.38 18 12 18zm3-8H9c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1z"/>');
    }
};
IconGasMeter_Rounded.styles = style;
IconGasMeter_Rounded = __decorate([
    customElement('mdui-icon-gas-meter--rounded')
], IconGasMeter_Rounded);
export { IconGasMeter_Rounded };
