import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFestival = class IconFestival extends LitElement {
    render() {
        return svgTag('<path d="M13 5.7V4h3l-1-1.49L16 1h-5v4.7L2 12v10h7v-5l3.03-2L15 17v5h7V12z"/>');
    }
};
IconFestival.styles = style;
IconFestival = __decorate([
    customElement('mdui-icon-festival')
], IconFestival);
export { IconFestival };
