import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPlayDisabled_Sharp = class IconPlayDisabled_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M16.45 13.62 19 12 8 5v.17zM2.81 2.81 1.39 4.22 8 10.83V19l4.99-3.18 6.79 6.79 1.41-1.42z"/>');
    }
};
IconPlayDisabled_Sharp.styles = style;
IconPlayDisabled_Sharp = __decorate([
    customElement('mdui-icon-play-disabled--sharp')
], IconPlayDisabled_Sharp);
export { IconPlayDisabled_Sharp };
