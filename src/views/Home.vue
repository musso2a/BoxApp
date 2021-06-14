<template>
  <ion-header class="ion-no-border">
    <ion-toolbar>
      <a href="/"><ion-title><img src="https://i.ibb.co/jRGvMvc/logo.png" alt=""></ion-title></a>
    </ion-toolbar>
  </ion-header>
  <ion-page>



  <div class="call-to-action">

    <div id="container">
      <br>
      <h1>Bienvenue chez Corsica Box</h1>
      <p>Une box mensuelle de produits Corse directement livrée chez vous !</p>
      <section class="full-width">

        <ion-button expand="full" color="dark" href="/produits">Decouvrir nos Boxs</ion-button>
      </section>
    </div>
<!--    <div class="info">-->
<!--      <h1>Bienvenue chez CorsicaBox</h1>-->
<!--      <p>Une box mensuelle de produits Corse directement livrée chez vous !</p>-->

<!--    </div>-->
  </div>


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
  IonPage,
  IonFooter,
    IonButton,
  IonHeader,
  IonTitle,
  IonToolbar,

} from '@ionic/vue';
import { defineComponent } from 'vue';


export default defineComponent({
  components: {
    IonFooter,
    IonButton,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonPage,
  }
});
</script>

<style scoped>


#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
#container strong {
  font-size: 20px;
  line-height: 26px;
}
#container p {
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  margin: 0;
  width: auto;
}
#container a {
  text-decoration: none;
}

.call-to-action {
  background-image: url('../../public/img/img/montagne.jpg');
  background-size: cover;
  height: 100vh;
  background-color: #4a5568;
}
.button-bar {
  display: flex;
  justify-content: space-evenly;

}
.footer-btn {
  --border-radius: 0px;
}
.info {

}
#footer {
  border: #0d0d0d 1px solid;
}
</style>