---
name: write-plain
description: Rewrite or explain text with clear thought, precise words, natural sentences and no unnecessary language. Preserve meaning before brevity. Use when the user invokes $write-plain or /write-plain, asks for plain English, says "write this plain", "make this easier to read" or "rewrite this clearly", or asks for a clear explanation.
---

# Write Plain

Write with clear thought, precise words, natural sentences and no unnecessary language. Preserve meaning before optimising brevity. This is Working AI's practical synthesis of writing principles for people who need clear, accurate prose.

The skill adapts selected principles from ASD-STE100 and clear prose guidance. It uses a flexible approach rather than the full controlled vocabulary and rules of the standard. It is not formal ASD-STE100 compliance.

## What to do

Two modes. Pick the one that fits the request.

- **Rewrite**: the user pastes text. Return the same content in this style.
- **Explain**: the user names a topic. Write the explanation in this style from the start.

Before writing, identify the exact point the author wants to make. State that point directly, rather than approaching it through vague or approximate wording.

Return only the finished text. Add no preamble, no list of changes and no closing offer. Keep the user's structure (headings, bullets, tables, numbering) unless it is the cause of the problem.

## The rules

1. **Short sentences.** Aim for 20 words or fewer in instructions and 25 or fewer in descriptions. Split a long sentence at its second idea. Go longer only when a split would break the logic.
2. **One idea per sentence, one topic per paragraph.** Keep paragraphs to about six sentences.
3. **Active voice.** Name who or what acts. Use the passive only when the actor is unknown or does not matter.
4. **Instructions use the imperative.** "Check the limit before you approve the trade."
5. **One word, one meaning.** Pick one term for each thing and keep it. Do not swap in synonyms for variety. Readers treat a new word as a new thing.
6. **Plain verbs.** "Use" not "utilise", "start" not "commence", "show" not "demonstrate". Avoid phrasal verbs when one plain verb exists.
7. **No idioms or figures of speech.** Say the literal thing.
8. **Keep the small words.** Keep "a", "the" and "that". Dropping them for brevity makes text harder to parse.
9. **Simple tenses.** Prefer present, past and future. Avoid perfect and progressive forms where a simple form works.
10. **Limit noun stacks.** Three nouns in a row is the practical limit. Break longer chains with "of", "for" or "in".
11. **Put the condition first.** "If the ratio falls below the limit, notify ALCO."
12. **Use "if" and "when" to show logic.** Avoid vague links such as "given that" or "insofar as".

## Where to soften the standard

Keep these when a rigid application of a style rule would reduce clarity or precision:

- **Technical terms and acronyms** that the reader knows (LCR, HQLA, run-off rate, non-operational deposits). Do not replace precise terms with vague everyday words.
- **A longer sentence** when splitting it would separate a cause from its effect.
- **Words outside the approved STE dictionary** when the plain substitute loses precision.
- **The author's tone**, when it carries meaning. Remove flourish, not intent.

## Hard limits

- Preserve the intended action, certainty, obligation, timing and scope, as well as facts, figures, names, dates, quotations and the author's conclusion. Preserve logical relationships, conditions, cause, qualifications and meaningful tone. These limits override every style rule and dial.
- Keep distinctions that affect meaning. "May need to be reconsidered" is not "may need to change". Do not turn "needs to" into "must" without the author's authorisation. "Intended to support a decision" does not say that it "supports a decision". Keep "assess assumptions" when evaluation is intended; do not replace it with a vague "check".
- Do not strengthen advice into a requirement or turn a possibility, intention or tentative assessment into an established fact. Do not change who acts, when they act, or what the action covers.
- Do not add information the source does not contain.
- If a sentence is ambiguous and a rewrite needs a guess, rewrite it your best way and add one line after the text: "Check: [the sentence], I read it as [your reading]."
- Do not call the result "ASD-STE100 compliant". It adapts selected principles.
- Use British spelling unless the source uses another. Do not use em dashes. Use a full stop or a colon.

## Dials

If the user says "strict" or "full STE", tighten to 20 words per sentence in all text, no passive, and replace technical terms only where a standard STE term exists. If the user says "light", keep the first six rules and relax the rest. Both settings preserve meaning and remain adaptations, not formal compliance.

## Example

**Input:** Deposit behaviour assumptions matter a great deal here, since a small change in the run-off rate applied to non-operational corporate deposits can move the ratio materially.

**Output:** Deposit behaviour assumptions are important here. A small change in the run-off rate for non-operational corporate deposits can change the ratio materially.

**Input:** In practice, treasury teams have to balance the cost of holding these assets against the regulatory floor and their own internal buffers.

**Output:** Treasury teams have to balance the cost of holding these assets against the regulatory minimum and their own internal buffers.

## Clear prose rules

- **Choose the exact word.** Use the word that expresses the intended meaning, not a near synonym. Preserve distinctions in intended action, certainty, obligation, cause, timing and scope.
- **Prefer short, familiar words.** Replace a foreign phrase, scientific term or jargon with everyday English when the meaning stays exact. Keep a necessary technical term and explain it when the reader needs help.
- **Cut surplus words.** Remove repetition, filler and words that add no meaning. Keep articles, logical links, qualifications and necessary details. Brevity must not remove information needed to understand or act.
- **Write naturally.** Prefer words people use in ordinary conversation and words the intended reader knows. A word's long-established use in good writing is another useful signal, not a requirement. Do not invent literary examples or reject a precise modern term because it is new.
- **Keep the form clean.** Check grammar, punctuation, sentence construction and consistent formatting. Use a simple, straightforward style.
- **Avoid stock figures of speech.** The existing preference for literal language applies. Remove familiar metaphors, similes and clichés unless preserving an exact quotation.
- **Use judgement.** Relax a style rule when following it would make the writing awkward, unclear or inaccurate. This exception never permits changed facts, invented detail or a changed conclusion.

## Final review

Read the finished text once before returning it. Compare it with the source. Check that the intended action, certainty, obligation, timing, scope and logical relationships remain the same. Check that it says exactly what is intended, uses precise words, includes necessary detail, and contains no surplus wording or grammar errors. For a questionable word, ask whether it is short, used in ordinary speech, widely understood by the reader, and established in good prose. Treat these as guides, not four mandatory tests. Return the finished text without showing this review.

## Influences and attribution

This is Working AI's original implementation and packaging of a practical synthesis. The underlying writing principles belong to their respective sources.

- **The Economist and George Orwell:** draws on The Economist's guidance on clarity of thought and expression, including its presentation of Orwell's six rules. The six rules originate in Orwell's 1946 essay, *Politics and the English Language*. Sources: [The Economist's guide](https://education.economist.com/blog/what-to-read/writing-with-style) and [Orwell's essay](https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/politics-and-the-english-language/).
- **ASD-STE100:** adapts selected principles on sentence length, active voice, consistent vocabulary and clear instructions. Necessary technical terminology is retained. The standard also permits technical nouns and technical verbs. Source: [ASD-STE100, Issue 9](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf). This skill does not apply the full standard or claim measured compliance.
- **Andrej Karpathy:** draws on his suggestion to soften ASD-STE100 when prompting AI for readable explanations. Source: [original post](https://x.com/karpathy/status/2105819303471976479), with the relevant passage read through a [mirrored copy](https://x.twstalker.com/karpathy/status/2105819303471976479) because direct access to X was unavailable. This credits the prompting idea, not authorship of STE or this skill.

No endorsement or certification is claimed.
