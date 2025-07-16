import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBookmarkAdd = class IconBookmarkAdd extends LitElement {
    render() {
        return svgTag('<path d="M21 7h-2v2h-2V7h-2V5h2V3h2v2h2v2zm-2 14-7-3-7 3V5c0-1.1.9-2 2-2h7a5.002 5.002 0 0 0 5 7.9V21z"/>');
    }
};
IconBookmarkAdd.styles = style;
IconBookmarkAdd = __decorate([
    customElement('mdui-icon-bookmark-add')
], IconBookmarkAdd);
export { IconBookmarkAdd };
