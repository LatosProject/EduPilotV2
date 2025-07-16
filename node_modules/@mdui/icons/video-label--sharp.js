import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVideoLabel_Sharp = class IconVideoLabel_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M23 3H1v18h22V3zm-2 13H3V5h18v11z"/>');
    }
};
IconVideoLabel_Sharp.styles = style;
IconVideoLabel_Sharp = __decorate([
    customElement('mdui-icon-video-label--sharp')
], IconVideoLabel_Sharp);
export { IconVideoLabel_Sharp };
