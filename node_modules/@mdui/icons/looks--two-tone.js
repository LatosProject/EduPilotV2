import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLooks_TwoTone = class IconLooks_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M12 6C5.93 6 1 10.93 1 17h2c0-4.96 4.04-9 9-9s9 4.04 9 9h2c0-6.07-4.93-11-11-11zm0 6c2.76 0 5 2.24 5 5h2c0-3.86-3.14-7-7-7s-7 3.14-7 7h2c0-2.76 2.24-5 5-5z"/>');
    }
};
IconLooks_TwoTone.styles = style;
IconLooks_TwoTone = __decorate([
    customElement('mdui-icon-looks--two-tone')
], IconLooks_TwoTone);
export { IconLooks_TwoTone };
