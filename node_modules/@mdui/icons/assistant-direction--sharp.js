import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAssistantDirection_Sharp = class IconAssistantDirection_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M13.5 10H8v5h2v-3h3.5v2.5L17 11l-3.5-3.5V10zM12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm8.31 11-8.34 8.37L3.62 12l8.34-8.37L20.31 12z"/>');
    }
};
IconAssistantDirection_Sharp.styles = style;
IconAssistantDirection_Sharp = __decorate([
    customElement('mdui-icon-assistant-direction--sharp')
], IconAssistantDirection_Sharp);
export { IconAssistantDirection_Sharp };
