import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDrafts_Sharp = class IconDrafts_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21.99 6.86 12 1 2 6.86V20h20l-.01-13.14zM12 13 3.74 7.84 12 3l8.26 4.84L12 13z"/>');
    }
};
IconDrafts_Sharp.styles = style;
IconDrafts_Sharp = __decorate([
    customElement('mdui-icon-drafts--sharp')
], IconDrafts_Sharp);
export { IconDrafts_Sharp };
