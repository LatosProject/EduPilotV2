import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconReplay_TwoTone = class IconReplay_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="m7 6 5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8V1L7 6z"/>');
    }
};
IconReplay_TwoTone.styles = style;
IconReplay_TwoTone = __decorate([
    customElement('mdui-icon-replay--two-tone')
], IconReplay_TwoTone);
export { IconReplay_TwoTone };
