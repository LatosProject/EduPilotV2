import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBloodtype_Sharp = class IconBloodtype_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm3 16H9v-2h6v2zm0-5h-2v2h-2v-2H9v-2h2V9h2v2h2v2z"/>');
    }
};
IconBloodtype_Sharp.styles = style;
IconBloodtype_Sharp = __decorate([
    customElement('mdui-icon-bloodtype--sharp')
], IconBloodtype_Sharp);
export { IconBloodtype_Sharp };
