import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTextRotationDown_Sharp = class IconTextRotationDown_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m6 20 3-3H7V4H5v13H3l3 3zm6.2-11.5v5l-2.2.9v2.1l11-4.75v-1.5L10 5.5v2.1l2.2.9zm6.82 2.5L14 12.87V9.13L19.02 11z"/>');
    }
};
IconTextRotationDown_Sharp.styles = style;
IconTextRotationDown_Sharp = __decorate([
    customElement('mdui-icon-text-rotation-down--sharp')
], IconTextRotationDown_Sharp);
export { IconTextRotationDown_Sharp };
