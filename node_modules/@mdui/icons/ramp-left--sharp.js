import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRampLeft_Sharp = class IconRampLeft_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M13 21h-2V6.83L9.41 8.41 8 7l4-4 4 4-1.41 1.41L13 6.83V9c0 4.27 4.03 7.13 6 8.27l-1.46 1.46c-1.91-1.16-3.44-2.53-4.54-4.02V21z"/>');
    }
};
IconRampLeft_Sharp.styles = style;
IconRampLeft_Sharp = __decorate([
    customElement('mdui-icon-ramp-left--sharp')
], IconRampLeft_Sharp);
export { IconRampLeft_Sharp };
