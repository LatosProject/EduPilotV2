import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMms_Sharp = class IconMms_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 2H2v20l4-4h16V2zM5 14l3.5-4.5 2.5 3.01L14.5 8l4.5 6H5z"/>');
    }
};
IconMms_Sharp.styles = style;
IconMms_Sharp = __decorate([
    customElement('mdui-icon-mms--sharp')
], IconMms_Sharp);
export { IconMms_Sharp };
