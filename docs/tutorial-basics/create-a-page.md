---
sidebar_position: 1
---

# ページの作成

**マークダウンまたはReact** ファイルを`src/pages`に追加して**単独で動作するページ**を作成しよう:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## 最初のReactページを作成する

`src/pages/my-react-page.js`を以下の内容で作成してください:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

新しいリンクはローカルの以下のリンクで動作するようになりました。 [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).

## 最初のマークダウンページを作成しよう

`src/pages/my-markdown-page.md`に以下の内容のファイルを作ろう:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

新しいページは以下ローカルのリンクで動作します。 [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).
