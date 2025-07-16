import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMaximize = class IconMaximize extends LitElement {
    render() {
        return svgTag('<path d="M3 3h18v2H3z"/>');
    }
};
IconMaximize.styles = style;
IconMaximize = __decorate([
    customElement('mdui-icon-maximize')
], IconMaximize);
export { IconMaximize };
