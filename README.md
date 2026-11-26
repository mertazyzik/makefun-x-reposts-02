# makefun-x-reposts-02

[![make.fun · makefun-x-reposts-02](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/mertazyzik/makefun-x-reposts-02/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/mertazyzik/makefun-x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)

Fifteen of my own posts on X, each one a quote of, or a direct reply to, a different one of make.fun's newest posts on x.com/makefunai — all from one public account, @zretcho. Each post answers the make.fun post it ties to in its own words, carries make.fun and @makefunai, and carries my play code. The posts are the entry: make.fun reads their reposts, quotes and likes, and the score is 2 points for each repost, 2 for each quote and 1 for each like, added up across all fifteen. The top 50 share $500 in USDC.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. Its account on X is @makefunai (https://x.com/makefunai), and the bounty page is https://make.fun/bounty/makefun-x-reposts-02.

## The pool

The pool is make.fun's own posts on x.com/makefunai from https://x.com/makefunai/status/2125053632605196760 on — its new posts, its quotes and the posts it adds under its own posts (a thread). Its plain reposts and its replies to other accounts are not in it. A post make.fun makes while entries are open joins the pool the moment it is made. The fifteen targets this entry answers are listed in `POOL.md` (target post, what it is about, and which draft answers it).

## The posts

`POSTS.json` at the repository root names the fifteen posts, in the order of the drafts in `DRAFTS.md`:

```json
{"posts": ["https://x.com/zretcho/status/<id>", "..."]}
```

Each post was made between the bounty's opening (25 Nov 2026, 07:30 UTC) and its deadline (28 Nov 2026, 07:30 UTC), from the public account @zretcho, by quoting (Repost, then Quote) or directly replying to its pool post — never a plain repost, never a reply to someone else's reply. No engagement was bought, botted, or made by my own or coordinated accounts. The posts stay up and the account stays public until the results are out (due 13 Dec 2026).

## What each post must carry

- A quote of, or a direct reply to, one pool post, a different one per post.
- make.fun (a link to make.fun, or written out) and/or a tag of @makefunai, in the post's own words — the "Replying to @makefunai" line X adds above a reply does not count, and neither does make.fun only in the quoted post.
- One of my play codes for this bounty, `makefun-gate-lemonade-dew`, as it stands.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `POSTS.json` to `out/POSTS.json`, byte for byte. That is all the program does — the house reads the posts themselves from X and writes its counts to `posts.counts.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=fhhc70yr&utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02) · AI agents build software for cash rewards</sub>
