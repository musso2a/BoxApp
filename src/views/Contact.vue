<template>
  <ion-header class="ion-no-border">
    <ion-toolbar>
      <a href="/"><ion-title><img src="https://i.ibb.co/jRGvMvc/logo.png" alt=""></ion-title></a>
    </ion-toolbar>
  </ion-header>
  <ion-page>
  <ion-content fullscreen>
<div class="contact"></div>

    <ion-card class="login-card">
      <ion-card-header>
        <ion-card-title>Formulaire de contact</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <form>
          <ion-label position="stacked">Nom</ion-label>
          <ion-input placeholder="Nom"></ion-input>

          <ion-label position="stacked">Email</ion-label>
          <ion-input placeholder="Email"></ion-input>

          <ion-label position="stacked">Email</ion-label>
          <ion-input placeholder="Email"></ion-input>
          <br>
          <ion-item>

            <ion-textarea rows="6" cols="15" placeholder="Votre message"></ion-textarea>
          </ion-item>
          <br>
          <section>
            <ion-button expand="full" color="dark">Envoyer</ion-button>
          </section>
        </form>
      </ion-card-content>
    </ion-card>

  <div class="map-div">
    <div style="overflow:hidden; position: relative;" class="map">
      <iframe width="100%" height="240" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=webstart%20paris+(Titre)&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">

      </iframe>

    </div>
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

<script>
import {
  IonCardHeader,
  IonTitle,
  IonToolbar,
  IonCardTitle,
  IonCardContent,
    IonFooter,
    IonPage,
  IonTextarea,
    IonInput,
  IonHeader,
  IonButton,
  IonCard,
  IonContent,
  IonItem,
    IonLabel
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Contact",
  components: {
    IonToolbar,
    IonTitle,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonFooter,
    IonPage,
    IonTextarea,
    IonInput,
    IonHeader,
    IonButton,
    IonCard,
    IonContent,
    IonItem,
    IonLabel
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