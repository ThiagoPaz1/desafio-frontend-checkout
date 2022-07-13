<template>
  <form>
    <div>
      <h2>Quais e quantos adesivos deseja ?</h2>
      <ul>
        <li :key="index" v-for="(item, index) in tecList">
          {{ item }} {{ counter }}
          <button>+</button>
          <button>-</button>
        </li>
      </ul>
    </div>
  </form>
</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Header',
    data() {
      return {
        tecList: ['React', 'Vue', 'Angula'],
        counter: 0,
      }
    },
    methods: {

    }
  }
</script>