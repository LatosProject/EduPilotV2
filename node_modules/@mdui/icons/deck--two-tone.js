import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDeck_TwoTone = class IconDeck_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M12 4.44 8.34 7h7.32z" opacity=".3"/><path d="M22 9 12 2 2 9h9v13h2V9h9zM12 4.44 15.66 7H8.34L12 4.44z"/><path d="m4.14 12-1.96.37.82 4.37V22h2l.02-4H7v4h2v-6H4.9zm14.96 4H15v6h2v-4h1.98l.02 4h2v-5.26l.82-4.37-1.96-.37z"/>');
    }
};
IconDeck_TwoTone.styles = style;
IconDeck_TwoTone = __decorate([
    customElement('mdui-icon-deck--two-tone')
], IconDeck_TwoTone);
export { IconDeck_TwoTone };
