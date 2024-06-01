---
layout: ../../layouts/NoteLayout.astro
title: "Hello, World!"
description: "Hello, World! | tufusaのノート"
date: 2024/05/31
---

## Hello, World!

こんにちは、tufusaです。  
やっとここをブログっぽく整理しました。  
そういうわけで、記念すべき最初のノートです。

## Astroがすごい

このサイトは[Astro](https://astro.build/)で書かれていますが、このページはただのMarkdownです。  
というのもAstroは[ビルドインでMarkdownをサポート](https://docs.astro.build/ja/guides/markdown-content/)しており、
Markdownを書くだけで勝手にHTMLにしてくれるし、Frontmatterも使えるのです。すごい。  
MDXもサポートしているので、今後そちらに移行するかもしれません。

## スタイリング

私のTailwindが火を噴くぜ。
0からスタイリングするのが好きなので楽しかった。  
主な要素を列挙してみます。

# H1
## H2
### H3

- this
- is
- a
- list.

1. this
2. is
3. a
4. numbered
5. list.

---

*イタリック*  
**ボールド**  
***†ボールドイタリック†***


`sudo rm -rf /*`

```ts
// ビルドインのMarkdownサポートで色まで付けてくれます。
console.log("this is a code block.");
```


[このサイトへのリンク](https://tufusa.net/)

![私のGitHubのアイコン](https://avatars.githubusercontent.com/u/77904659)

| カラム1 | カラム2 | カラム3 |
| :-----: | :-----: | :-----: |
|   1-1   |   1-2   |   1-3   |
|   2-1   |   2-2   |   2-3   |

## 作ったスタイル

最後に作成したTailwind CSSのスタイルを掲載して終わります。

```
text-base text-gray-200
[&>h1]:mb-1 [&>h1]:mt-6 [&>h1]:w-full [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:text-white lg:[&>h1]:text-4xl
[&>h2]:mb-1 [&>h2]:mt-6 [&>h2]:w-full [&>h2]:text-xl [&>h2]:font-bold [&>h2]:text-main lg:[&>h2]:text-2xl
[&>h3]:mb-1 [&>h3]:mt-6 [&>h3]:w-full [&>h3]:text-lg [&>h3]:font-bold [&>h3]:text-white lg:[&>h3]:text-xl
[&>hr]:my-5 [&>hr]:border-slate-600
[&>ol]:my-3 [&>ol]:list-inside [&>ol]:list-decimal marker:[&>ol]:text-slate-400
[&>p>a]:text-main [&>p>a]:underline [&>p>a]:decoration-from-font hover:[&>p>a]:no-underline
[&>p>code]:rounded-sm [&>p>code]:bg-zinc-800 [&>p>code]:px-1 [&>p>code]:text-main
[&>p>img]:my-5
[&>p]:leading-7
[&>pre]:my-3 [&>pre]:rounded-sm [&>pre]:bg-gray-800 [&>pre]:p-2
[&>table]:my-3 [&>table]:table-auto [&>table]:border [&>table]:border-slate-600
[&>ul]:my-3 [&>ul]:list-inside [&>ul]:list-disc marker:[&>ul]:text-slate-400
[&_td]:border [&_td]:border-slate-600 [&_td]:px-4 [&_td]:py-1.5
[&_th]:border [&_th]:border-slate-600 [&_th]:bg-slate-800 [&_th]:px-4 [&_th]:py-1.5
```
