import { boolean, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import changelog from '../../../components/00-materials/CHANGELOG.md';
import readme from '../../../components/00-materials/README.md';
import '../../10-atoms/heading';
import '../../10-atoms/text';
import styles from '../story.scss';

const colors = __COLORS_SCSS_AS_STRING__;

export default {
  title: 'Brand Elements/Colors',
  decorators: [withKnobs],
  parameters: {
    readme,
    changelog,
    a11y: { disable: true },
    layout: 'fullscreen',
  },
};

export const Colors = () => {
  const darkmode = boolean('darkmode', false);

  const getColorGroups = scssString => {
    const groups = scssString.split('///');
    const groupsWithColorIds = groups.filter(group => /#\w+/.test(group));

    return groupsWithColorIds.map(group => {
      return {
        name: group.split('\n')[0],
        value: group,
      };
    });
  };

  const getColors = colorGroup => {
    const lines = colorGroup.split('\n');

    const linesWithColorIds = lines.filter(line => /#\w+/.test(line));

    return linesWithColorIds.map(line => {
      return {
        name: line.split(': ')[0],
        code: line.match(/#\w+/),
      };
    });
  };

  const template = html`
    <style>
      div.colorgroupwrapper {
        margin: 0 -10px;
        display: flex;
        flex-wrap: wrap;
      }

      div.colorwrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 5px;
        border: 1px solid lightgrey;
        padding: 5px;
        margin: 10px;
        width: 250px;
      }

      div.colorvisualisation {
        width: 250px;
        height: 50px;
        border-radius: 5px;
        border: 1px solid lightgrey;
        margin-bottom: 5px;
      }

      ${styles}
    </style>

    ${darkmode
      ? html`
          <style>
            body {
              background-color: black;
              color: white;
            }
          </style>
        `
      : ''}

    <div class="accessory-story-content">
      <axa-heading rank="1" variant="secondary">Colors</axa-heading>
      ${getColorGroups(colors).map(group => {
        return html`
          <div id="colorGroup">
            <axa-heading rank="3">${group.name}</axa-heading>
            <div class="colorgroupwrapper">
              ${getColors(group.value).map(color => {
                return html`
                  <div class="colorwrapper">
                    <div
                      class="colorvisualisation"
                      style="background-color: ${color.code};"
                    ></div>
                    <axa-text>
                      ${color.name /* TODO: change to axa-text if bug is fixed */}
                    </axa-text>
                    <axa-text variant="size-2"
                      >${color.code /* TODO: change to axa-text if bug is fixed */}</axa-text
                    >
                  </div>
                `;
              })}
            </div>
          </div>
        `;
      })}
    </div>
  `;

  const wrapper = document.createElement('div');
  wrapper.classList.add('accessory-story-wrapper');

  render(template, wrapper);
  return wrapper;
};
