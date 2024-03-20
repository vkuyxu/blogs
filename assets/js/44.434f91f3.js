(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{463:function(s,a,t){"use strict";t.r(a);var e=t(2),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"版本控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本控制"}},[s._v("#")]),s._v(" 版本控制")]),s._v(" "),a("p",[s._v("通过上一章节的学习，你已经学会了修改文件，然后把修改提交到 Git 版本库，现在，再练习一次，修改 readme.txt 文件如下：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("Git is a distributed version control system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nGit is free software distributed under the "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GPL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("然后尝试提交：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("$ git add readme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("txt\n$ git commit "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"append GPL"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("master "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3628164")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" append "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GPL")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" file changed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("insertion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 18px deleted\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("像这样，你不断对文件进行修改，然后不断提交修改到版本库里，就好比玩 RPG 游戏时，每通过一关就会自动把游戏状态存盘，如果某一关没过去，你还可以选择读取前一关的状态。有些时候，在打 Boss 之前，你会手动存盘，以便万一打 Boss 失败了，可以从最近的地方重新开始。Git 也是一样，每当你觉得文件修改到一定程度的时候，就可以“保存一个快照”，这个快照在 Git 中被称为 commit。一旦你把文件改乱了，或者误删了文件，还可以从最近的一个 commit 恢复，然后继续工作，而不是把几个月的工作成果全部丢失。\n现在，我们回顾一下 readme.txt 文件一共有几个版本被提交到 Git 仓库里了：")]),s._v(" "),a("p",[s._v("版本 1：wrote a readme file")]),s._v(" "),a("p",[s._v("版本 2：add distributed")]),s._v(" "),a("p",[s._v("版本 3：append GPL")]),s._v(" "),a("p",[s._v("当然了，在实际工作中，我们脑子里怎么可能记得一个几千行的文件每次都改了什么内容，不然要版本控制系统干什么。版本控制系统肯定有某个命令可以告诉我们历史记录，在 Git 中，我们用 git log 命令查看：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("$ git log\ncommit "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1094")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("adb7b9b3807259d8cb349e7df1d4d6477073")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HEAD")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("Author")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Michael Liao "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("askxuefeng@gmail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("Date")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("   Fri May "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("06")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0800")]),s._v("\n\n    append "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GPL")]),s._v("\n\ncommit e475afc93c209a690c39c13a46716e8fa000c366\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("Author")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Michael Liao "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("askxuefeng@gmail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("Date")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("   Fri May "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("03")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("36")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0800")]),s._v("\n\n    add distributed\n\ncommit eaadf4e385e865d25c48e7ca9c8395c3f7dfaef0\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("Author")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Michael Liao "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("askxuefeng@gmail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("Date")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("   Fri May "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("59")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0800")]),s._v("\n\n    wrote a readme file\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[a("code",[s._v("git log")]),s._v(" 命令显示从最近到最远的提交日志，我们可以看到 3 次提交，最近的一次是 "),a("code",[s._v("append GPL")]),s._v("，上一次是 "),a("code",[s._v("add distributed")]),s._v("，最早的一次是 "),a("code",[s._v("wrote a readme file")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"版本回退"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本回退"}},[s._v("#")]),s._v(" 版本回退")]),s._v(" "),a("p",[s._v("现在，我们要把当前版本 append GPL 回退到上一个版本 "),a("code",[s._v("add distributed")]),s._v("，就可以使用 "),a("code",[s._v("git reset")]),s._v(" 命令：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("$ git reset "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("hard "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HEAD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HEAD")]),s._v(" is now at e475afc add distributed\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("--hard 参数有啥意义？这个后面再讲，现在你先放心使用。\n看看 "),a("code",[s._v("readme.txt")]),s._v(" 的内容是不是版本 "),a("code",[s._v("add distributed")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("$ cat readme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("txt\nGit is a distributed version control system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nGit is free software"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("果然被还原了。")]),s._v(" "),a("p",[s._v("还可以继续回退到上一个版本 wrote a readme file，不过且慢，让我们用 git log 再看看现在版本库的状态：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("$ git log\ncommit "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("e475afc93c209a690c39c13a46716e8fa000c366")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HEAD")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("Author")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Michael Liao "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("askxuefeng@gmail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("Date")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("   Fri May "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("03")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("36")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0800")]),s._v("\n\n    add distributed\n\ncommit eaadf4e385e865d25c48e7ca9c8395c3f7dfaef0\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("Author")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Michael Liao "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("askxuefeng@gmail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("Date")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("   Fri May "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("59")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0800")]),s._v("\n\n    wrote a readme file\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("最新的那个版本 append GPL 已经看不到了！好比你从 21 世纪坐时光穿梭机来到了 19 世纪，想再回去已经回不去了，肿么办？")]),s._v(" "),a("p",[s._v("办法其实还是有的，只要上面的命令行窗口还没有被关掉，你就可以顺着往上找啊找啊，找到那个 append GPL 的 commit id 是 1094adb...，于是就可以指定回到未来的某个版本：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("$ git reset "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("hard 1094a\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HEAD")]),s._v(" is now at 83b0afe append "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GPL")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("版本号没必要写全，前几位就可以了，Git 会自动去找。当然也不能只写前一两位，因为 Git 可能会找到多个版本号，就无法确定是哪一个了。")]),s._v(" "),a("p",[s._v("再小心翼翼地看看 readme.txt 的内容：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("$ cat readme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("txt\nGit is a distributed version control system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nGit is free software distributed under the "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GPL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("现在，你回退到了某个版本，关掉了电脑，第二天早上就后悔了，想恢复到新版本怎么办？找不到新版本的 commit id 怎么办？\n在 Git 中，总是有后悔药可以吃的。当你用"),a("code",[s._v("$ git reset --hard HEAD^")]),s._v("回退到"),a("code",[s._v("add distributed")]),s._v("版本时，再想恢复到"),a("code",[s._v("append GPL")]),s._v("，就必须找到"),a("code",[s._v("append GPL")]),s._v("的 commit id。Git 提供了一个命令"),a("code",[s._v("git reflog")]),s._v("用来记录你的每一次命令：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("$ git reflog\ne475afc "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HEAD")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" reset"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" moving to "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HEAD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1094")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("adb")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HEAD")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HEAD")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" commit"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" append "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GPL")]),s._v("\ne475afc "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HEAD")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" commit"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" add distributed\neaadf4e "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HEAD")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("commit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("initial"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" wrote a readme file\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("终于舒了口气，从输出可知，"),a("code",[s._v("append GPL")]),s._v("的 commit id 是 1094adb。\n再小心翼翼地使用"),a("code",[s._v("$ git reset --hard 1094a")]),s._v("命令回退到"),a("code",[s._v("append GPL")]),s._v("版本：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("$ git reset "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("hard 1094a\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HEAD")]),s._v(" is now at 1094adb append "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GPL")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("Git 确实把"),a("code",[s._v("append GPL")]),s._v("给删了。")]),s._v(" "),a("h2",{attrs:{id:"工作区、暂存区和版本库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作区、暂存区和版本库"}},[s._v("#")]),s._v(" 工作区、暂存区和版本库")]),s._v(" "),a("h3",{attrs:{id:"工作区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作区"}},[s._v("#")]),s._v(" 工作区")]),s._v(" "),a("p",[s._v("就是你在电脑里能看到的目录。")]),s._v(" "),a("h3",{attrs:{id:"暂存区-stage-或-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#暂存区-stage-或-index"}},[s._v("#")]),s._v(" 暂存区（stage 或 index）")]),s._v(" "),a("p",[s._v("暂存区是一个关键的概念，它位于工作区（我们创建的本地仓库所在的目录）与版本库之间。暂存区一般存放在"),a("code",[s._v(".git")]),s._v(" 目录下的 "),a("code",[s._v("index")]),s._v(" 文件中，因此有时我们也把暂存区叫做索引("),a("code",[s._v("index")]),s._v(")。")]),s._v(" "),a("p",[s._v("暂存区的主要作用在于更好地控制代码的变化。当我们对工作区的文件进行修改（包括新增、修改、删除等操作）后，如果希望将这些变化提交到版本库中，首先需要将这些文件添加到暂存区。")]),s._v(" "),a("h3",{attrs:{id:"版本库-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本库-repository"}},[s._v("#")]),s._v(" 版本库（Repository）")]),s._v(" "),a("p",[s._v("工作区有一个隐藏目录"),a("code",[s._v(".git")]),s._v("，这个不算工作区，而是 Git 的版本库。")]),s._v(" "),a("p",[s._v("Git 的版本库里存了很多东西，其中最重要的就是称为 stage（或者叫 index）的暂存区，还有 Git 为我们自动创建的第一个分支"),a("code",[s._v("master")]),s._v("，以及指向"),a("code",[s._v("master")]),s._v("的一个指针叫"),a("code",[s._v("HEAD")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("HEAD")]),s._v("指向的版本就是当前版本，因此，Git 允许我们在版本的历史之间穿梭，使用命令"),a("code",[s._v("git reset --hard commit_id")]),s._v("。")]),s._v(" "),a("li",[s._v("穿梭前，用"),a("code",[s._v("git log")]),s._v("可以查看提交历史，以便确定要回退到哪个版本。")]),s._v(" "),a("li",[s._v("要重返未来，用"),a("code",[s._v("git reflog")]),s._v("查看命令历史，以便确定要回到未来的哪个版本。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);