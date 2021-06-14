<template>
  <ion-page>
  <ion-header class="ion-no-border">
    <ion-toolbar>
      <a href="/"><ion-title><img src="https://i.ibb.co/jRGvMvc/logo.png" alt=""></ion-title></a>
    </ion-toolbar>
  </ion-header>
    <ion-content fullscreen>
      <br>
      <h1 style="text-align: center">Nos Boxs</h1>
      <ion-card>
        <img  alt="" src="../../public/img/img/balagne.jpg" class="card-img">
        <ion-card-header>
          <ion-card-title>BALAGNE</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ul>
            <li>
              Un morceau de charcuterie Corse
            </li>
            <li>
              Une bouteille de vin Corse
            </li>
          </ul>
        </ion-card-content>

        <ion-item>
          <ion-label> Durée Abonnement</ion-label>
          <ion-select value="notifications" interface="action-sheet">
            <ion-select-option value="1 mois">1 mois</ion-select-option>
            <ion-select-option value="2 mois ">2 mois </ion-select-option>

          </ion-select>
        </ion-item>
        <section class="full-width">

          <ion-button expand="full" color="dark" href="/produit">Je m'abonne !</ion-button>
        </section>
      </ion-card>

    </ion-content>


    <ion-footer class="ion-no-border" id="footer">
      <ion-toolbar>
        <section class="button-bar">
          <ion-button size="small" color="dark" class="footer-btn" href="/home">Home</ion-button>
          <ion-button size="small" color="dark" class="footer-btn" href="/produits">Produits</ion-button>
          <ion-button size="small" color="dark" class="footer-btn" href="/contact">Contact</ion-button>
          <ion-button size="small" color="dark" class="footer-btn" href="/news">News</ion-button>
          <ion-button size="small" color="dark" class="footer-btn" href="/login">Login</ion-button>
          <ion-button size="small" color="dark" class="footer-btn" shape="undefined" href="user">User</ion-button>
        </section>
      </ion-toolbar>
    </ion-footer>

  </ion-page>
</template>

<script>
import {

  IonTitle,
  IonToolbar,
  IonFooter,
  IonPage

} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Product",
  components: {
    IonFooter,
    IonTitle,
    IonToolbar,
    IonPage,



  }
});
</script>

<style scoped>
.button-bar {
  display: flex;
  justify-content: space-evenly;
}
.footer-btn {
  --border-radius: 0px;
}

ion-card {
  color: #000000;
  border-radius: 0;
  border: #0d0d0d 1px solid;

}
ion-card-title {
  text-align: center;
}

.card-img {
  border-bottom: #0d0d0d 1px solid;
}

#footer {
  border: #0d0d0d 1px solid;
}
</style>