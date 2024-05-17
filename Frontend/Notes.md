## Processing Recipe Instructions

### Step 1: Splitting Instructions into Steps

When working with recipe instructions, it's common to encounter different formatting styles. To handle these variations, we use a regular expression to split the instructions into distinct steps. This allows us to display each step clearly in our UI.

#### Code Implementation

```js
const instructions = meal.strInstructions
  ? meal.strInstructions.split(/(?:Step|STEP)\s?\d*[:.-]?\s*/)
  : [];

```

### Regular Expression Breakdown

- `(?:Step|STEP)`: Matches the words "Step" or "STEP". The `?:` syntax is used for non-capturing groups, meaning it matches the text without creating a backreference.
- `\s?`: Matches an optional whitespace character. This accounts for formats where there may or may not be a space after "Step".
- `\d*`: Matches zero or more digits. This handles steps that may be numbered, such as "Step 1", "Step 2", etc.
- `[:.-]?`: Matches an optional colon, period, or hyphen. This handles different punctuation that may follow the step number.
- `\s*`: Matches zero or more whitespace characters. This ensures that any spaces following the punctuation are also accounted for.

#

## Always Remember `LocalStorage` returns String