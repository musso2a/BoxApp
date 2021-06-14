<template>
  <ion-header class="ion-no-border">
    <ion-toolbar>
      <a href="/"><ion-title><img src="https://i.ibb.co/jRGvMvc/logo.png" alt=""></ion-title></a>
    </ion-toolbar>
  </ion-header>
  <ion-page>
    <ion-content fullscreen>
      <div class="contact"></div>
      <br>
      <h1 style="text-align: center">Bienvenue User</h1>
      <ion-card class="login-card">
        <ion-card-header>
          <ion-card-title>MON COMPTE</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <form>
            <ion-label position="stacked">Nom</ion-label>
            <ion-input placeholder="Nom"></ion-input>

            <ion-label position="stacked">Prenom</ion-label>
            <ion-input placeholder="Prenom"></ion-input>

            <ion-label position="stacked">Email</ion-label>
            <ion-input placeholder="Email"></ion-input>

            <ion-label position="stacked">Adresse</ion-label>
            <ion-input placeholder="Adresse"></ion-input>

            <ion-label position="stacked">Mot de passe</ion-label>
            <ion-input placeholder="Mot de passe"></ion-input>
            <br>
            <section>
              <ion-button expand="full" color="dark">Mettre a jour mes informations</ion-button>
            </section>
          </form>
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
  IonCardHeader,
  IonTitle,
  IonToolbar,
  IonCardTitle,
  IonCardContent,
  IonFooter,
  IonPage,

  IonInput,
  IonHeader,
  IonButton,
  IonCard,
  IonContent,

  IonLabel,

} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: "User",
  components: {
    IonToolbar,
    IonTitle,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonFooter,
    IonPage,

    IonInput,
    IonHeader,
    IonButton,
    IonCard,
    IonContent,

    IonLabel,

  },
});
</script>

<style scoped>
.contact {
  height: 50px;
  background: white;
}
ion-card-title {
  text-align: center;
}
ion-input {
  border: #0d0d0d 1px solid;
}
ion-label {
  font-weight: bold;
}
.login-card {
  border: #0d0d0d 1px solid;
}
ion-card {
  border-radius: 0;
}

ion-input {
  border: 1px black;
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