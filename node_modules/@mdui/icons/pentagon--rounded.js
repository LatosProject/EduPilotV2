import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPentagon_Rounded = class IconPentagon_Rounded extends LitElement {
    render() {
        return svgTag('<path d="m2.47 10.42 3.07 9.22c.28.81 1.04 1.36 1.9 1.36h9.12a2 2 0 0 0 1.9-1.37l3.07-9.22c.28-.84-.03-1.76-.75-2.27L13.15 2.8a2 2 0 0 0-2.29 0L3.22 8.14c-.72.51-1.03 1.44-.75 2.28z"/>');
    }
};
IconPentagon_Rounded.styles = style;
IconPentagon_Rounded = __decorate([
    customElement('mdui-icon-pentagon--rounded')
], IconPentagon_Rounded);
export { IconPentagon_Rounded };
