<template>

  <ion-header translucent>
  <ion-toolbar>
    <a href="/"><ion-title><img src="https://i.ibb.co/jRGvMvc/logo.png" alt=""></ion-title></a>

  </ion-toolbar>
</ion-header>,
  <br>
  <ion-page>
    <br>
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
            Une bouteille de vin COrse
          </li>
        </ul>
      </ion-card-content>
      <section class="full-width">

        <ion-button expand="full" color="dark" href="/produit">Je m'abonne !</ion-button>
      </section>
    </ion-card>

    <ion-card>
      <img  alt="" src="../../public/img/img/niolu.jpg" class="card-img">
      <ion-card-header>
        <ion-card-title>NIOLU</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <ul>
          <li>
           Un morceau de charcuterie Corse
          </li>
          <li>
           Un morceau de fromage Corse
          </li>
          <li>
           Une confiture de saison
          </li>
        </ul>
      </ion-card-content>
      <section class="full-width">

        <ion-button expand="full" color="dark">Je m'abonne !</ion-button>
      </section>
    </ion-card>

    <ion-card>
      <img  alt="" src="../../public/img/img/taravu.jpg" class="card-img">
      <ion-card-header>
        <ion-card-title>TARAVU</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <ul>
          <li>
            Un morceau de charcuterie Corse
          </li>
          <li>
            Un morceau de fromage Corse
          </li>
          <li>
            Une bouteille de vin Corse
          </li>
        </ul>
      </ion-card-content>
      <section class="full-width">

        <ion-button expand="full" color="dark">Je m'abonne !</ion-button>
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

<script >
import {
  IonCardHeader,
  IonTitle,
  IonToolbar,
  IonFooter,
  IonCardTitle,
  IonCardContent,
    IonPage

} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Products",
  components: {
    IonFooter,
    IonCardHeader,
    IonTitle,
    IonToolbar,
    IonPage,
    IonCardTitle,
    IonCardContent,

  }
});
</script>

<!--<script>-->
<!--export default {-->
<!--name: "Products"-->
<!--}-->
<!--</script>-->

<style scoped>
ul {
  list-style: none;
}
li {
  padding-top: 3px;
  font-weight: lighter;
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

ion-button {
  /*background-color: #0d0d0d;*/
}
.button-bar {
  display: flex;
  justify-content: space-evenly;
}
.footer-btn {
  --border-radius: 0px;
}

#footer {
  border: #0d0d0d 1px solid;
}
</style>