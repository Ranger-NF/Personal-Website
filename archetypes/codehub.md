---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }}
author: Fahad
series:
- CodeHub
codeFile: "code/{{ .File.ContentBaseName }}.py"
isCodeRunnable: true
---
