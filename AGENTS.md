# Design direction for this site

This is a working website with a point of view, not a generic startup landing page. Preserve its editorial voice and make design decisions that feel deliberate, useful, and a little surprising—without becoming ornamental or hard to use.

## First: learn the existing visual language

Before changing a page, inspect the current site, its components, its content, and its existing assets. Reuse the parts that have character. If the direction is unclear, describe two or three plausible visual concepts and ask for a choice before undertaking a broad redesign.

Treat the subject matter and actual content as the source of visual identity. Do not reach for a generic "premium SaaS" template or an invented brand system merely to make a page look designed.

## Avoid the familiar AI-generated landing-page look

Do **not** default to any of the following unless the page's content makes a compelling case for it:

- warm off-white or oatmeal background paired with rust/orange accents
- rows of softly rounded cards, pill-shaped chips, or tag clouds
- oversized centered hero copy followed by an abstract gradient blob or dashboard mockup
- glassmorphism, blurred floating panels, faint grid backgrounds, and decorative sparkles
- a predictable progression of hero → logo strip → feature-card grid → testimonial cards → giant CTA
- a single interchangeable sans-serif at every scale, especially with uniformly loose spacing
- “AI” visual shorthand: glowing nodes, neural-network lines, cosmic gradients, robot imagery, or generic data streams

These are not forbidden ingredients. They are a warning sign: use one only when it earns its place, and counterbalance it with more specific choices.

## Make a clear visual argument

For any new page or substantial redesign, establish the following before implementation:

1. **One core metaphor or reference.** It should arise from the organization, the audience, or the work—not from contemporary product-design fashion.
2. **A purposeful type system.** Choose display and text typography for their distinct roles. Use contrast in scale, weight, measure, and rhythm rather than treating headings as merely larger body text.
3. **A restrained palette.** Start from a base, ink, and one intentional accent. Use color to communicate hierarchy, interaction, and meaning—not as background decoration.
4. **A distinctive spatial rule.** For example: an asymmetric editorial column, a strong baseline rhythm, image-led interruptions, a structured index, or an intentionally dense information layout. Apply it consistently, then break it sparingly for emphasis.
5. **At least one site-specific visual asset or motif.** Prefer real photography, maps, documents, reporting artifacts, diagrams, textures, or custom illustration over stock gradients and generic UI decoration.

Write these decisions briefly in the PR description or task summary. If you cannot explain why a design belongs to this site, simplify it.

## Composition and components

- Design the page as a sequence of editorial moments, not a collection of reusable boxes.
- Let important content have an appropriate amount of room, but do not use empty space as a substitute for hierarchy.
- Vary modules when their content calls for it. A case study, a list of services, a project archive, and a contact invitation should not all use the same card pattern.
- Prefer visible structure—rules, columns, labels, indexes, captions, or numbered sections—when it helps a visitor understand the content.
- Use borders, radii, shadows, and animation sparingly. They should signal a relationship or interaction.
- Use icons only when they clarify an action or concept. Do not add a generic icon to every heading.
- Favor real, specific language in headings and calls to action. Avoid empty innovation vocabulary such as “unlock,” “seamless,” “next-generation,” and “reimagine.”

## Interaction and accessibility

- Respect `prefers-reduced-motion`; keep animation short, functional, and optional in effect.
- Maintain strong contrast, semantic landmarks, keyboard access, visible focus states, readable text sizes, and responsive layouts.
- Build mobile intentionally. Do not merely stack a desktop grid and call it finished.
- Optimize images and avoid motion or visual effects that compromise performance.

## Required design review

Before declaring visual work complete:

1. Review the page at desktop and mobile widths using a rendered preview or screenshots.
2. Ask: “Could this plausibly be mistaken for a template generated for a different company?” If yes, identify and revise the most generic section.
3. Remove at least one decorative element that does not improve comprehension, wayfinding, credibility, or delight.
4. Check that each major section has a content-driven reason to exist and that the primary action is clear.
5. Verify the accessibility and interaction requirements above.

When in doubt, choose specificity, clarity, and editorial confidence over trendiness, ornament, or an impressive-looking component library.
