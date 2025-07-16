import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTextSnippet_Sharp = class IconTextSnippet_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m21 9-6-6H3v18h18V9zM7 7h7v2H7V7zm10 10H7v-2h10v2zm0-4H7v-2h10v2z"/>');
    }
};
IconTextSnippet_Sharp.styles = style;
IconTextSnippet_Sharp = __decorate([
    customElement('mdui-icon-text-snippet--sharp')
], IconTextSnippet_Sharp);
export { IconTextSnippet_Sharp };
