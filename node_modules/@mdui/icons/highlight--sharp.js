import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHighlight_Sharp = class IconHighlight_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m6 14 3 3v5h6v-5l3-3V9H6v5zm5-12h2v3h-2V2zM3.5 5.88l1.41-1.41 2.12 2.12L5.62 8 3.5 5.88zm13.46.71 2.12-2.12 1.41 1.41L18.38 8l-1.42-1.41z"/>');
    }
};
IconHighlight_Sharp.styles = style;
IconHighlight_Sharp = __decorate([
    customElement('mdui-icon-highlight--sharp')
], IconHighlight_Sharp);
export { IconHighlight_Sharp };
