import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconStraight_Rounded = class IconStraight_Rounded extends LitElement {
    render() {
        return svgTag('<path d="m13 6.83.88.88a.996.996 0 1 0 1.41-1.41L12.7 3.71a.996.996 0 0 0-1.41 0L8.71 6.29a.996.996 0 1 0 1.41 1.41l.88-.87V20c0 .55.45 1 1 1s1-.45 1-1V6.83z"/>');
    }
};
IconStraight_Rounded.styles = style;
IconStraight_Rounded = __decorate([
    customElement('mdui-icon-straight--rounded')
], IconStraight_Rounded);
export { IconStraight_Rounded };
