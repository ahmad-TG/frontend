<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Aplication</q-item-label>

        <!-- Home -->
        <q-item clickable tag="a"  href="/#/">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>

          <q-item-section>
            <q-item-label>HOME</q-item-label>
            <q-item-label caption>halaman utama</q-item-label>
          </q-item-section>
        </q-item>

        <!-- tabel admin-->
        <q-item clickable tag="a"  href="/#/admin">
          <q-item-section avatar>
            <q-icon name="people_alt" />
          </q-item-section>

          <q-item-section>
            <q-item-label>ADMIN</q-item-label>
            <q-item-label caption>Tabel Admin</q-item-label>
          </q-item-section>
        </q-item>

        

        <q-item clickable tag="a" href="/#/employee">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Employee</q-item-label>
            <q-item-label caption>Tabel Employee</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a"  href="/#/owner">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Owner</q-item-label>
            <q-item-label caption>Tabel owner</q-item-label>
          </q-item-section>
        </q-item>

        <!-- Login -->
        <q-item clickable tag="a"  href="/#/login">
          <q-item-section avatar>
            <q-icon name="face" />
          </q-item-section>
          
          <q-item-section>
            <q-item-label>Logout</q-item-label>
            <q-item-label caption>Keluar Aplikasi</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
