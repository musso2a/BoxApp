<template>
  <ion-page>
  <ion-header class="ion-no-border">
    <ion-toolbar>
      <a href="/"><ion-title><img src="https://i.ibb.co/jRGvMvc/logo.png" alt=""></ion-title></a>
    </ion-toolbar>
  </ion-header>

    <ion-content>

      <ion-card>

        <img src="../../public/img/img/niolu.jpg" class="card-img"/>

        <ion-card-content>
          <ion-card-title>
            Nouvelle Box !
          </ion-card-title>
          <ion-card-subtitle>02/02/02</ion-card-subtitle>
          <br>
          <p>
            Une nouvelle Box est arrivée et voici son contenu...<a>Lire la suite ➡ </a>
          </p>
        </ion-card-content>

      </ion-card>

      <ion-card>

        <img src="../../public/img/img/niolu.jpg" alt="" class="card-img"/>

        <ion-card-content>
          <ion-card-title>
            Nouvelle Box !
          </ion-card-title>
          <ion-card-subtitle>02/02/02</ion-card-subtitle>
          <br>
          <p>
            Une nouvelle Box est arrivée et voici son contenu...<a>Lire la suite ➡ </a>
          </p>
        </ion-card-content>

      </ion-card>

      <ion-card>

        <img src="../../public/img/img/niolu.jpg" class="card-img" alt=""/>

        <ion-card-content>
          <ion-card-title>
            Nouvelle Box !
          </ion-card-title>
          <ion-card-subtitle>02/02/02</ion-card-subtitle>
          <br>
          <p>
            Une nouvelle Box est arrivée et voici son contenu...<a>Lire la suite ➡ </a>
          </p>
        </ion-card-content>

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
  IonHeader,
  IonTitle,
  IonToolbar,
    IonFooter,
    IonPage,
    IonCard,
    IonCardTitle,
    IonCardContent,
    IonContent,
    IonCardSubtitle,
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: "News",
  components: {
    IonToolbar,
    IonTitle,
    IonHeader,
    IonFooter,
    IonPage,
    IonCard,
    IonCardTitle,
    IonCardContent,
    IonContent,
    IonCardSubtitle
  },
});
</script>

<style scoped>
a {
  color: #0d0d0d;
  text-decoration: underline;
}
ion-card {
  border-radius: 0;
  border: #0d0d0d 1px solid;
}
.card-img {
  border-bottom: #0d0d0d 1px solid;
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