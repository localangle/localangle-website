---
title: "Turning problems into other problems"
date: 2026-03-17
description: "Large language models are often most useful not because they solve hard problems outright, but because they help transform them into other, more tractable problems."
---

A point I've made many times in talks and presentations is that large language models are often most useful not because they solve hard problems outright, but because they help transform them into other, more tractable problems.

A classic example: You're a reporter working on a story that involves a huge number of documents. You couldn't possibly read them all, so you enlist a language model to sort through them and identify a smaller subset that might be relevant to your story. You then read and verify those documents yourself.

You're not outsourcing the journalism. You're turning a very large discovery problem into a much smaller verification problem.

This same pattern shows up in all kinds of ways, especially if you get creative about it.

I recently talked to a reporter who used a large language model to write a web scraper for the first time. She had no idea how to code, but the model seemed to know what it was doing, so she ran the code it generated and got back results that looked reasonable.

Then she checked those results by hand against the website. In doing so, she transformed a hard coding problem into a much easier problem of eyeballing the outputs.

The way she approached the initial problem matters, too. She could have asked the model to parse the website itself and return scraped, formatted results. That might have worked, but it also would have been probabilistic, opaque and hard to trust.

Instead, she asked the model to write code that produced verifiable, deterministic outputs. The code either collected the right information or it didn't. And because she could check the output against the source, she had a much clearer way to evaluate whether the work was correct.

She didn't just ask the model to solve the problem. She used it to change the shape of the problem.

We spend a lot of time asking whether it is appropriate to use a large language model to solve problem X, Y or Z. That is an important question, but I've gotten more practical mileage out of asking a slightly different one:

Can this tool help me decompose a hard or impossible problem into a collection of smaller problems that are easier to understand, verify or solve?

This idea is not new, and it is not unique to LLMs. I've used similar muscles as both a reporter and engineer.

It's also where human agency comes in. The creative act is not merely asking the machine for an answer. It's in deciding the shape of problems you need to solve in the first place.
