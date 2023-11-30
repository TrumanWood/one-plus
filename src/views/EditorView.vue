<script setup lang="ts">
import { ref,reactive  } from 'vue'
const note = reactive({
  count: 0 ,
  isInit: true
});


</script>

<template>
  <!-- 工具栏 -->
  <header class="one-plus-toolbar">

  </header>
  <main>
    <!-- 文本输入框 -->
    <div class="note-view-wrapper">
      <!-- 展示区 -->
      <div class="contenteditable" placeholder="Press ‘space’ for AI, ‘/’ for commands…" data-content-editable-leaf="true" contenteditable="true" >

      </div>
    </div>

    <!-- 统计字数 -->
    <div class="word-count-container">{{ note.count }} 字</div>
  </main>
</template>

<style scoped lang="stylus">
  [contenteditable]:empty:after
    content: attr(placeholder)
  .contenteditable
    max-width 100%
    width 100%
    white-space pre-wrap
    word-break break-word
    caret-color rgb(55, 53, 47)
    padding: 3px 2px
    min-height: 1em
    color rgb(55, 53, 47)
    -webkit-text-fill-color rgba(55, 53, 47, 0.5)
</style>
