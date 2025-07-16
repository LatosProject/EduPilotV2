import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconClass_Sharp = class IconClass_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M20 2H4v20h16V2zM6 4h5v8l-2.5-1.5L6 12V4z"/>');
    }
};
IconClass_Sharp.styles = style;
IconClass_Sharp = __decorate([
    customElement('mdui-icon-class--sharp')
], IconClass_Sharp);
export { IconClass_Sharp };
