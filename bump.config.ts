import { defineConfig } from 'bumpp';
import { execSync } from 'node:child_process';

export default defineConfig({
  // commit 消息模板, %s 会替换为版本号, 传 false 表示不生成 commit
  commit: 'chore: release version v%s',
  // commit 消息打 git 标签, %s 会替换为版本号, 传 false 表示不打 tag
  tag: 'v%s',
  // 是否推送 commit 和 tag, 传入 false 表示不推送
  push: true,
  // 是否提交所有文件, 传入 false 表示只提交 bumpp 更改的文件
  all: true,
  // 在发布之前是否需要检查未处理的 git 树, 传入 true 表示不检查
  noGitCheck: false,
  // 是否跳过 git 提交时的钩子, 传入 true 表示跳过
  noVerify: true,
  // 配置要修改版本号的文件
  files: ['package.json'],
  execute: (config) => {
    try {
      execSync('git add .');
      execSync(`git commit -m "chore: release v${config.state.newVersion}" --no-verify`);
    } catch (e) {
      console.log(e);
    }
  },
  // 是否需要确认修改, 传入 true 表示需要确认
  confirm: false,
});
