import "./styles.css";

// リスト追加
const addList = () => {
  // テキストボックスの値を取得し、初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // TODO処理
  createIncomList(inputText);
};

// 削除処理
const delFromList = (listType, target) => {
  listType === "incomplete-list"
    ? document.getElementById("incomplete-list").removeChild(target)
    : document.getElementById("complete-list").removeChild(target);
};

// 未完了リスト追加処理
const createIncomList = (text) => {
  // divタグの生成
  const div = document.createElement("div");
  div.className = "list";

  // liタグの生成
  const li = document.createElement("li");
  li.innerText = text;

  // 完了ボタンタグ生成
  const comBuuton = document.createElement("button");
  comBuuton.innerText = "完了";

  // イベント追加
  comBuuton.addEventListener("click", () => {
    // 未完了リストから削除する
    const comTarget = comBuuton.parentNode;
    delFromList("incomplete-list", comTarget);

    // 完了リストへ追加する要素の取得
    const addToCom = comBuuton.parentNode;

    // 内容テキストの取得
    const text = addToCom.firstElementChild.innerText;

    // div以下の初期化
    addToCom.textContent = null;

    // liタグの生成
    const li = document.createElement("li");
    li.innerText = text;

    // 戻すボタンタグの生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    // イベント追加
    backButton.addEventListener("click", () => {
      // 完了リストから削除する
      const retTarget = backButton.parentNode;
      delFromList("complete-list", retTarget);

      // 内容テキストの取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncomList(text);
    });

    // divタグの子要素に各要素を設定する
    addToCom.appendChild(li);
    addToCom.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addToCom);
  });

  // 削除ボタンタグ生成
  const delBuuton = document.createElement("button");
  delBuuton.innerText = "削除";

  // イベント追加
  delBuuton.addEventListener("click", () => {
    // 親要素を削除する
    const delTarget = delBuuton.parentNode;
    delFromList("incomplete-list", delTarget);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(comBuuton);
  div.appendChild(delBuuton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

// イベント追加（追加ボタン）
document
  .getElementById("add-button")
  .addEventListener("click", () => addList());
