const HTML = `<div class="ben">
  I'm not positioned, just following the normal document flow :)
</div>
<div class="jerry">
  I should be positioned 
</div>`;

const POSITIONING_EXERCISES = [
  {
    description: 'Relative Position: move "jerry" up by 10px and to the right by 20px',
    descriptionDetails: `"relative" behaves the same as "static" (the default value) unless you add some extra 
    properties that will cause it to be adjusted away from its normal position.`,
    html: HTML
  },
  {
    description: 'Fixed Position',
    descriptionDetails: `A "fixed" element is positioned relative to the viewport, which means it always stays in the 
    same place even if the page is scrolled.`,
    html: HTML
  },
  {
    description: 'Absolute Position',
    descriptionDetails: `"absolute" is the trickiest position value. It behaves like "fixed" except relative to the 
    nearest positioned ancestor instead of relative to the viewport. If an absolutely-positioned element has no positioned 
    ancestors, it uses the document body, and still moves along with page scrolling.`,
    html: HTML
  },
  {
    description: 'Sticky Position',
    descriptionDetails: `A "sticky" element toggles between "relative" and "fixed", depending on the user's scroll 
    position. It is positioned relative until a given offset position is met in the viewport - then it sticks in 
    place (like position: fixed).`,
    html: HTML
  }
];

export default POSITIONING_EXERCISES;
