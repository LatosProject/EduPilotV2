import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDone_Outlined = class IconDone_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>');
    }
};
IconDone_Outlined.styles = style;
IconDone_Outlined = __decorate([
    customElement('mdui-icon-done--outlined')
], IconDone_Outlined);
export { IconDone_Outlined };
