---
title: プロフィールのテキストがロールするようになりました
description: プロフィールのテキストがロールするようになりました | tufusaのノート
date: 2024-12-07
---

## Q. なんで？

A. さあ…………

## 変更

[こちら](/profile#Like)で確認できます(一応[パーマリンク](https://feat-profile-roll-text.tufusa-net.pages.dev/profile#Like)も置いておきます)。

## どうやっているのか

### TL;DR

16秒かけてx方向に`100% ~ -100%`移動するのを無限に繰り返すアニメーションを書いています。これを2個の`div`で半周期(8秒)ずらして再生すれば左右が繋がってループしているように見えるというわけです。

### ちょっと詳しい説明

1. ラッパー`div`とロールさせる`div`を用意する  
どちらも幅を最大にします(分かりやすくするため背景色をつけています)。

```html
<div class="w-full bg-gray-800">
  <div class="w-full bg-gray-600">
    まもなく6番線に電車がまいります
  </div>
</div>
```

<div class="w-full bg-gray-800">
  <div class="w-full bg-gray-600">
    まもなく6番線に電車がまいります
  </div>
</div>

2. アニメーションを付ける  
親と子の幅を同じにしておくことで、`100% ~ -100%`でちょうど右端から左端まで移動するようになります。  
アニメーション`animate-roll`は[Tailwind CSSのドキュメント](https://tailwindcss.com/docs/animation#customizing-your-theme)を参考にスタイル拡張で定義します。

<details class="[&>:not(summary)]:ml-4">
<summary><code>animate-roll</code>の定義</summary>

**(2025/02/09追記)** Tailwind v4で`translate-*`系の実装が`transform`から`translate`に変わったので、アニメーションもそれに合わせて`transform: 'translateX(100%)'`から`translate: '100%'`に修正しました。これをしないと、別プロパティなので置換ではなく合算されてしまい開始位置が`200%`になってしまうためです。

```ts
theme: {
  extend: {
    animation: {
      roll: 'roll linear infinite',
    },
    keyframes: {
      roll: {
        '0%': { translate: '100%' },
        '100%': { translate: '-100%' },
      },
    },
  }
}
```

</details>

```diff
 <div class="w-full bg-gray-800">
-  <div class="w-full bg-gray-600">
+  <div class="w-full bg-gray-600 animate-roll translate-x-full [animation-duration:16s]">
     まもなく6番線に電車がまいります
   </div>
 </div>
```

<div class="w-full bg-gray-800">
  <div class="w-full bg-gray-600 animate-roll translate-x-full [animation-duration:16s]">
    まもなく6番線に電車がまいります
  </div>
</div>

3. もう1個増やす

```diff
 <div class="w-full bg-gray-800">
   <div class="w-full animate-roll bg-gray-600 translate-x-full [animation-duration:16s]">
     まもなく6番線に電車がまいります
   </div>
+  <div class="w-full animate-roll bg-gray-600 translate-x-full [animation-duration:16s]">
+    まもなく6番線に電車がまいります
+  </div>
 </div>
```

<div class="w-full bg-gray-800">
  <div class="w-full animate-roll bg-gray-600 translate-x-full [animation-duration:16s]">
    まもなく6番線に電車がまいります
  </div>
  <div class="w-full animate-roll bg-gray-600 translate-x-full [animation-duration:16s]">
    まもなく6番線に電車がまいります
  </div>
</div>

4. アニメーションの開始を半周期ずらす

```diff
 <div class="w-full bg-gray-800 overflow-hidden">
   <div class="w-full animate-roll bg-gray-600 translate-x-full [animation-duration:16s]">
     まもなく6番線に電車がまいります
   </div>
-  <div class="w-full animate-roll bg-gray-600 translate-x-full [animation-duration:16s]">
+  <div class="w-full animate-roll bg-gray-600 translate-x-full [animation-duration:16s] [animation-delay:8s]">
     まもなく6番線に電車がまいります
   </div>
 </div>
```

<div class="w-full bg-gray-800">
  <div class="w-full animate-roll bg-gray-600 translate-x-full [animation-duration:16s]">
    まもなく6番線に電車がまいります
  </div>
  <div class="w-full animate-roll bg-gray-600 translate-x-full [animation-duration:16s] [animation-delay:8s]">
    まもなく6番線に電車がまいります
  </div>
</div>

5. 一行に重ねる  
floatとネガティブマージンを使用します。巻き添えを食らって背景が消えます。

```diff
 <div class="w-full bg-gray-800">
-  <div class="w-full animate-roll bg-gray-600 translate-x-full [animation-duration:16s]">
+  <div class="float-start w-full mb-[-100%] animate-roll bg-gray-600 translate-x-full [animation-duration:16s]">
     まもなく6番線に電車がまいります
   </div>
-  <div class="w-full animate-roll bg-gray-600 translate-x-full [animation-duration:16s] [animation-delay:8s]">
+  <div class="float-start w-full animate-roll bg-gray-600 translate-x-full [animation-duration:16s] [animation-delay:8s]">
     まもなく6番線に電車がまいります
   </div>
 </div>
```

<div class="w-full bg-gray-800">
  <div class="float-start w-full mb-[-100%] animate-roll bg-gray-600 translate-x-full [animation-duration:16s]">
    まもなく6番線に電車がまいります
  </div>
  <div class="float-start w-full animate-roll bg-gray-600 translate-x-full [animation-duration:16s] [animation-delay:8s]">
    まもなく6番線に電車がまいります
  </div>
</div>

6. はみ出す部分を消す

```diff
-<div class="w-full bg-gray-800">
+<div class="w-full bg-gray-800 overflow-hidden">
   <div class="float-start w-full mb-[-100%] animate-roll bg-gray-600 translate-x-full [animation-duration:16s]">
     まもなく6番線に電車がまいります
   </div>
   <div class="float-start w-full animate-roll bg-gray-600 translate-x-full [animation-duration:16s] [animation-delay:8s]">
      まもなく6番線に電車がまいります
   </div>
 </div>
```

<div class="w-full bg-gray-800 overflow-hidden">
  <div class="float-start w-full mb-[-100%] animate-roll bg-gray-600 translate-x-full [animation-duration:16s]">
    まもなく6番線に電車がまいります
  </div>
  <div class="float-start w-full animate-roll bg-gray-600 translate-x-full [animation-duration:16s] [animation-delay:8s]">
    まもなく6番線に電車がまいります
  </div>
</div>

7. 完成！

```html
<div class="w-full overflow-hidden">
  <div class="float-start w-full mb-[-100%] animate-roll translate-x-full [animation-duration:16s]">
    まもなく6番線に電車がまいります
  </div>
  <div class="float-start w-full animate-roll translate-x-full [animation-duration:16s] [animation-delay:8s]">
    まもなく6番線に電車がまいります
  </div>
</div>
```

<div class="w-full overflow-hidden">
  <div class="float-start w-full mb-[-100%] animate-roll translate-x-full [animation-duration:16s]">
    まもなく6番線に電車がまいります
  </div>
  <div class="float-start w-full animate-roll translate-x-full [animation-duration:16s] [animation-delay:8s]">
    まもなく6番線に電車がまいります
  </div>
</div>

## さいごに

こういう動きってなんて言うの？  
多分`ロール`ではないよね？？？`電光掲示板ごっこ`？