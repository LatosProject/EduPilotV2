import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconQuestionAnswer_Outlined = class IconQuestionAnswer_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z"/>');
    }
};
IconQuestionAnswer_Outlined.styles = style;
IconQuestionAnswer_Outlined = __decorate([
    customElement('mdui-icon-question-answer--outlined')
], IconQuestionAnswer_Outlined);
export { IconQuestionAnswer_Outlined };
