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

    <!-- <table>
      <tr>
        <td><input v-model="message" @keyup="handlekeyup"/></td>
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
        <td>
          <h5 v-if='message.length'> {{ message }}</h5>
          <!-- <h5 v-else-if='message.length>="1"'> kalimat kurang</h5> -->
          <h5 v-else>No Massage</h5>
          
        </td>
      </tr>
      <tr>
          <td>Conver To UpperCase :</td>
          <td><h5>{{ uppercaseMessage() }}</h5></td>
          <td><h5>{{ lowercaseMessage() }}</h5></td>
          
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
      if( e.keyCode == 27 ){
        this.message = 'ESC'
      } else if (e.keyCode == 27 ){
        this.message = 'A'
      }
    },
    uppercaseMessage(){
      return this.message.toUpperCase()
      
    },
    lowercaseMessage(){
      return this.uppercaseMessage().toLowerCase()
    }
  }
}

</script>
