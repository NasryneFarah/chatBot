<script>
import Message from './components/Message.vue';
export default{
  data() {
    return {
      msg_user:'',
      step: 0,
      msg_zack:[
        {
          response:'Vous êtes bien dans le projet JavaScript. \nDites-moi quel est le vôtre ?',
          conditon: (msg)=> msg.toLowerCase().includes('javascript')
        }
      ],

      msg: [
        {
          date: Date.now(),
          expediteur:'Zack',
          text:" Bienvenue, moi c’est Zack, votre serviteur, que puis-je faire pour vous ? ",
        },

        {
          date: Date.now(),
          expediteur:'Adam',
          text:" Bonjour Zack ",
        }
      ]
    }
  },

  components: {
    Message
  },

  methods: {
    //La fonction ajout nous permettra d'envoyer des messages une fois avoir cliqué sur le bouton

    ajout(){
      this.msg.push(
        {
          date:Date.now(),
          expediteur:'Adam',
          text: this.msg_user,
        }
        )

        this.msg.push(
        {
          date:Date.now(),
          expediteur:'Zack',
          text: this.response_zack,
        }
        )

        this.msg_user=''
    }
  },

  computed: {
    response_zack() {
       if (this.msg_zack[this.step].conditon(this.msg_user)) {
          let step = this.step
          this.step++
          return this.msg_zack[step].response
        
       } else {
          return "Je n’ai pas bien saisi, pouvez-vous reformuler ?"
         }
      }
    }
}

   
 

</script>

<template>
  <div class="container">
    <div class="zone_msg mt-5">
      <div class="dialogue">
        <!-- <div class="d-flex">
          <i class="bi bi-person mx-2"></i>
          <p class="msg">{{ msg[0].text }}</p>
        </div> -->
        <!-- <div class="d-flex" :class="{'flex-row-reverse':m.expediteur !='Zack'}" v-for="m in msg">
          <i class="bi bi-person mx-2"></i>
          <p class="msg">{{ m.text }}</p>
        </div> -->

        <Message v-for="m in msg" :expediteur="m.expediteur" :text="m.text"/>


      </div>
      <div class="saisi_msg row">
        <div class="textarea col-9">
          <textarea placeholder="Saisissez votre message ici" id="" rows="2" class="w-100 h-100" v-model="msg_user"></textarea>
        </div>

        <div class="btn_envoie col-3">
          <button class="send w-100 bg-primary h-100" @click="ajout()"><i class="bi bi-send text-white"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.lottie{
  position: absolute;
}

#app{
  position: absolute;
  z-index: 1;
  width: 100vw;
}

.zone_msg {
  width: 60%;
  height: 600px;
  border: 1px solid black;
  margin: auto;
  padding: 10px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
}

.send{
  border: none;
  border-radius: 5px;
}

.btn_envoie{
  padding-left: 0;
}

.dialogue{
  height: 500px;
}

.msg{
  padding: 10px;
  background-color: rgb(195, 193, 193);
  border-radius: 5px;
}

</style>
