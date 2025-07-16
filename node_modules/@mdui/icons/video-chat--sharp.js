import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVideoChat_Sharp = class IconVideoChat_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M2 2v20l4-4h16V2H2zm15 11-2-1.99V14H7V6h8v2.99L17 7v6z"/>');
    }
};
IconVideoChat_Sharp.styles = style;
IconVideoChat_Sharp = __decorate([
    customElement('mdui-icon-video-chat--sharp')
], IconVideoChat_Sharp);
export { IconVideoChat_Sharp };
