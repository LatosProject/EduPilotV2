import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVideoStable_Sharp = class IconVideoStable_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M2 4v16h20V4H2zm2 14V6h2.95l-2.33 8.73L16.82 18H4zm16 0h-2.95l2.34-8.73L7.18 6H20v12z"/>');
    }
};
IconVideoStable_Sharp.styles = style;
IconVideoStable_Sharp = __decorate([
    customElement('mdui-icon-video-stable--sharp')
], IconVideoStable_Sharp);
export { IconVideoStable_Sharp };
