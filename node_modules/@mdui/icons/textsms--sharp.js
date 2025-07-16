import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTextsms_Sharp = class IconTextsms_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 2H2.01L2 22l4-4h16V2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"/>');
    }
};
IconTextsms_Sharp.styles = style;
IconTextsms_Sharp = __decorate([
    customElement('mdui-icon-textsms--sharp')
], IconTextsms_Sharp);
export { IconTextsms_Sharp };
