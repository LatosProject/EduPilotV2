import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconQuestionAnswer_Rounded = class IconQuestionAnswer_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M20 6h-1v8c0 .55-.45 1-1 1H6v1c0 1.1.9 2 2 2h10l4 4V8c0-1.1-.9-2-2-2zm-3 5V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v13l4-4h9c1.1 0 2-.9 2-2z"/>');
    }
};
IconQuestionAnswer_Rounded.styles = style;
IconQuestionAnswer_Rounded = __decorate([
    customElement('mdui-icon-question-answer--rounded')
], IconQuestionAnswer_Rounded);
export { IconQuestionAnswer_Rounded };
