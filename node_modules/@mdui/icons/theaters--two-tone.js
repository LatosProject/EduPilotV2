import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTheaters_TwoTone = class IconTheaters_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm6 10h-4V5h4v14zm4-2h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/><path d="M10 5h4v14h-4z" opacity=".3"/>');
    }
};
IconTheaters_TwoTone.styles = style;
IconTheaters_TwoTone = __decorate([
    customElement('mdui-icon-theaters--two-tone')
], IconTheaters_TwoTone);
export { IconTheaters_TwoTone };
