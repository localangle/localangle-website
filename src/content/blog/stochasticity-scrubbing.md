---
title: "Stochasticity scrubbing"
date: 2026-04-09
description: "LLM outputs can be made trustworthy when we treat hallucination risk as a problem to engineer around, not an insurmountable barrier."
---

As journalists we rightly get wound up about the tendency of LLMs to hallucinate. However, we wrongly assume that because LLMs sometimes hallucinate, they cannot be trusted for important tasks.

This instinct does not serve us. Better to acknowledge the limitations of the models, then engineer solutions around those limitations when the right opportunities present themselves.

This requires some creativity. I'll use recipes as an example.

If you haven't read some of the [technical lore behind how NYT Cooking was created](https://archive.nytimes.com/open.blogs.nytimes.com/2015/04/09/extracting-structured-data-from-recipes-using-conditional-random-fields/), you should. It's a tribute to the talented technologists who work at The Times, as well as the seemingly unlimited resources that only The Times can access.

In short, when they set out to create the initial recipe database that became NYT Cooking, they wanted to base it on recipes Times writers had published for years in their archives.

This was hard, to say the least. It was also more than 10 years ago, and now large language models can largely handle the complex parsing and structuring that was required.

Let's say I want to turn a narrative recipe into [this structured schema](https://schema.org/Recipe).

Nowadays, with the right prompt, a model can produce a reasonable first pass.

However, this also poses a problem. How do we know the result is correct? How do we know the model didn't hallucinate ingredients or leave something out? We don't. When the model first produces the output, our level of trust in it is functionally zero.

At this point our job becomes building our trust in the output to an acceptable level (another example of [turning problems into other problems](https://localangle.co/blog/turning-problems-into-other-problems)). We can do this by scrubbing out the stochasticity and replacing it with determinism.

---

How might we do this?

Rewinding to the beginning: Rather than asking the model to produce the output itself, we could have asked it to write deterministic code to produce the outputs. That's an option, however it would also likely be brittle and hard to generalize.

So given the model's output, what else could I do? One option would be to ask the model to return the exact article text corresponding to each step, ingredient and other piece of structured information. I could then verify that against the original text to ensure the provenance of every item and guarantee no hallucinations.

What about omissions? I could do something similar. A [suffix automaton](https://en.wikipedia.org/wiki/Suffix_automaton) or similar technique could help me spot strings that appear in the input but not the output, which I could then verify.

Another option would be vibe coding a review interface with a very simple UI, allowing a human to check the results by hand more quickly than they might otherwise. This would turn our extraction problem into a much simpler verification problem.

I could reconstruct the input from the output, then ask LLMs to compare them and extract chunks of text that appear missing or don't match. Still probabilistic, but depending on the problem you're trying to solve, it might be good enough.

And so on. All of these techniques scrub the randomness from our outputs, leaving us with clean and deterministic results and building trust to a level that satisfies our needs, depending on the use case.

The point is not the techniques themselves. It's that our hesitations about the trustworthiness of LLM outputs can often be overcome if we treat them as a problem to solve, rather than an insurmountable shortcoming.

Being willing to engage with these problems, rather than simply throwing up our hands, can take us a long way.
