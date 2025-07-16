import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconGroupWork_Outlined = class IconGroupWork_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><circle cx="8" cy="14" r="2"/><circle cx="12" cy="8" r="2"/><circle cx="16" cy="14" r="2"/>');
    }
};
IconGroupWork_Outlined.styles = style;
IconGroupWork_Outlined = __decorate([
    customElement('mdui-icon-group-work--outlined')
], IconGroupWork_Outlined);
export { IconGroupWork_Outlined };
