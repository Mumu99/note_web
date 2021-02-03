# git 常用指令

mkdir XX：创建一个空目录 XX 指目录名
pwd：显示当前目录的路径
cat xx：查看 xx 文件内容
git init：吧当前的目录变成可以管理的 git 仓库，生成隐藏的.git 文件
git add xx：把 xx 文件添加到暂存区
git commit -m “xx”：提交文件 -m 后面的是注释
git status：查看仓库状态
git log：查看历史记录
git reset --hard HEAD^：网上回退一个版本
git reflog：查看历史记录的版本号 id
git checkout -- xx：把 xx 文件在工作区的修改全部撤销
git rm xx：删除 xx 文件 之后要 commit
git remote add origin https://github.com/qiuhaifeng01/a.git 关联一个远程库
git push -u（第一次要用-u 以后不用）origin master：把当前 master 分支推送到远程库
git clone https://github.com/xxxxx 从远程库中克隆
git checkout -b dev：创建 dev 分支 并切换到 dev 分支上
git branch：查看当前所有的分支
git checkout master：切换回 master 分支
git merge dev：在当前分支合并 dev 分支
git branch -d dev：删除 dev 分支
git branch xxx：创建分支 xxx
git remote：查看远程库信息
git remote -v 查看远程库的详细信息
git pull origin master 将远程库的更新拉取到本地来
git push origin master git 会把 master 分支推送到远程库对应的分支上
git fetch origin dev1:dev2 git 会把 dev1 分支拉取到本地 dev2 分支上来
clear 清空
