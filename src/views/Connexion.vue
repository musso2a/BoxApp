<template>
  <ion-header class="ion-no-border">
    <ion-toolbar>
      <a href="/"><ion-title><img src="https://i.ibb.co/jRGvMvc/logo.png" alt=""></ion-title></a>
    </ion-toolbar>
  </ion-header>
  <ion-page>
    <ion-content style="overflow: auto">
  <div class="call-to-action">
    <br>
    <br>
    <br>
    <ion-card class="login-card">
      <ion-card-header>
        <ion-card-title>CONNEXION</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <form>
          <ion-label position="stacked">Email</ion-label>
          <ion-input placeholder="Email"></ion-input>

          <ion-label position="stacked">Mot de passe</ion-label>
          <ion-input placeholder="Mot de passe"></ion-input>
          <br>
          <section>
            <a class="link-mdp"><header>Mot de passe oublié ?</header></a>
            <ion-button expand="full" color="dark">CONNEXION</ion-button>
          </section>
        </form>

      </ion-card-content>
    </ion-card>

    <ion-card class="login-card">
      <ion-card-header>
        <ion-card-title>S'ENREGISTRER</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <form>
          <ion-label position="stacked">Email</ion-label>
          <ion-input placeholder="Email"></ion-input>

          <ion-label position="stacked">Mot de passe</ion-label>
          <ion-input placeholder="Mot de passe"></ion-input>
          <br>
          <section>
            <ion-button expand="full" color="dark">S'ENREGISTRER</ion-button>
          </section>
        </form>
      </ion-card-content>
    </ion-card>
<!--    <br>-->
<!--    <ion-card class="login-card">-->
<!--      <ion-card-header>-->
<!--      <ion-title>Connexion</ion-title>-->
<!--      </ion-card-header>-->
<!--      <form action="">-->

<!--      </form>-->
<!--    </ion-card>-->

<!--    <ion-card class="login-card"></ion-card>-->
  </div>
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
  IonCard,
  IonHeader,
  IonTitle,
  IonToolbar,
    IonCardHeader,
    IonLabel,
    IonButton,
    IonPage,
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Connexion",
  components: {
    IonCard,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCardHeader,
    IonLabel,
    IonButton,
    IonPage
  }
});
</script>

<style scoped>

.link-mdp {
  color: #0d0d0d;
  text-decoration: underline;
}

#container a {
  color: #0d0d0d;
}
.login-card {
  border: #0d0d0d 1px solid;
  background: white;
  border-radius: 0;
  height: 300px;
}
.call-to-action {
  background-image: url('../../public/img/img/plage.jpg');
  background-size: cover;
  height: 100vh;
  background-color: #4a5568;
  overflow: auto;
}
ion-card-title {
  color: black;
  text-align: center;

}

ion-label {
  font-weight: bold;
  color: black;
}
ion-button {
  border-radius: 0;
}
ion-input {
  border: 1px solid black;
  padding-bottom: 0px;
}

.button {
  border-radius: 0;
}
.button-bar {
  display: flex;
  justify-content: space-evenly;
  overflow-x: scroll;
}
.footer-btn {
  --border-radius: 0px;
}
#footer {
  border: #0d0d0d 1px solid;
  /*overflow-x: scroll;*/
}

</style>