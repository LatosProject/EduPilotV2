import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPushPin_Sharp = class IconPushPin_Sharp extends LitElement {
    render() {
        return svgTag('<path fill-rule="evenodd" d="M16 9V4h2V2H6v2h2v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z"/>');
    }
};
IconPushPin_Sharp.styles = style;
IconPushPin_Sharp = __decorate([
    customElement('mdui-icon-push-pin--sharp')
], IconPushPin_Sharp);
export { IconPushPin_Sharp };
