import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSentimentNeutral_Outlined = class IconSentimentNeutral_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M9 14h6v1.5H9z"/><circle cx="15.5" cy="9.5" r="1.5"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>');
    }
};
IconSentimentNeutral_Outlined.styles = style;
IconSentimentNeutral_Outlined = __decorate([
    customElement('mdui-icon-sentiment-neutral--outlined')
], IconSentimentNeutral_Outlined);
export { IconSentimentNeutral_Outlined };
