<template>
  <q-page class="flex flex-center">
    <!-- <img alt="Quasar logo" src="~assets/quasar-logo-full.svg"> -->
    <!-- <table>
      <tr>
        <td><input v-model='message'/></td>
        <td> <button @click="clearMessage">Clear</button></td>
      </tr>

      <tr>
        <td> <h5>Tampilkan Teks :</h5></td>
        <td><h5> {{ message }}</h5></td>
      </tr>
    </table> -->

    <table>
      <tr>
        <td><input v-model="message" @keyup="handlekeyup"/></td>
        <td> <button @click="clearMessage">Clear</button></td>
      </tr>

      <tr>
        <td> <h5>Tampilkan Teks :</h5></td>
        <td><h5> {{ message }}</h5></td>
      </tr>
    </table>

  </q-page>
</template>

<script>
export default {
    data ( ) {
      return {
          message : 'test vue'
      }
  },

  methods : {
    clearMessage ( ) {
      this.message = ''
    } ,

    handlekeyup(e){
      if( e.keyCode == 65 ){
        this.message = 'B'
      } else if (e.keyCode == 27 ){
        this.message = 'A'
      }
    }
  }
}

</script>
