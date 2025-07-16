import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBatterySaver_TwoTone = class IconBatterySaver_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M16 4h-2V2h-4v2H8c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-1 10h-2v2h-2v-2H9v-2h2v-2h2v2h2v2z"/>');
    }
};
IconBatterySaver_TwoTone.styles = style;
IconBatterySaver_TwoTone = __decorate([
    customElement('mdui-icon-battery-saver--two-tone')
], IconBatterySaver_TwoTone);
export { IconBatterySaver_TwoTone };
