import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBolt_TwoTone = class IconBolt_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M11 21h-1l1-7H7.5c-.88 0-.33-.75-.31-.78C8.48 10.94 10.42 7.54 13.01 3h1l-1 7h3.51c.4 0 .62.19.4.66C12.97 17.55 11 21 11 21z"/>');
    }
};
IconBolt_TwoTone.styles = style;
IconBolt_TwoTone = __decorate([
    customElement('mdui-icon-bolt--two-tone')
], IconBolt_TwoTone);
export { IconBolt_TwoTone };
