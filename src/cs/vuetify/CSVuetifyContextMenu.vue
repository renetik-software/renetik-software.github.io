<template>
  <v-menu :position-x="contextMenuX" :position-y="contextMenuY" absolute offset-y v-model="isContextMenuVisible">
    <v-list>
      <v-list-tile :key="index" @click="item.onClick()" v-for="(item, index) in menuItems">
        <v-list-tile-title v-html="item.title"/>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>
<script lang="ts" src="./CSVuetifyContextMenu.vue.ts"/>
