<script setup lang="ts">
import { ref,reactive  } from 'vue'
const note = reactive({
  count: 0 ,
  isInit: true
});

const handleMouseDown = () => {
  console.log('handleMouseDown');
  note.isInit = false;
}

</script>

<template>
  <!-- 工具栏 -->
  <header class="one-plus-toolbar">

  </header>
  <main>
    <!-- 文本输入框 -->
    <div class="note-view-wrapper">
      <!-- 默认提示 -->
      <div class="note-view-container" v-if="note.isInit">
        <span>&nbsp;</span>
      </div>
      <!-- 展示区 -->
      <article class="note-editor" @mousedown="handleMouseDown">

      </article>
    </div>

    <!-- 统计字数 -->
    <div class="word-count-container">{{ note.count }} 字</div>
  </main>
</template>

<style scoped lang="stylus">
  .note-view-wrapper > .note-view-container::before
    position absolute
    content "输入“/”可插入内容"
    color rgb(204, 204, 204)
    white-space nowrap
    text-indent 0
    display inline-block
 .note-view-wrapper
    position relative
    width 100%
    height 100%
    .note-editor
      width 100%
      height 100rem
 .note-view-container
  .word-count-container
    position absolute
    right 1rem
    bottom 1rem
</style>
